/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/



if(localStorage.getItem('comentariosGuardados2')==undefined)
{comentariosArr=[]}
else{
comentariosArr=JSON.parse(localStorage.getItem('comentariosGuardados2'))
mostrarComentariosGuardados()}
capturarComentarios()

function botonBorrar(){
if(comentariosArr.length>0){
    newButtonPosition=document.querySelector('.comentarios')
    newButton=document.createElement('button')
    newButton.setAttribute('id','borrar')
    newButton.innerText='Borrar Comentarios'
    newButtonPosition.appendChild(newButton)
    newButton.addEventListener('click',(e)=>{localStorage.clear();
    location.reload()})}}


function mostrarComentariosGuardados(){
botonBorrar()
for (i=0;i<comentariosArr.length;i++){
    displayCosas(comentariosArr[i])
   }   
}
function displayCosas(elemento){
    nuevoP=document.createElement('p')
    nuevoP.textContent=elemento
    const divComentarios=document.querySelector('.comentarios')
    const porque=divComentarios.appendChild(nuevoP)
}

function capturarComentarios(){
form=document.querySelector('form')
form.addEventListener('submit', (e)=>{
e.preventDefault()
captura=document.querySelector('#comentario').value
if (captura.length>5){
    comentariosArr.push(limpiarTexto(captura))
    localStorage.setItem('comentariosGuardados2',JSON.stringify(comentariosArr))
    if(comentariosArr.length==1){botonBorrar()}
    displayCosas(captura)}})}

function limpiarTexto(elemento){


return elemento.toLowerCase().trim()
}













