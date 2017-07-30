/**
 * Created by simmar on 14/10/2015.
 */
'use strict';

/*  =CONSTANTES
 ----------------------------------------------------------------------------- */
//jQuery.noConflict();
var d = document;
var w = window;
var pm = pm || {};


/*  =WINDOW.ONLOAD
 ----------------------------------------------------------------------------- */
$(d).ready(function () {
    if (pm.debug) {
        console.log('jquery:document ready');
    }

    pm.toto();
    pm.array();
    pm.additionNUmber();

});

pm.toto = function () {
    function affichage() {
        var pseudo = document.getElementById('pseudo').value;

        if (pseudo != '') {
            $('#zone').html(pseudo);
        }
    }

    //attacher un �venement (click) � un object html (le bouton #bouton)
    $('#bouton').bind('click', function () {
        affichage(); //utilisation de la fonction
    });

    $('.link').on('click', afficheCache);
    function afficheCache() {
        $(this).css("color", "red");
    }


    var $truc = $('#blocvisible');

    $truc.mouseenter(function () {
        $(this).find('.intro').css("opacity", "0.5")
    });

    $truc.mouseleave(function () {
        $(this).find('.intro').css("display", "none");
        //console.log($(this).find('.intro'));
    });


    $("button").click(function () {
        $("p").toggle("slow");
    });
};

pm.array = function () {

    var array = [0, 2, 5, 9, 4, 2];

    //console.log(array.indexOf(3));

    array.forEach(function (index, item) {
        //console.log( index,item);
    });

    // for(var i=0; i <array.length; i++) {
    //     console.info(array[i]);
    // }

    // array.sort(function(a, b) {
    //     return a - b;
    // });
    // console.log(array);

    // aléatoire
    // console.log(array[Math.floor(Math.random()*array.length)])

};

pm.additionNUmber = function () {
    var tableInputs = $('.table input');
    var table = $('.calendars .table');

    table.each(function () {//boucle pour avoir les 2 lignes distinctes
        calculTotal($(this));
    });


    function calculTotal(line) {
        var total = 0;
        line.find('input').each(function () {// boucle pour calculer value de chaque input
            total += parseInt($(this).val());
        });

        line.find('.sum-total').html(total);//affichage
    }

    tableInputs.change(function () {
        var line = $(this).closest('.table');//contextualisation de chaque ligne
        calculTotal(line);//fonction calcul en fin de ligne

        console.log($(this).val())// value input clicked

        var colIndex = $(this).parent().index();
        console.log(colIndex)//index

        //value input same index

        var allCellsOnTheColumn = $(this).closest('tbody').find('tr').find('>td:eq('+colIndex+')').index();
        console.log(allCellsOnTheColumn)

    });


};

/* END */