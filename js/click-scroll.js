$(document).ready(function(){
    // Inicialização
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active').removeClass('inactive');
    
    // Função para rolar suavemente até a seção
    $('.click-scroll').click(function(e){
        var targetId = $(this).attr('href').substring(1);
        var offsetClick = $('#' + targetId).offset().top - 86;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300);
    });

    // Função para atualizar a classe "ativa" conforme a rolagem
    $(document).on('scroll', function() {
        var docScroll = $(document).scrollTop();

        $('.section').each(function(index) {
            var sectionOffset = $(this).offset().top - 86;
            if (docScroll >= sectionOffset) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive').addClass('active');
            }
        });
    });
});
// Inicializar o carrossel usando JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Selecione o carrossel
    var myCarousel = document.getElementById('carouselExampleCaptions');
    
    // Inicialize o carrossel do Bootstrap 5
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Tempo de intervalo entre as transições (em milissegundos)
        ride: 'carousel' // Faz o carrossel começar automaticamente
    });

    // Adicionando funcionalidade aos botões de navegação
    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');
    
    prevButton.addEventListener('click', function() {
        carousel.prev();
    });

    nextButton.addEventListener('click', function() {
        carousel.next();
    });
});
