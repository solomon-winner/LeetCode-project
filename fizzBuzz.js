/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
         let answer=[];  
    for(let s=1;s<=n;s++){
        if(s%3==0&&s%5!=0){
            answer.push("Fizz") 
        }
        else if(s%5==0&&s%3!=0){
           answer.push("Buzz") 
        }else if(s%3==0&&s%5==0){
            answer.push("FizzBuzz") 
        }else{
            answer.push(s.toString()) ;
        }
        if(answer.length==n){
        return answer;
    }
  
  
  }
};
