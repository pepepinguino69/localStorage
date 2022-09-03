/*To Do*/

if(localStorage.getItem('comentariosGuardados2')==undefined)
{comentariosArr=[]}
else{
comentariosArr=JSON.parse(localStorage.getItem('comentariosGuardados2'))
mostrarComentariosGuardados()}
construirBotonera()
capturarComentarios()

function construirBotonera(){
    newDivPosition=document.querySelector('.contenedor')
    newDiv=document.createElement('div')
    newDiv.setAttribute('id','buttonPanel')
    newDiv.style.display='flex'
    newDiv.style.justifyContent='spaceAround'
    newDiv.style.alignContent='center'
    newDivPosition.appendChild(newDiv)
    newButtonPosition=document.querySelector('#buttonPanel')
    const  buttonPanel=[
    {'id':'borrar','label':'Borrar Tareas'},
    {'id':'comentar','label':'Agregar Tareas'},
    {'id':'selectFiles','label':'Fotos c/ Tareas'}]
    buttonPanel.forEach((e,index)=>{
        newButton=document.createElement('button')
        newButton.setAttribute('id',buttonPanel[index].id)
        newButton.innerText=buttonPanel[index].label
        newButtonPosition.appendChild(newButton)})
    document.querySelector('#borrar').addEventListener('click',(e)=>{localStorage.clear();location.reload()})
    document.querySelector('#selectFiles').addEventListener('click',(e)=>selectFile())   
    document.querySelector('#comentar').addEventListener('click', (e)=>{capturarComentarios(e)})
}

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
        displayCosas(comentariosArr[comentariosArr.length-1])
}
                                               
function mostrarComentariosGuardados(){
    comentariosArr.forEach(e=>{
    displayCosas(e)})
}   
function tachado(event){
    idClicked=event.target.id
    tipoClick=(document.querySelector('#'+idClicked).textContent)
    arrPos=parseInt(idClicked.substring(2));
    if(tipoClick!=""){
        document.querySelector('#'+idClicked).classList.toggle('colorFondo')}
    else
        {document.querySelector('#cr'+arrPos).classList.toggle('estadoCruzado')}
}
    
function displayCosas(elemento){
    pCount = document.querySelectorAll('p').length
    nuevoP=document.createElement('p')
    nuevoP.setAttribute('id','id'+pCount)
    nuevoP.addEventListener('click',(e)=>tachado(e))
    if (Object.keys(elemento)=='comentario'){
        nuevoP.textContent=elemento['comentario']}
    else{
        nuevoP.style.heigth='200px'
        imageString='images/'+elemento['foto']
        nuevoP.classList.add('wrapper')
        idImg='im'+pCount
        nuevoP.innerHTML=`<img id="${idImg}" height="150px" src="${imageString}"/>`
        idCross="cr"+pCount
        nuevoP.innerHTML+=`<img id="${idCross}" class="cross-img estadoCruzado" src="http://www.clker.com/cliparts/0/7/e/a/12074327311562940906milker_X_icon.svg.med.png" />`}
                                   
        const divComentarios=document.querySelector('.comentarios')
        const porque=divComentarios.appendChild(nuevoP)
}
    
function capturarComentarios(event){
    
    captura=document.querySelector('#comentario').value
    document.querySelector('#comentario').value=''
    if(captura.length>0){
        prueba={'comentario':limpiarTexto(captura)}
    comentariosArr.push(prueba)
    localStorage.setItem('comentariosGuardados2',JSON.stringify(comentariosArr))
    displayCosas(comentariosArr[comentariosArr.length-1])}}

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










