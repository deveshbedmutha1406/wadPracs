let username = $("#name");
let password = $("#password");
let cb = $("#checkbox");

let btn1 = $("#btn1");
let arr = []
localStorage.setItem('arr', JSON.stringify(arr));

btn1.on('click', (e) => {
    e.preventDefault();
    console.log(username.val());
    const obj = {
        uname: username.val(),
        password: password.val()
    };

    let tmp1 = JSON.parse(localStorage.getItem('arr'));
    tmp1.push(obj);
    localStorage.setItem('arr', JSON.stringify(tmp1));
    console.log(localStorage.getItem('arr'));

    $.ajax({
        type: 'post',
        url: 'http://localhost:3001',
        data: data
    }).done((msg) => {
        console.log(msg);
    })

})