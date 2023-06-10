$(".input1").keyup(function(){
    var a = $(".input1").val();
    if(isNaN(a)){
        $("#valid")
        .text("plea1se enter a valid number.")
        .css("color","red")
        .show()
        .fadeOut(3000);
    }else{
        $("#valid").text(" ");
    }
});
$(".btn").click(function(){
    var choice= $("#select").val();
    var a  =parseInt($(".input1").val());
    var choice2 = $("#select1").val();

    if (choice== "Celcius") {
        if (choice2 == "Farhenheit") {
            var tempr = a * (9/5) + 32;
            $(".result").val(tempr);
        }
    }else if (choice == "Farhenheit") {
        if (choice2 == "Celsius") {
            var temp = (5/9) * (a-32);
            $(".result").val(temp);
        }
    }else if (choice == "Kelvin") {
        if (choice2 == "Celsius") {
            var tm = a - 273.15;
            $(".result").val(tm);
        }
    }
    if (choice == "Celcius") {
        if (choice2 == "Kelvin") {
            var kel = a +273.15;
            $(".result").val(kel);
        }
    }else if (choice == "Farhenheit") {
        if (choice2 == "Kelvin") {
            var kelv = (a + 459.67) * (5/9);
            $(".result").val(kelv);
        }
    }else if( choice == "Kelvin") {
        if(choice2 == "Farhenheit") {
            var fahre = 1.8 * (a - 273) +32;
            $(".result").val(fahre);
        }
    }
});