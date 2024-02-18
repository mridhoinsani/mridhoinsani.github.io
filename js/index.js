function hitungLuas() {
    let inputAlas = document.getElementById ("input-alas").value;
    let inputTinggi = document.getElementById ("input-tinggi").value;
    let hasilLuas = (parseInt(inputAlas) * parseInt (inputTinggi))/2;
    document.getElementById("keluaranLuas").innerHTML=hasilLuas;
}

function hitungKeliling(){
    let inputSisi1 = document.getElementById ("input-sisi1").value
    let inputSisi2 = document.getElementById ("input-sisi2").value
    let inputSisi3 = document.getElementById ("input-sisi3").value
    let hasilKeliling = parseInt(inputSisi1) + parseInt(inputSisi2) + parseInt(inputSisi3)
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