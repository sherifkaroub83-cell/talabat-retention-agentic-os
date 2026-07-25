// Shared entry point for desktop (main.rs) and mobile (Android/iOS) targets.
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running the talabat Agentic OS Console");
}
