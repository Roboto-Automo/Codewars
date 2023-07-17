function alphabetPosition(text) {
    const alphabetPositions = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j","k", "l", "m", "n",
                               "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
     let newText = ""
     
     for (let i = 0; i < text.length; i++){  // loop through the text 
       for(let j = 0; j < alphabetPositions.length; j++){ // loop through the alphabet array for each letter in the text
       if (text[i].toLowerCase() === alphabetPositions[j] ){
         newText += (j + 1).toString() + " "
       break; // the break here stops the loop from continuing to run after the first match is found
       }   
     }
     }
     console.log(newText)
    return newText.trim()
   
   }

   alphabetPosition("The sunset sets at twelve o' clock.")