# Building the talabat Agentic OS Console

The app ships three ways. Channel 1 needs no toolchain at all; channels 2–3 use Tauri 2 and
must be compiled **on (or for) their target platform** — a Windows installer is built on
Windows, an iOS app on macOS, etc. That is a platform constraint of native packaging, not of
this project.

---

## 1. Install as a PWA (Windows · Android · macOS · iOS · Linux) — no toolchain

The app is a fully compliant PWA (manifest + service worker + offline cache).

1. Host `src/` on any static host (GitHub Pages, Netlify, an internal server) **over HTTPS**,
   or run it locally: `npm run dev` → `http://localhost:8123`.
2. Install:
   - **Windows / Linux / macOS (Chrome or Edge):** click the *Install* icon in the address
     bar → the console becomes a standalone windowed app with its own icon and offline support.
   - **Android (Chrome):** menu → *Add to Home screen* / *Install app*.
   - **iOS (Safari):** Share → *Add to Home Screen*.
   - **macOS (Safari 17+):** File → *Add to Dock*.

This is the recommended distribution for the capstone team: one URL, every platform, instant
updates (bump `CACHE` in `sw.js` when files change).

---

## 2. Native desktop apps — Windows, macOS, Linux (Tauri 2)

### Prerequisites (once per build machine)

- **Node.js 18+** and **Rust stable** (`rustup` — https://rustup.rs)
- `npm install` in `app/agentic-os-console/` (installs the Tauri CLI)
- First time only, generate the full icon set from the master:
  `npm run icons` (expands `src-tauri/icons/icon.png` into `.ico`, `.icns`, and all PNG sizes)
- Platform extras:
  - **Windows:** Microsoft Visual Studio Build Tools (C++ workload) + WebView2 runtime
    (preinstalled on Windows 11).
  - **macOS:** Xcode Command Line Tools (`xcode-select --install`).
  - **Linux:** `libwebkit2gtk-4.1-dev`, `build-essential`, `libssl-dev`,
    `libayatana-appindicator3-dev`, `librsvg2-dev`.

### Build

```bash
cd app/agentic-os-console
npm install
npm run tauri dev     # live development window
npm run tauri build   # release artifacts
```

Artifacts land in `src-tauri/target/release/bundle/`:

| Platform | Output |
|---|---|
| Windows | `msi/…​.msi` (WiX) and `nsis/…-setup.exe` |
| macOS | `dmg/…​.dmg` and `macos/….app` (add `--target universal-apple-darwin` for Intel+Apple Silicon) |
| Linux | `deb/…​.deb` and `appimage/….AppImage` |

Code signing (optional, for distribution outside the team): standard Tauri signing config —
Authenticode on Windows, notarization on macOS.

---

## 3. Native mobile apps — Android & iOS (Tauri 2 mobile)

### Android (`.apk` / `.aab`)

Prerequisites: Android Studio (SDK + NDK + platform tools), `ANDROID_HOME`/`NDK_HOME` set,
Rust Android targets (`rustup target add aarch64-linux-android armv7-linux-androideabi`).

```bash
cd app/agentic-os-console
npm install
npm run tauri android init    # generates the Android Studio project under src-tauri/gen/android
npm run tauri android dev     # run on an emulator / connected device
npm run tauri android build   # → .aab (Play Store) ; add --apk for a sideloadable .apk
```

Sign the release with a standard Android keystore (`keytool -genkey …`), configured in
`src-tauri/gen/android` per the Tauri Android signing guide.

### iOS (`.ipa`)

Prerequisites: a Mac with Xcode 15+, an Apple Developer account,
`rustup target add aarch64-apple-ios`.

```bash
npm run tauri ios init
npm run tauri ios dev         # simulator / device
npm run tauri ios build       # archive + export .ipa via Xcode signing
```

---

## 4. CI builds — Windows, macOS, Linux, Android (no local toolchain needed)

Since no single machine has every native toolchain (and this repo's own dev container is
Linux-only), `.github/workflows/build-desktop.yml` and `.github/workflows/build-android.yml`
build the real native artifacts on GitHub-hosted runners:

- **`build-desktop.yml`** — a 3-way matrix (`windows-latest`, `macos-latest`, `ubuntu-22.04`)
  that installs Rust + Node + platform build deps, runs `npm run icons` then `npm run tauri
  build`, and uploads `.msi`/`-setup.exe` (Windows), `.dmg`/`.app` (macOS), `.deb`/`.AppImage`
  (Linux) as workflow artifacts.
- **`build-android.yml`** — installs the Android SDK/NDK and Rust Android targets on an Ubuntu
  runner, runs `tauri android init` then `tauri android build --apk --debug`, and uploads the
  sideloadable debug APK. A production release APK/AAB needs the team's own signing keystore
  added as a repo secret (see §3 above) — this workflow deliberately ships an unsigned debug
  build so it needs no secrets to run.
- iOS is **not** covered here: Tauri iOS builds require a Mac with Xcode and a paid Apple
  Developer account for real device signing, which CI cannot provide without the team's own
  credentials as secrets.

Trigger either workflow manually from the Actions tab (`workflow_dispatch`), or push a change
under `app/agentic-os-console/`. Download the built installers/APK from the run's Artifacts
list — GitHub retains them for 14 days.

---

## Notes

- **This repository's dev container is Linux** — it can serve the PWA and validate the web
  app, but native Windows/macOS/Android/iOS binaries must be produced on their respective
  platforms with the toolchains above (or via the CI workflows in §4). The Tauri scaffold here
  is complete and standard; no code changes are needed at build time.
- The Tauri shell grants the WebView **no** filesystem, shell, or network permissions
  (`capabilities/default.json` → `core:default` only); the console is a read-only viewer.
- Keep `src/` self-contained (no CDN references) so desktop/mobile builds work fully offline.
