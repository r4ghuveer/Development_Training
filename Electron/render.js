const {ipcRenderer} = require('electron');
const button1 = document.getElementById('btn');


button1.addEventListener('mouseover', () => {
  button1.style.cursor = 'pointer';
    button1.style.backgroundColor='white';

});

button1.addEventListener('mouseout', () => {
  button1.style.cursor = 'default';
  button1.style.backgroundColor='bisque';
});
button1.addEventListener('click',()=>{
    ipcRenderer.send('start-tracy');
});
ipcRenderer.on('output',(event,data)=>{
    let out = document.getElementById('inp');
    out.value=data;
});