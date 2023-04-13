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
    if(button1.style.borderColor="black"){
      button1.style.borderColor="pink";
    }
    button1.style.borderColor="black";
    
    // ipcRenderer.send('start-tracy');
});
ipcRenderer.on('output',(event,data)=>{
    let out = document.getElementById('inp');
    out.value=data;
});