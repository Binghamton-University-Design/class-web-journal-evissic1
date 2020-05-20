var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$(document).ready(function($) {
    $('a.activity img').on('mouseover', function(){
        src = $(this).attr('src').replace('.png', '-hover.gif');
        $(this).attr('src', src);
    })
    $('a.activity img').on('mouseout', function(){
        src = $(this).attr('src').replace('-hover.gif', '.png');
        $(this).attr('src', src);
    });

    $("a").on('click', function() {
      
        var page = $(this).attr("href");

        var uri = new URI(window.location.href);
        
        if ( $(this).hasClass("romeadventure")) {
            uri.search(function(data) {
                data.rome = "adventure";
            });
        }
        if ( $(this).hasClass("romeculture")) {
            uri.search(function(data) {
                data.rome = "culture";
            });
        }
        if ( $(this).hasClass("romefood")) {
            uri.search(function(data) {
                data.rome = "food";
            });
        }
        if ( $(this).hasClass("rioadventure")) {
            uri.search(function(data) {
                data.rio = "adventure";
            });
        }
        if ( $(this).hasClass("rioculture")) {
            uri.search(function(data) {
                data.rio = "culture";
            });
        }
        if ( $(this).hasClass("riofood")) {
            uri.search(function(data) {
                data.rio = "food";
            });
        }
        if ( $(this).hasClass("tokyoadventure")) {
            uri.search(function(data) {
                data.tokyo = "adventure";
            });
        }
        if ( $(this).hasClass("tokyoculture")) {
            uri.search(function(data) {
                data.tokyo = "culture";
            });
        }
        if ( $(this).hasClass("tokyofood")) {
            uri.search(function(data) {
                data.tokyo = "food";
            });
        }
        if ( $(this).hasClass("parisadventure")) {
            uri.search(function(data) {
                data.paris = "adventure";
            });
        }
        if ( $(this).hasClass("parisculture")) {
            uri.search(function(data) {
                data.paris = "culture";
            });
        }
        if ( $(this).hasClass("parisfood")) {
            uri.search(function(data) {
                data.paris = "food";
            });
        }

        var urlto = page+uri.search();
        console.log( urlto );
        //$(location).href(urlto);
        window.location = urlto;

        return false;

    });



});