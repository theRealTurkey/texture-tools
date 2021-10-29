"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var mainWindow;
electron_1.app.on("ready", createWindow);
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 900, height: 900,
        webPreferences: { preload: __dirname + "preload.js" }
    });
    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", function () { return mainWindow.show(); });
}
