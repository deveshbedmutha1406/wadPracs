let btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    let fname = $("input[id=fname]").val();
    let lname = $("input[id=lname]").val();
    var data = `fname=${fname}&lname=${lname}`;

    $.ajax({
        type: 'post',
        url: "http://localhost:3000",
        data: data
    }).done(function (res) {
        console.log(res);
    })
})