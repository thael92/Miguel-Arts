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
