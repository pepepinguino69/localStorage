const date1 = new Date();
console.log(normalDate(date1))
function twoDigits(valueDigit){console.log(valueDigit+1);
    return valueDigit<10?'0'+valueDigit:''+valueDigit}
function normalDate(date){
    yr=date.getFullYear();
    mm=twoDigits(date.getMonth()+1);
    dd=twoDigits(date.getDate());
    hr=date.getHours();
    min =twoDigits(date.getMinutes());
    
    return dd+'/'+mm+'/'+yr+' - '+hr+':'+min

}

