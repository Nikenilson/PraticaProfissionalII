function trade()
{
    $(".menu").toggleClass("show");
    $(".btn").toggleClass("btnX");
    if(document.getElementById("btn").innerHTML == "X")
        $(".btn").html("<span></span><span></span><span></span>")
    else
        $(".btn").html("X")

    $(".navigation").toggleClass("naviMob");
};


function topo()
{
    $('html, body').animate({scrollTop:0}, 'slow');
}