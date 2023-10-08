function scrollToSection() {
    //Getting reference to the page I want to scroll to 
    const section = document.getElementById ('banner3')

    //Scrolling selection
    section.scrollIntoView ({ behavior:"smooth" })
}
function showCard() {
    var card = document.getElementById('roll')
    var ban = document.getElementById('banners')
    if (card.style.display == "none" || card.style.display == "") {
        card.style.display = "block";
    }else{
        card.style.display = "none";
    }
}