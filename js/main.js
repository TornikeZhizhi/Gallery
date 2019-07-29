$(document).ready(function(){

    


    $(window).on("load resize",function(){
    var imgWidth = $('.img_box').width();
    var imgBox = $('.img_box')
        imgBox.height(imgWidth)
    })
})