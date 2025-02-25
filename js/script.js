
let navbar = document.querySelector('nav');
let menuLinks = document.getElementById("menu-links");

function toggleMenu() {
    menuLinks.classList.toggle('show-menu');
}

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.background = '#eefff9';
    } else {
        navbar.style.background = 'transparent';
    }
}

var lname = document.getElementById("l-name");
var lemail = document.getElementById("l-email");
var lsub = document.getElementById("l-sub");
var ltarea = document.getElementById("l-tarea")

var textname = document.getElementById("name");  // I Really don't why 'name' is not working
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");



function labelmove(inputname) {
    if (inputname == "name") {
        lname.style.transition = "all 0.2s";
        lname.style.marginTop = "-15px";
        lname.style.marginLeft = "10px";
        lname.style.zIndex = "10";
        lname.style.transform = "scale(0.9)";
        lname.style.padding = "5px 15px 5px 15px";
        lname.style.backgroundColor = "#000000";
    }

    if (inputname == "email") {
        lemail.style.transition = "all 0.2s";
        lemail.style.marginTop = "-15px";
        lemail.style.marginLeft = "10px";
        lemail.style.zIndex = "10";
        lemail.style.transform = "scale(0.9)";
        lemail.style.padding = "5px 15px 5px 15px";
        lemail.style.backgroundColor = "#000000";
    }

    if (inputname == "subject") {
        lsub.style.transition = "all 0.2s";
        lsub.style.marginTop = "-15px";
        lsub.style.marginLeft = "10px";
        lsub.style.zIndex = "10";
        lsub.style.transform = "scale(0.9)";
        lsub.style.padding = "5px 15px 5px 15px";
        lsub.style.backgroundColor = "#000000";
    }

    if (inputname == "message") {
        ltarea.style.transition = "all 0.2s";
        ltarea.style.marginTop = "-15px";
        ltarea.style.marginLeft = "10px";
        ltarea.style.zIndex = "10";
        ltarea.style.transform = "scale(0.9)";
        ltarea.style.padding = "5px 15px 5px 15px";
        ltarea.style.backgroundColor = "#000000";
    }
}

window.onclick = function (event) {
    if (event.target != textname && textname.value.length == 0) {
        lname.style.transform = "scale(1)";
        lname.style.transition = "all 0.2s";
        lname.style.marginTop = "17px";
        lname.style.marginLeft = "20px";
        lname.style.zIndex = "0";
        lname.style.padding = "0px";
        lname.style.backgroundColor = "transparent";
    }
    if (event.target != email && email.value.length == 0) {
        lemail.style.transform = "scale(1)";
        lemail.style.transition = "all 0.2s";
        lemail.style.marginTop = "17px";
        lemail.style.marginLeft = "20px";
        lemail.style.zIndex = "0";
        lemail.style.padding = "0px";
        lemail.style.backgroundColor = "transparent";
    }
    if (event.target != subject && subject.value.length == 0) {
        lsub.style.transform = "scale(1)";
        lsub.style.transition = "all 0.2s";
        lsub.style.marginTop = "17px";
        lsub.style.marginLeft = "20px";
        lsub.style.zIndex = "0";
        lsub.style.padding = "0px";
        lsub.style.backgroundColor = "transparent";
    }
    if (event.target != message && message.value.length == 0) {
        ltarea.style.transform = "scale(1)";
        ltarea.style.transition = "all 0.2s";
        ltarea.style.marginTop = "17px";
        ltarea.style.marginLeft = "20px";
        ltarea.style.zIndex = "0";
        ltarea.style.padding = "0px";
        ltarea.style.backgroundColor = "transparent";
    }
}
document.querySelectorAll('.service_card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// var current = 1; //keeps track of the current div
// var height = $('.roles').height(); //the height of the roles div
// var numberDivs = $('.roles').children().length; //the number of children of the roles div
// var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
// setInterval(function () {
//     var number = current * -height;
//     first.css('margin-top', number + 'px');
//     if (current === numberDivs) {
//         first.css('margin-top', '0px');
//         current = 1;
//     } else current++;
// }, 2000);
// $(document).ready(function () {
//     var current = 0; // Track current index
//     var height = $('.roles div').outerHeight(); // Get the height of a single role
//     var numberDivs = $('.roles div').length; // Count total roles
//     var rolesContainer = $('.roles'); // Cache the roles div

//     setInterval(function () {
//         current++;
        
//         if (current === numberDivs) {
//             rolesContainer.css('transition', 'none'); // Remove animation for instant reset
//             rolesContainer.css('margin-top', '0px');
//             current = 0; // Reset index
//         } else {
//             rolesContainer.css('transition', 'margin-top 1s ease-in-out'); // Smooth animation
//             rolesContainer.css('margin-top', -(current * height) + 'px'); // Move up
//         }
//     }, 2000);
// });
