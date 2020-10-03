function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid1 = re.test(myPhone);
    if (valid1)  return 0;
    else  alert('Номер телефона отсуствует или введен неправильно!');
    return valid1;
}
function ValidName() {
    var we = /^[А-Яа-яЁё]+$/;
    var myName = document.getElementById('name').value;
    var valid2 = we.test(myName);
    if (valid2)  return 0;
    else  alert('Введите ваше имя!');
    return valid2;
}
