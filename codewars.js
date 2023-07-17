function alphabetPosition(text) {
    const alphabetPositions = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j","k", "l", "m", "n",
                               "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
     let newText = ""
     
     for (let i = 0; i < text.length; i++){
       for(let j = 0; j < alphabetPositions.length; j++){
       if (text[i].toLowerCase() === alphabetPositions[j] ){
         newText += (j + 1).toString() + " "
       break;
       }   
     }
     }
     console.log(newText)
    return newText.trim()
   
   }

   alphabetPosition("The sunset sets at twelve o' clock.")