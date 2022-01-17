let check = () => {

    let username = document.getElementById("username").value;
    let userphone = document.getElementById("userphone").value;
    let usermail = document.getElementById("usermail").value;
    let servicetype = document.getElementById("servicetype").value;
    let comment = document.getElementById("comment").value;
    document.getElementById('errorMessage').innerHTML = '';

    if (userphone == '' || username == '' || usermail == '' || servicetype == '' || comment == '') {
        document.getElementById('errorMessage').innerHTML = "Не все поля ввода заполнены!<br>";
    }
    
    else {
        document.getElementById('errorMessage').innerHTML = `${username} , Ваш запрос отправлен!<br>`;
    }
}