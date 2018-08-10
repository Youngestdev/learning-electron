const {app, BrowserWindow} = require("electron");

function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})

    win.loadFile('index.html')
    
    // This code below open the Developer Tool because Electron uses a browser instance !.
    win.webContents.openDevTools()
    
}

app.on('ready', createWindow)