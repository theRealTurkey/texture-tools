import {app, ipcMain, BrowserWindow} from "electron";



let mainWindow : BrowserWindow;

app.on("ready", createWindow);

function createWindow(): void
{
    mainWindow = new BrowserWindow({
        width: 900, height: 900,
        webPreferences: {preload: __dirname + "preload.js"}
    });

    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}