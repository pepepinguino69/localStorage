/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/





fileSelection=''
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
    botonMax()}



function botonBorrar(){

    newButtonPosition=document.querySelector('#buttonPanel')
    newButton=document.createElement('button')
    newButton.setAttribute('id','borrar')
    newButton.innerText='Borrar Comentarios'
    newButtonPosition.appendChild(newButton)
    newButton.addEventListener('click',(e)=>{localStorage.clear();
    location.reload()})}

    function selectFile(accept = null) {
        return new Promise(async resolve => {
            const fileInputElement = document.createElement('input');
            fileInputElement.type = 'file';
            fileInputElement.style.opacity = '0';
            if (accept) fileInputElement.accept = accept;
            fileInputElement.addEventListener('change', () => {
                const file = fileInputElement.files[0];
                fileSelection= file.name;     
                document.body.removeChild(fileInputElement);
                fotoSelection(fileSelection)
                resolve(file);
                
            });
            document.body.appendChild(fileInputElement);
            setTimeout(_ => {
                fileInputElement.click();
                const onFocus = () => {
                    window.removeEventListener('focus', onFocus);
                    document.body.addEventListener('mousemove', onMouseMove);
                };
                const onMouseMove = () => {
                    document.body.removeEventListener('mousemove', onMouseMove);
                    if (!fileInputElement.files.length) {
                        document.body.removeChild(fileInputElement);
                        fileSelection='';
                        resolve(null);
                    }
                }
                window.addEventListener('focus', onFocus);
            }, 0);
        });
    }

function fotoSelection(fileName){
        prueba={'foto':fileName}
        comentariosArr.push(prueba);
        localStorage.setItem('comentariosGuardados2',JSON.stringify(comentariosArr))
        displayCosas(comentariosArr[comentariosArr.length-1])}

function botonMax(){
    newButtonPosition=document.querySelector('#buttonPanel')
    newButton=document.createElement('button')
    newButton.setAttribute('id','max')
    newButton.innerText='Cargar Fotos'
    newButtonPosition.appendChild(newButton)
    newButton.addEventListener('click',(e)=>selectFile())}
                                                       
function mostrarComentariosGuardados(){
construirBotonera()
if (comentariosArr.length>0){
botonBorrar()}
comentariosArr.forEach(e=>{
    displayCosas(e)})
   }   

function displayCosas(elemento){

    nuevoP=document.createElement('p')
    if (Object.keys(elemento)=='comentario'){
    nuevoP.textContent=elemento['comentario']}
    else{
        imageString='images/'+elemento['foto']
    nuevoP.innerHTML=`"<img src="${imageString}">"`}
    const divComentarios=document.querySelector('.comentarios')
    const porque=divComentarios.appendChild(nuevoP)
}
function capturarComentarios(){
form=document.querySelector('form')
form.addEventListener('submit', (e)=>{
e.preventDefault()
captura=document.querySelector('#comentario').value
if(captura.length>0){
    prueba={'comentario':limpiarTexto(captura)}
    comentariosArr.push(prueba)
    localStorage.setItem('comentariosGuardados2',JSON.stringify(comentariosArr))
    if(comentariosArr.length==1){construirBotonera(); botonBorrar()}
    displayCosas(comentariosArr[comentariosArr.length-1])}})
}

function limpiarTexto(elemento){
const date1 = new Date();
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










