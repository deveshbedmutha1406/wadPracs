let form1 = document.getElementById('form1');
form1.onsubmit = (e) => {
    e.preventDefault();
    let val1 = document.getElementById('inp1').value;
    let val2 = document.getElementById('inp2').value;
    const a1 = val1.split("#");
    const a2 = val2.split("#");
    console.log(a1);
    a1.forEach((e, idx, arr) => {
        arr[idx] = parseInt(e);
    })

    a2.forEach((e, idx, arr) => {
        arr[idx] = parseInt(e);
    })
    let ans = "";
    if (a1[0] == a2[0] && a1[1] == a2[1]) {
        var st1 = a1[2];
        var st2 = a2[2];
        let ans1 = []
        let ans2 = []
        for (col = 0; col < 3; col++) { 
            let tmp = [];
            let tmp2 = []
            for (i = 0; i < 3; i++) { 
                tmp[i] = (st1 * (i + 1));
                tmp2[i] = (st2 * (i + 1));
            }       
            st1 += 1;
            st2 += 1;
            ans1.push(tmp);
            ans2.push(tmp2);
        }
        let tb1 = "";
        for (i = 0; i < 3; i++) { 
            ans += `<tr><td>${ans1[0][i]}</td><td>${ans1[1][i]}</td><td>${ans1[2][i]}</td></tr>`
            tb1 += `<tr><td>${ans2[0][i]}</td><td>${ans2[1][i]}</td><td>${ans2[2][i]}</td></tr>`
        }
        let final_ans = '<table style="width:300px; height:300px">' + ans;
        final_ans += "</table>";

        let final_ans2 = '<table style="width:300px; height:300px">' + tb1;
        document.getElementById('display').innerHTML = final_ans;
        document.getElementById('display2').innerHTML = final_ans2;
        console.log(final_ans);
    } else {
        
    }
}

