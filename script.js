$("#whatsapp").click(function (e) { 
    e.preventDefault();
    alert('Teste')
});

let windowWidth = $(window).innerWidth();

if(windowWidth < 400) {
    $('#navbarOne').removeClass('navbarDesktop')
        $('#navbarOne').addClass('navbarDesktopNoShow')
        $('#navbarTwo').removeClass('navbarMobileNoShow')
        $('#navbarTwo').addClass('navbarMobile')
        $('#quotationContainer').css({"display": "none"})
        $('.uotationContainerClass').css({"display": "none"})

        $('.imgCard').attr('src', "./imgs/banners/mobile-banner.png")
        $('#collapse3').css({"width":"100vw", "padding-right": "20px"})
} else {
    $('#navbarOne').addClass('navbarDesktop')
    $('#navbarOne').removeClass('navbarDesktopNoShow')
    $('#navbarTwo').addClass('navbarMobileNoShow')
    $('#navbarTwo').removeClass('navbarMobile')
    $('#quotationContainer').css({"display": "flex"})
    $('.uotationContainerClass').css({"display": "flex"})

    $('.imgCard').attr('src', "./imgs/banners/desktop-.jpg")
    $('#collapse3').css({"width":"20vw"})
}

$(window).scroll(function () { 
    if(windowWidth > 400) {
    if(this.scrollY >= 500) {
        console.log(scrollY)
        $('#quotationContainer').css({"display": "none"})
    } else {
        $('#quotationContainer').css({"display": "flex"})
    }

    if(this.scrollY >= 200) {
        console.log(scrollY, 'DOISS')
        $('#navbarOne').removeClass('navbarDesktop')
        $('#navbarOne').addClass('navbarDesktopNoShow')
        $('#navbarTwo').removeClass('navbarMobileNoShow')
        $('#navbarTwo').addClass('navbarMobile')
    } else {
        $('#navbarOne').removeClass('navbarDesktopNoShow')
        $('#navbarOne').addClass('navbarDesktop')
        $('#navbarTwo').removeClass('navbarMobile')
        $('#navbarTwo').addClass('navbarMobileNoShow')
    } 
}
});
