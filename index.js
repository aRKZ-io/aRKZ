const typed = new Typed('.multiple-text', {
    strings: ['DEVELOPER', 'DESIGNER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

let my = document.querySelectorAll('.navbar');
function roll () {
}

function scrollToSection() {
    //Getting reference to the page I want to scroll to 
    const section = document.getElementById ('banner2')

    //Scrolling selection
    section.scrollIntoView ({ behavior:"smooth" })
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("dicon").style.display = "flex";
    document.getElementById("dicon2").style.display = "none";
}

function scrollToSectio() {
    //Getting reference to the page I want to scroll to 
    const section = document.getElementById ('banner4')

    //Scrolling selection
    section.scrollIntoView ({ behavior:"smooth" })
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("dicon").style.display = "flex";
    document.getElementById("dicon2").style.display = "none";
}

function downloadPhoto() {
    var userConfirmed = window.confirm("Do you want to download CV?")

    if (userConfirmed) {
        var photoPath = 'noah.jpeg';
        var link = document.createElement('a');
        link.href = photoPath;
        link.download = 'noah.jpeg';
        link.click();
    }
}

function openNav() {
    document.getElementById("mySideNav").style.width = "8.8rem";
    document.getElementById("dicon2").style.display = "flex";
    document.getElementById("dicon").style.display = "none";
    document.getElementById("opa").style.opacity = "50%";
    document.getElementById("opa").style.transition = "0.5s";
    
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("dicon").style.display = "flex";
    document.getElementById("dicon2").style.display = "none";
    document.getElementById("opa").style.opacity = "100%";
}

function roll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        document.getElementById("mySideNav").style.width = "0";
    }
}