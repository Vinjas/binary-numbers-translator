function binaryAgent(strng) {
    strng = document.getElementById("codigoBinario").value

    console.log(strng)
    console.log(typeof strng)

    var newStr
    var newArr = []
    var arrDiv = []
    var arrSum = []
    var letras = ""
  
    if (strng.includes(" ")) {
      newStr = strng.replace(/ +/g, "")   
    } else {
      newStr = strng
    }
  
    if(/^[0-1]+$/gi.test(newStr) === true) {
      newArr = newStr.split("")
      // Convierto los str en numbers
      var newArrNum = []
      for(let i = 0; i < newArr.length; i++) {
        newArrNum.push(parseInt(newArr[i], 10))
      }
  
      // Divido el Array en bloques de 8
      for(let i = 0; i < newArrNum.length; i += 8) {
        let binario = newArrNum.slice(i, i + 8)
        arrDiv.push(binario)
      }
  
      // Saco el valor de cada 1 o 0 y lo sumo por bloques
      for(let i = 0; i < arrDiv.length; i++) {
        var exponente = 7
        var temp = 0
        for(let l = 0; l < arrDiv[i].length; l++) {
          if(arrDiv[i][l] === 1) {
            temp += arrDiv[i][l] = Math.pow(2, exponente)
          }     
          exponente--
        }
        arrSum.push(temp)
      }
      // Represento el caracter Unicode del valor de cada bloque  
      for(let i = 0; i < arrSum.length; i++) {
        letras += String.fromCharCode(arrSum[i])
      }
      
    } else {
        outputLetras.innerHTML = "Introduce números binarios válidos"
        //return "Introduce números binarios válidos"
    }
    outputLetras.innerHTML = letras
    //return letras
  }
  
  console.log(binaryAgent("01101"))