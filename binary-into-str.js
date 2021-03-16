function binaryAgent(str) {
    var newStr
    var newArr = []
    
    //Check and remove spaces
    if (str.includes(" ")) {
      newStr = str.replace(/ +/g, "")   
    } else {
      newStr = str
    }
    
    //Check if the string contains 1s and 0s only
    if(/^[0-1]+$/gi.test(newStr) === true) {
      
      
      newArr = newStr.split(" ")
    } else {
      return "Introduce a valid Binary Number Sequence"
    }
    
  
    return newStr
  }