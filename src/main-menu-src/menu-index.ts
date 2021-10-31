import {app, ipcMain, BrowserWindow} from "electron";



let mainWindow : BrowserWindow;

app.on("ready", createWindow);

function createWindow(): void
{
    mainWindow = new BrowserWindow({
        width: 900, height: 900,
        webPreferences: {preload: __dirname + "/menu-preload.js"}
    });

    mainWindow.loadFile("./main-menu/menu-index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}