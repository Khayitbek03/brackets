module.exports = function check(str, bracketsConfig) {
const open_bracket=[];
const pair_bracket={};
bracketsConfig.forEach(elem=>{
  open_bracket.push(elem[0]);
  pair_bracket[elem[1]]=elem[0];
})
let stack=[];
for(let i=0;i<str.length;i++){
  let currentSymbol=str[i]//first symbol in the string
  let topSymbol=stack[stack.length-1];//last symbol in the stack;
  if(open_bracket.includes(currentSymbol)){
    if(topSymbol===currentSymbol && pair_bracket[currentSymbol]===currentSymbol){
      stack.pop();
    }
    else{
      stack.push(currentSymbol);
    }
  }
  else{
    if(stack.length===0){
      return false;
    }
 
  if(pair_bracket[currentSymbol]===topSymbol){
    stack.pop();
  }
  else{
    return false;
  }
}
}
  return stack.length===0;
}
