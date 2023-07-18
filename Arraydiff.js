function arrayDiff(a, b) {
// if condition checks if b array is empty
  if (b.length === 0){
    return a
  }
  
  let newArray = a.filter((num)=>{
  return !b.includes(num)} // if the number is not in the b array, it will be returned
  )
  return newArray
}


console.log(arrayDiff([1,2,2,2,3],[2,3]))