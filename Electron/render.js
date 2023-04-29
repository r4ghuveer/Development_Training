const {ipcRenderer} = require('electron'); // there is a "remote" module provided that reduces the amount of usage of ipcrenderer and ipcmain again and again
const button1 = document.getElementById('btn');
const close_btn=document.getElementById('close-tracy');

close_btn.addEventListener('click',()=>{
  ipcRenderer.send('close-exe');
});

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
    
    
    ipcRenderer.send('start-tracy');
});
// ipcRenderer.on('close-exe-msg',(event,data)=>{
//   let out2=document.getElementById('inp');
//   out2.val=data;
// })
ipcRenderer.on('output',(event,data)=>{
    let out = document.getElementById('inp');
    out.value=data;
});
ipcRenderer.on('terminated',(event,data)=>{
  let out2=document.getElementById('inp');
  out2.value="Tracy Terminated!";
})