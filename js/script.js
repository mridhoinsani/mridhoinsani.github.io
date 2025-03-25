function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

let kesempatan;
let ans;
function mulaiGame(){
    show('page2','page1')
    show('page2','page3')
    kesempatan = 10;
    ans = Math.floor(Math.random() * 100);
}

let outputScreen = document.getElementById("outputscreen")
let textInfoo = document.getElementById("textInfo")
let end;

function display(num){
    outputScreen.value +=num
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}

function tebak(){
    document.getElementById("sisaKesempatan").innerHTML = "sisa kesempatan = "+ kesempatan;
    if(kesempatan<1){
        end=0
        ending()
    }
    kesempatan--

    let nilaiTebak = parseInt(outputScreen.value)
    console.log(ans)
    console.log(kesempatan);
    console.log(nilaiTebak);
    if(nilaiTebak > 100){
        textInfoo.innerText= "cuman sampe 99 doang woy";
    }else if(nilaiTebak > ans){
        textInfoo.innerText= "kegedean";
    }else if(nilaiTebak == ans){
        end = 1
        ending()
    }else{
        textInfoo.innerText= "kekecilan";
    }
    document.getElementById("outputscreen").value="";
}

function ending(){
    show('page3','page2')
    if(end == 1){
        show('gambarBenar','gambarSalah')
        document.getElementById("textInfoEnd").innerHTML = "Hore!! Jawabanmu Benar"
    }else{
        show('gambarSalah','gambarBenar')
        document.getElementById("textInfoEnd").innerHTML = "Yahh Kesempatanmu Habis"
    }
    document.getElementById("jawaban").innerHTML = "jawabannya adalah = " + ans
}