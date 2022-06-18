let containerQR = document.querySelector('#containerQR');
let form = document.querySelector('#form');
let input = document.querySelector('#link')
const QR = new QRCode(containerQR);
let alert = document.querySelector('.alert');
let trash = document.querySelector('.delete')

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validate();

})

link.addEventListener("focus",hideAlert)


function validate(){
    if(link.value.trim()==""){
        alert.style.display="block";
      
    }else{
        QR.makeCode(link.value);
    }
}

function hideAlert(){
    alert.style.display="none";
}



