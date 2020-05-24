var i = 0;
var x = "X";
var o = "O";
var s = "TURN ";
 $("button").on("click",function(){
    // console.log(this);
    if (i % 2 == 0){
        $(this).text(x);
        s = s + o;
        $(".name").text(s);
        s = "TURN ";
    }
    else{
        $(this).text(o);
        s = s + x;
        $(".name").text(s);
        s = "TURN ";
    }
    i++;
    check_win();
 });
function check_win(){
    var ar = document.querySelectorAll("button");
    // row X
if (ar[0].textContent == "X" && ar[1].textContent == "X" && ar[2].textContent == "X"){
        $(".name").text("Winner X");
        $("button").off("click");

}
else if (ar[3].textContent == "X" && ar[4].textContent == "X" && ar[5].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
else if (ar[6].textContent == "X" && ar[7].textContent == "X" && ar[8].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
// diagonal X
else if (ar[0].textContent == "X" && ar[4].textContent == "X" && ar[8].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
else if (ar[2].textContent == "X" && ar[4].textContent == "X" && ar[6].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
// coloumn X
else if (ar[0].textContent == "X" && ar[3].textContent == "X" && ar[6].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
else if (ar[1].textContent == "X" && ar[4].textContent == "X" && ar[7].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
else if (ar[2].textContent == "X" && ar[5].textContent == "X" && ar[8].textContent == "X"){
    $(".name").text("Winner X");
    $("button").off("click");
}
// row O
else if (ar[0].textContent == "O" && ar[1].textContent == "O" && ar[2].textContent == "O"){
    $(".name").text("Winner O");
    $("button").off("click");
}
else if (ar[3].textContent == "O" && ar[4].textContent == "O" && ar[5].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
else if (ar[6].textContent == "O" && ar[7].textContent == "O" && ar[8].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
// diagonal O
else if (ar[0].textContent == "O" && ar[4].textContent == "O" && ar[8].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
else if (ar[2].textContent == "O" && ar[4].textContent == "O" && ar[6].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
// coloumn O
else if (ar[0].textContent == "O" && ar[3].textContent == "O" && ar[6].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
else if (ar[1].textContent == "O" && ar[4].textContent == "O" && ar[7].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
else if (ar[2].textContent == "O" && ar[5].textContent == "O" && ar[8].textContent == "O"){
$(".name").text("Winner O");
$("button").off("click")
}
// draw 
else if ( (ar[0].textContent == "X" || ar[0].textContent == "O") && (ar[1].textContent == "X" || ar[1].textContent == "O") && (ar[2].textContent == "X" || ar[2].textContent == "O") && (ar[3].textContent == "X" || ar[3].textContent == "O") && (ar[4].textContent == "X" || ar[4].textContent == "O") && (ar[5].textContent == "X" || ar[5].textContent == "O") && (ar[6].textContent == "X" || ar[6].textContent == "O") && (ar[7].textContent == "X" || ar[7].textContent == "O") && (ar[8].textContent == "X" || ar[8].textContent == "O")){
    $(".name").text("DRAW");
    $("button").off("click");
}
}