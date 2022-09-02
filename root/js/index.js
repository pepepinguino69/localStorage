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

function construirBotonera(){
    newDivPosition=document.querySelector('.contenedor')
    newDiv=document.createElement('div')
    newDiv.setAttribute('id','buttonPanel')
    newDiv.style.display='flex'
    newDiv.style.justifyContent='spaceAround'
    newDiv.style.alignContent='center'
    newDivPosition.appendChild(newDiv)
    botonMax()






}

function botonBorrar(){

    newButtonPosition=document.querySelector('#buttonPanel')
    newButton=document.createElement('button')
    newButton.setAttribute('id','borrar')
    newButton.innerText='Borrar Comentarios'
    newButtonPosition.appendChild(newButton)
    newButton.addEventListener('click',(e)=>{localStorage.clear();
    location.reload()})}

function botonMax(){
    newButtonPosition=document.querySelector('#buttonPanel')
    newButton=document.createElement('button')
    newButton.setAttribute('id','max')
    newButton.innerText='Cargar Fotos x hacer'
    newButtonPosition.appendChild(newButton)
    newButton.addEventListener('click',(e)=>{
    location.reload()})}






function mostrarComentariosGuardados(){
construirBotonera()
if (comentariosArr.length>0){
botonBorrar()}
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
    if(comentariosArr.length==1){construirBotonera(); botonBorrar()}
    displayCosas(comentariosArr.slice(-1))}})}

function limpiarTexto(elemento){

const date1 = new Date();

alert( normalDate(date1)+" : "+elemento.trim().toUpperCase().substring(0,1)+elemento.trim().substring(1).toLowerCase())
return normalDate(date1)+" : "+elemento.trim().toUpperCase().substring(0,1)+elemento.trim().substring(1).toLowerCase()
}


function twoDigits(valueDigit){
    return valueDigit<10?'0'+valueDigit:''+valueDigit
}
function normalDate(date){
    yr=date.getFullYear();
    mm=twoDigits(date.getMonth()+1);
    dd=twoDigits(date.getDate());
    hr=twoDigits(date.getHours());
    mts =twoDigits(date.getMinutes());
    return dd+'/'+mm+'/'+yr+' - '+hr+':'+mts
}










