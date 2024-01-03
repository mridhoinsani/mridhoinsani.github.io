var calDisplay = ""

function btnClick(e) {
    if (e == "1" || e == "2" || e == "3") {
        if (e == "AC") {
            calDisplay = ""
        } else {
            calDisplay = calDisplay + e
            console.log(calDisplay)
        }
        document.getElementById("display").value = calDisplay
    } else {
        console.log("input harus angka")
    }
}

document.getElementById("display").addEventListener('input', function displayChange() {
    console.log(this.value)
    let e = this.Value

    let chars = /^[0-9]+$/

    if (chars.test(e)) {
        console.log("digits")
    } else {
        console.log("not digits")
    }
})

