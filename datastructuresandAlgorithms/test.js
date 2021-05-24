function isAphanumeric(char){
  code = char.charCodeAt()
  if( 
      !(code >= 97 && code <= 122 ) &&
      !(code >= 65 && code <= 90)  &&
      !(code >= 65 && code <= 90)){
      return false
  }
  return true
}

const a = isAphanumeric(" ")
console.log(a)