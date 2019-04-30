var anime = require('animejs/lib/anime');

var starter = {

    state: {},
    selector: '',

    init: function init () {
        this.bindState();
        this.bindEvents();
        this.animeStarter();
    },

    animeStarter: function animeStarter() {

        $('.footer-content').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });
          
        anime.timeline({
            loop: false,
        })
        .add({
            targets: '.footer-content .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2500,
            delay: function(el, i) { return 150 * (i+1) }
        }).add({
            targets: '.footer-content',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

    },

    bindState: function bindState() {
        
    },

    bindEvents: function bindEvents() {

    },

    anotherFunction: function anotherFunction() {
            
    }

}

module.exports = starter;
