let arr = []
sessionStorage.setItem('arr', JSON.stringify(arr));
let tmp = document.querySelector("#btn1");
console.log(tmp);
tmp.addEventListener('click', () => {
    // let name = document.querySelector("#name").value;
    // let pass = document.querySelector("#password").value;

    let name = $("input[id=name]").val();
    let pass = $("input[id=password]").val();
    const obj = {
        username: name,
        password: pass
    };
    let val = JSON.parse(sessionStorage.getItem('arr'));
    val.push(obj);
    sessionStorage.setItem("arr", JSON.stringify(val));
    console.log(sessionStorage.getItem('arr'));

    // const data = `username=${name}&password=${pass}`
    // console.log(data);
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'http://localhost:3000', true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onload = function () {
    //     let res = JSON.parse(xhr.responseText);
    //     console.log(res);
    //     document.querySelector('#response').innerHTML = res.msg;
    // }
    // xhr.send(data);
})