function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

let kesempatan;
let ans;
function mulaiGame(){
    show('page2','page1')
    kesempatan = 10;
    ans = Math.floor(Math.random() * 100);
}

let outputScreen = document.getElementById("outputscreen")
let textInfoo = document.getElementById("textInfo")

function display(num){
    outputScreen.value +=num
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}

function tebak(){
    kesempatan--
    document.getElementById("sisaKesempatan").innerHTML = "sisa kesempatan = "+ kesempatan;
    if(kesempatan<1){
        show('page3','page2')
        document.getElementById("jawaban").innerHTML = "jawabannya adalah = " + ans
    }

    let nilaiTebak = parseInt(outputScreen.value)
    console.log(ans)
    console.log(kesempatan);
    console.log(nilaiTebak);
    if(nilaiTebak > 100){
        textInfoo.innerText= "cuman sampe 99 doang woy";
    }else if(nilaiTebak > ans){
        textInfoo.innerText= "kegedean";
    }else if(nilaiTebak == ans){
        show('page4','page2')
        document.getElementById("jawabanBenar").innerHTML = "jawabannya adalah = " + ans
    }else{
        textInfoo.innerText= "kekecilan";
    }
    document.getElementById("outputscreen").value="";
}