function binaryAgent(str) {
    var newStr
    var newArr = []
    var arrDiv = []
    var arrSum = []
  
    if (str.includes(" ")) {
      newStr = str.replace(/ +/g, "")   
    } else {
      newStr = str
    }
  
    if(/^[0-1]+$/gi.test(newStr) === true) {
      /* Añade espacios cada 8 caracteres
      for(let i = 0; i < newStr.length; i += 8) {
        newArr.push(newStr.substr(i, 8))
      */
  
      newArr = newStr.split("")
      // Convierto los str en numbers
      var newArrNum = []
      for(let i = 0; i < newArr.length; i++) {
        newArrNum.push(parseInt(newArr[i], 10))
      }
  
      // Divido el Array en subgrupos de 8
      for(let i = 0; i < newArrNum.length; i += 8) {
        let binario = newArrNum.slice(i, i + 8)
        arrDiv.push(binario)
      }
  
      // Saco el valor de cada 1 o 0
      
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
      
  
    } else {
      return "Introduce números binarios válidos"
    }
    
  
  
    return arrSum
  }
