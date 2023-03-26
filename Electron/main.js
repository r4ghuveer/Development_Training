const {app, BrowserWindow, Menu} = require("electron");

let win = null; 

app.whenReady().then(()=> {
    const emptyMenuTemplate = []
  
  // Build an empty menu from the template
  const emptyMenu = Menu.buildFromTemplate(emptyMenuTemplate)
  
  // Set the application menu to the empty menu
  Menu.setApplicationMenu(emptyMenu)
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true, // Integrating node to electron 
        }
    })

    win.loadFile("index.html")
});