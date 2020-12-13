// Calculate string length
// Desc: Your task is to calculate the length of each word and return the array like below.
// Note: ignore anything but string.
// Given: “hello worldd” 
// Return: [“hello 5”, “worldd 6”];


const calcLengthEachWords = (str) => {
  if(typeof str === 'string') {
    return str.split(' ').map(elem => elem + ' ' + elem.length);
  } 
}