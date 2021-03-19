function strBinary(binaryNum) {
    //binaryNum = document.getElementById("codigoBinario").value

    /*if (typeof binaryNum !== "number") {
        binaryNum = parseInt(binaryNum, 10)
    }*/
    var binaryNumArr = binaryNum.split("")
    var unicodeArr = []

    for (let i = 0; i < binaryNumArr.length; i++) {
        unicodeArr.push(binaryNumArr[i].charCodeAt(0).toString(2))
    }

    var reTrans = []

    for (let i = 0; i < unicodeArr.length; i++) {
        reTrans.push(parseInt(String.fromCharCode(unicodeArr[i]), 2))
    }


    return reTrans
}

console.log(strBinary("Hola BB, ¿Qué tal?"))