// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

window.onload = function() {
    var currentObj;

    var changeCharLeft = function() {
        var txa;
        if (this.value != null)
            txa = this;
        else
            txa = currentObj;

        var len = txa.value.length
        if(len > 140) { 
            txa.value = txa.value.substr(0, 140); 
            len = 140;
        }
        document.getElementById(txa.id + '_char_left').innerHTML = 140 - len; 
    }

    var txas = document.getElementsByTagName('textarea');
    for (var i = 0; i < txas.length; i++) {
        txas[i].onkeydown = changeCharLeft;
        txas[i].onkeyup = changeCharLeft;
        txas[i].onpaste = function() {
            currentObj = this;
            setTimeout(function(){
                changeCharLeft();
            }, 0);
        }
    }
    if (window.location.href.includes('#')) {
        var url = window.location.href;
        var cut = url.substr(url.indexOf('#'), url.length - 1);
        var id = cut.substr(cut.indexOf('_') + 1, cut.length - 1);
        document.getElementById('link_comments_' + id).click();
    }
}

var toggleComments = function(id) {
    var link = document.getElementById('link_comments_' + id);
    var comments = document.getElementById('comments_' + id);

    if (link.innerHTML == 'View conversation') {
        comments.style.display = 'block'
        link.innerHTML = 'Hide conversation';
    } else {
        comments.style.display = 'none'
        link.innerHTML = 'View conversation';
    }
}
