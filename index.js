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
}

function scrollToSectio() {
    //Getting reference to the page I want to scroll to 
    const section = document.getElementById ('banner4')

    //Scrolling selection
    section.scrollIntoView ({ behavior:"smooth" })
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
