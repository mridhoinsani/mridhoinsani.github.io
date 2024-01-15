function hitungLuas() {
    let inputSisiL = document.getElementById ("input-sisi-luas").value;
    let hasilLuas = parseInt(inputSisiL) * parseInt (inputSisiL);
    document.getElementById("keluaranLuas").innerHTML=hasilLuas;
}

function hitungKeliling(){
    let inputSisiK = document.getElementById ("input-sisi-keliling").value
    let hasilKeliling = parseInt(inputSisiK) * 4;
    document.getElementById("keluaranKeliling").innerHTML=hasilKeliling;
}

function resetLuas(){
    document.getElementById("keluaranLuas").innerHTML="";
    document.getElementById("inputLuas").reset();
}

function resetKeliling(){
    document.getElementById("keluaranKeliling").innerHTML="";
    document.getElementById("inputKeliling").reset();
}