# Daily Second-Brain maintenance — PROPOSE-ONLY.
# Runs Claude Code headless with READ-ONLY tools and captures a CHANGELIST for the owner to review.
# It cannot modify the vault: only Read/Glob/Grep are allowed, and output is redirected to a file.
#
# Vault path defaults to <this-script>\..\vault. Override with:  .\daily-brain-maintenance.ps1 -Vault "C:\path\to\vault"
param([string]$Vault)

$ErrorActionPreference = "Stop"

if (-not $Vault) { $Vault = Join-Path $PSScriptRoot "..\vault" }
$vault      = (Resolve-Path $Vault).Path
$promptFile = Join-Path $vault "_maintenance\nightly-consolidation-prompt.md"
$outDir     = Join-Path $vault "_maintenance\changelists"
$logFile    = Join-Path $vault "_maintenance\maintenance.log"
$date       = Get-Date -Format "yyyy-MM-dd"
$outFile    = Join-Path $outDir "$date.md"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Files changed in the last ~26h (skip the maintenance machinery and raw source extracts).
$since   = (Get-Date).AddHours(-26)
$changed = Get-ChildItem -Path $vault -Recurse -File -Filter *.md |
    Where-Object {
        $_.LastWriteTime -gt $since -and
        $_.FullName -notlike "*\_maintenance\*" -and
        $_.FullName -notlike "*\_source_text\*"
    } |
    ForEach-Object { $_.FullName.Substring($vault.Length + 1) }

"[{0}] starting; {1} changed file(s)" -f (Get-Date -Format s), $changed.Count |
    Out-File -FilePath $logFile -Append -Encoding utf8

if (-not $changed -or $changed.Count -eq 0) {
    "# Brain Maintenance Changelist`n`n_$date_ - no notes changed in the last 26h. Nothing to propose." |
        Out-File -FilePath $outFile -Encoding utf8
    "[{0}] no changes; wrote empty changelist" -f (Get-Date -Format s) |
        Out-File -FilePath $logFile -Append -Encoding utf8
    exit 0
}

$prompt = (Get-Content -Raw $promptFile) +
          "`n`n--- CHANGED FILES (relative to vault root) ---`n" +
          ($changed -join "`n")

Set-Location $vault

# READ-ONLY tool allow-list is the hard guardrail. Output captured to the dated changelist.
& claude -p $prompt --allowedTools "Read Glob Grep" --add-dir $vault |
    Out-File -FilePath $outFile -Encoding utf8

"[{0}] done; changelist -> {1}" -f (Get-Date -Format s), $outFile |
    Out-File -FilePath $logFile -Append -Encoding utf8
