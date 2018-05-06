$(document).ready(function(){

    $('#btn1').click(function(){
        $.ajax({
            url: "./index.html",
            cache: false,
            success: function(html){
                $("#content").html(html);
            }
        });
    });

    $('#btn2').click(function(){
        $.ajax({
            url: "./card.html",
            cache: false,
            success: function(html){
                $("#content").html(html);
            }
        });
    });

});

