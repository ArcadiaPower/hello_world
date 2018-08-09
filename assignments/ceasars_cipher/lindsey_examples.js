//fcc cipher challenge without punctuation requirements
var spaceCode = 32;
var firstLetterCode = 65;
var lastLetterCode = 90;
var cipherDistance = 13;


// Array
function rot13(str) { // LBH QVQ VG!
    var cipheredString = [];
  for(x=0; x < str.length; x++){
    var origCharCode = str.charCodeAt(x);
    cipheredCharCode = origCharCode - cipherDistance;
    if(origCharCode == spaceCode){
      cipheredString.push(str[x]);
    } else if (cipheredCharCode < 65) {
      num_to_subtract = firstLetterCode - cipheredCharCode;
      cipheredCharCode = lastLetterCode + 1 - num_to_subtract;
      cipheredString.push(String.fromCharCode(cipheredCharCode));
    } else {
      cipheredString.push(String.fromCharCode(cipheredCharCode));
    }
  }
  console.log(cipheredString.join(""));
}

// Concat
function rot2_13(str) { // LBH QVQ VG!
    var cipheredString = "";
  for(x=0; x < str.length; x++){
    var origCharCode = str.charCodeAt(x);
    cipheredCharCode = origCharCode - cipherDistance;
    if(origCharCode == spaceCode){
      cipheredString += str[x];
    } else if (cipheredCharCode < 65) {
      num_to_subtract = firstLetterCode - cipheredCharCode;
      cipheredCharCode = lastLetterCode + 1 - num_to_subtract;
      cipheredString += String.fromCharCode(cipheredCharCode);
    } else {
      cipheredString += String.fromCharCode(cipheredCharCode);
    }
  }
  console.log(cipheredString);
}

// Concat Refactor (in progress)
function rot2R_13(str) { // LBH QVQ VG!
  var cipheredString = "";
  for(x=0; x < str.length; x++){
    var origCharCode = str.charCodeAt(x);
    var codeToExtract;
    cipheredCharCode = origCharCode - cipherDistance;
    if(origCharCode == spaceCode){
      codeToExtract = origCharCode;
    } else if(cipheredCharCode < 65) {
      num_to_subtract = firstLetterCode - cipheredCharCode;
      codeToExtract = lastLetterCode + 1 - num_to_subtract;
    } else {
      codeToExtract = cipheredCharCode;
    }
    cipheredString += String.fromCharCode(codeToExtract);
  }
  console.log(cipheredString);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot2_13("SERR PBQR PNZC");
rot2R_13("SERR PBQR PNZC");