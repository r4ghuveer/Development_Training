const {ipcRenderer} = require('electron');
const button1 = document.getElementById('btn');

button1.addEventListener('click',()=>{
    ipcRenderer.send('start-tracy');
});