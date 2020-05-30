$('.your-class').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 250,
    infinite: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
});
$('.slideviewmissao').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
function mostravid(id, id2) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('botaoconf').style.zIndex = '-1';
    document.getElementById('botaoconf1').style.zIndex = '-1';
    document.getElementById('botaoconf2').style.zIndex = '-1';
    document.getElementById('botaoconf3').style.zIndex = '-1';
}