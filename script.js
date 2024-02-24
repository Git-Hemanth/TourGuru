let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

const form=document.querySelector('form');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const subject=document.getElementById('subject');
const message=document.getElementById('message');
const Fullname=document.getElementById('name');

function sendEmail(){
    const bodyMessage=`Full Name:${Fullname.value}<br>Email:${email.value}<br> 
    Phone Number:${phone.value}<br>Subject:${subject.value}<br>Message:${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hemanthhere12@gmail.com",
        Password : "8A1DC0686382CCCADF818005DB9B69B18189",
        To : 'hemanthhere12@gmail.com',
        From : "hemanthhere12@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Thank You For Choosing Us!",
                text: "We will reach out you Soon!",
                icon: "success"
              });
        }
    });
}

    form.addEventListener("submit",(e) => {
        e.preventDefault();
    
        sendEmail();
    });
    
