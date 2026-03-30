


export function registerSettings() {

    //  ***********************************
    //       "Default" Cursor/ Resting Cursor
    // ************************************

    game.settings.register("custom-cursor", "defaultCursor", {
        name: 'Standard Cursor',
        hint: 'Select the standard cursor icon, leave empty for foundry default',
        scope: "client",
        config: true,
        type: String,
        default: "",
        filePicker: "image",
        requiresReload: true
    });

    game.settings.register("custom-cursor", "pointerCursor", {
        name: 'Pointer Cursor',
        hint: 'Select the pointer cursor icon,leave empty for foundry default',
        scope: "client",
        config: true,
        type: String,
        default: "",
        filePicker: "image",
        requiresReload: true
    });

    game.settings.register("custom-cursor", "grabCursor", {
        name: 'Grab Cursor',
        hint: 'Select the grab cursor icon, leave empty for foundry default',
        scope: "client",
        config: true,
        type: String,
        default: "",
        filePicker: "image",
        requiresReload: true
    });

}
