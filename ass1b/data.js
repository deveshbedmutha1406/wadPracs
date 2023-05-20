let id = document.getElementById('response');
let val = JSON.parse(sessionStorage.getItem('arr'));
let ans = `<ul>`
val.forEach(element => {
    ans += '<li>';
    ans += `username: ${element.username} password : ${element.password}`;
    ans += '</li>'
});
ans += '</ul>'
id.innerHTML = ans;