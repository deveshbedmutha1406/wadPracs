let btn1 = document.getElementById('btn1');



btn1.addEventListener("click", (e) => {
    console.log('clicked');
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3001/getUsers");
    xhr.onload = () => {
        const ar = JSON.parse(xhr.response);
        console.log(ar);
        let ans = ""
        for (i = 0; i < ar["data"].length; i++) { 
            ans += `<li>${ar["data"][i].name}</li>`;
        }

        document.getElementById('display').innerHTML = ans;
        console.log(ans);
    }
    xhr.send();
});

let obj = new XMLHttpRequest();

