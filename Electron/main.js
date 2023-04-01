const {app, BrowserWindow, Menu, ipcMain} = require("electron");
const { spawn } = require('child_process'); // for using .exe file, and displaying the output text that comes in cmd.

let win = null; 

app.whenReady().then(()=> {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true, // Integrating node to electron 
            contextIsolation: false,
        }
    })
    win.loadFile("index.html")
    
});

ipcMain.on('start-tracy',(event)=>{
    const exepath = 'G:\\Development_Training\\Electron\\exe_file\\Tracy.exe';
    const child = spawn(exepath);
    child.stdout.on('data',(data)=>{
        win.webContents.send('output',data.toString());
    });
    child.stderr.on('data',(data)=>{
        console.error(`=> ${data}`);
    });
    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});
