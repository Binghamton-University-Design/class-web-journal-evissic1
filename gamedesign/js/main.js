$(document).ready(function($) {

    var uri = new URI(window.location.href);

    if(uri.filename() === 'game-closing.html'){

        
        var complete = uri.search(true);

        console.log(complete);

        'use strict';

        let adventure = 0, culture = 0, food = 0;

        for (const [key, value] of Object.entries(complete)) {
            if(value === 'adventure') {
                adventure ++;
            } else if(value === 'food') {
                food ++;
            } else if(value === 'culture') {
                culture ++;
            }
        }

        //console.log(adventure*25);

        new Chart(document.getElementById("chart"),
            {"type":"doughnut",
            "data":{
                "labels":["Cutlure","Food","Adventure"],
                "datasets":[
                    {
                        "label":"My First Dataset",
                        "data":[culture*25,food*25,adventure*25],
                        "backgroundColor":["rgb(212, 94, 127)","rgb(255, 205, 172)","rgb(108, 171, 210)"]
                    }
                ]
            },
            options: {
                responsive: false
            }
        });
    }

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