// https://github.com/hmongouachon/mgGlitch

$( function() {
    $( "#glitch-img" ).mgGlitch({
        // set 'true' to stop the plugin
        destroy : false,
        // set 'false' to stop glitching
        glitch: true,
        // set 'false' to stop scaling
        scale: true,
        // set 'false' to stop glitch blending
        blend : true,
        // select blend mode type
        blendModeType : 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin : 200,
        // set max time for glitch 1 elem
        glitch1TimeMax : 400,
        // set min time for glitch 2 elem
        glitch2TimeMin : 10,
        // set max time for glitch 2 elem
        glitch2TimeMax : 100,
    });
    $(function() {
        $('.button-main').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var scrollTo = $(this).attr('href');
                var whitespace = scrollTo == '#s1' ? 70 : 30
                $('html,body').animate({
                    scrollTop: $(scrollTo).offset().top - whitespace
                }, 1000);
            });
        });
    });
    $(function () {
        $("#header-nav").click(function(){
            $("div.full-page-navigation").addClass(".on");
        });
    });
});