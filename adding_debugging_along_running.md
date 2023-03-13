1) Go to Run
2) Add COnfiguration
3) A .vscode folder will be created, inside it go to launch.json
4) add these,
```json
    "restart": true, //this restarts the debugger along with nodemon
    "runtimeExecutable": "nodemon",
    "console":"integratedTerminal" // To get both debugger and terminal
```