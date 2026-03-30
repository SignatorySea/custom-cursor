import { registerSettings } from "./settings.js";


Hooks.once("init", () => {
    console.log("Custom Cursor Module Loaded");

    registerSettings();
    
    let defaultCursor = game.settings.get("custom-cursor", "defaultCursor");
    let pointerCursor = game.settings.get("custom-cursor", "pointerCursor");
    let grabCursor = game.settings.get("custom-cursor", "grabCursor");

    Object.assign(CONFIG.cursors, {
        default: defaultCursor,
        ["default-down"]: defaultCursor,
        pointer: pointerCursor,
        ["pointer-down"]: pointerCursor,
        grab: grabCursor,
        ["grab-down"]: grabCursor,
    });
});