partOne = function(){

    var name = prompt("Name"),
        time = prompt("Time"),
        place = prompt("Place");
    if(name && time && place ){
        alert(name + " has a meeting today at " + time + " somewhere in " + place +".");
    } else {
        alert("Всі поля повинні бути заповнені!");
    }
};

document.getElementById('power1').onclick = function(){
    partOne();
};

partTwo = function(){

    var euros = prompt('Введіть кількість євро', 0),
        dollars = prompt('Введіть кількість доларів', 0);

    var euro = 34.00,
        dollar = 27.4,
        coef = euro/dollar;

    var grn_e = euros * euro,
        grn_d = dollars * dollar;

    alert(euros + " euros are equal " + grn_e + " grns, " + dollars + " dollars are equal " + grn_d +" grns, one euro is equal " + coef + " dollars.");
};
var btn = document.getElementById('power2');

btn.onclick = function(){
    partTwo();
};

