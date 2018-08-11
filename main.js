// const keytar = require('keytar');
// const {app, BrowserWindow} = require("electron");

// keytar.setPassword('learning-electron', 'Test', 'secret');

// function createWindow () {
//     win = new BrowserWindow({width: 800, height: 600})

//     win.loadFile('index.html')
    
//     // This code below open the Developer Tool because Electron uses a browser instance !.
//     win.webContents.openDevTools()

// }

// app.on('ready', createWindow)

const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
});