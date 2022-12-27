var age = +prompt('Введите свой возраст в цифрах');

if(age > 0 && age < 18 || age == 18) {
    alert ('Вам нужно учиться');
}else if(age > 18 && age < 50 || age == 50) {
    alert ('Вам нужно работать');
}else if(age > 50 && age < 59 || age == 59) {
    alert('Вам скоро на пенсию');
}else if(age > 59 && age < 100 || age == 100) {
    alert ('Вы пенсионер');
}else {
    alert ('Что то пошло не так');
}




var time = +prompt('Введите время в цифрах');

switch (time) {
    case 0:
        alert('00 часов ночи');
        break;
    case 1:
        alert('1 час ночи');
        break;
    case 2:
        alert('2 часa ночи');
        break; 
    case 3:
        alert('3 часa ночи');
        break;
    case 4:
        alert('4 часa ночи');
        break;
    case 5:
        alert('5 часов ночи');
        break; 
    case 6:
        alert('6 часов ночи');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часов дня');
        break;
    case 12:
        alert('12 часов дня');
        break;
    case 13:
        alert('1 час дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 час дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часов дня');
        break;
    case 18:
        alert('6 часов вечера');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
    default:
        alert('Что то пошло не так');
        break;
}



var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

if(x > y && x < z || x > z && x < y) {
    alert(x);
}else if(y > x && y < z || y > z && y < x) {
    alert(y);
}else if(z > x && z < y || z > y && z < x) {
    alert(z);
}else {
    alert ('Что то пошло не так');
}
