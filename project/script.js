//alert("hgmntr");




function guess() {
    var a = prompt("Введите число");
    if (a > 5) {
        alert("chislo menshe ");
        return guess();
    } else if (a == 5) {
        return alert("molodets");
    } else {
        alert("chislo bolshe ");
        return guess();
    }
}

//guess();

function timer() {
    alert("Ты тут долго");
}

//setTimeout(timer, 3000);

function valid() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var tel = document.getElementById("tel").value;

    var reg_name = /^[а-яa-zё]+$/i;
    var reg_password = /^[a-z0-9]{5,100}/i;
    var reg_tel = /^[0-9]{11}/i;

    if (reg_name.test(name) == false) {
        alert("ошибка имя");
    }
    if (reg_password.test(password) == false) {
        alert("ошибка пароль");

    }
    if (reg_tel.test(tel) == false) {
        alert("ошибка телефон");
    }


}

document.querySelector(".button").addEventListener("click", valid);
