let doc = document.getElementById('result');


let arr = JSON.parse(localStorage.getItem('arr'));
var ans = "";
for (i = 0; i < arr.length; i++) { 
    ans += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">User Profile</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Welcome</h6>
        <p class="card-text">${arr[i].uname}<br>${arr[i].password}</p>
        <a href="#" class="card-link">home link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    `;
}

doc.innerHTML = ans;