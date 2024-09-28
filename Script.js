let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move");
};
window.onscroll =() =>{
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
};

// email js

function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.msg');
    let btn = document.querySelector('#btn');

    btn.addEventListener('click',(e) =>{
        e.preventDefault();
        if(name.value== "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendemail (name.value,email.value,msg.value);
            success();
        }
    })

}
validate();

function sendemail(name,email,msg){
    emailjs.send("service_luyn22y","template_w1w7lq9",{
        from_name:email,
        to_name:name,
        message: msg,
        });

}

function emptyerror(){
    swal({
        title: "Oh No....",
        text: "Fields cannot be empty !",
        icon: "error",
      })
}
function success(){
    swal({
        title: "email sent successfully ",
        text: " I try to replay in 12 Hours",
        icon: "Success",
      })
}


let header = document.querySelector('header')

window.addEventListener('scroll',() => {
    header.classList.toggle('header-active',window.scrollY >0 )
})


// scroll

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// loader

var preloder = document.getElementById('loading');

function loader(){
    setTimeout(function(){
        preloder.style.display = 'none';
    }, 5000); // Delay of 5000 milliseconds (5 seconds)
}