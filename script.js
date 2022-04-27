$("#whatsapp").click(function (e) { 
    e.preventDefault();
    alert('Teste')
});

$(window).scroll(function () { 
    if(this.scrollY > 200) {
        console.log('Andou')
        $(".navbar").css({"display": "none"})
        $('#quotationContainer').css({"display": "none"})
    } else {
        $(".navbar").css({"display": "flex"})
        $('#quotationContainer').css({"display": "flex"})
    }
});