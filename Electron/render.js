const {ipcRenderer} = require('electron');
const button1 = document.getElementById('btn');
const out = document.getElementById('inp');
ipcRenderer.on('output',(event,data)=>{
    out.value=data;
});
button1.addEventListener('click',()=>{
    ipcRenderer.send('start-tracy');
});



