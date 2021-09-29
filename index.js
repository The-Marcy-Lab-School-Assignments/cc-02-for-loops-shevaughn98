//1
function countToTen(){
    for(let i = 0; i <= 10; i++)
    console.log(i)
  
}
 //countToTen()
//2
function countFromOne(num){
 for(let i = 0; i <= num ; i++)
    console.log(i)
    
  
}
//countFromOne(10)
//3
function countEveryEven(number){
  for(let i = 2 ; i <= number; i+=2)
  console.log(i)
}
//countEveryEven(10)
//4
function countEveryOdd(numbers){
    for(let i = 1; i <= numbers; i++){
        if( i % 2 !== 0){
            console.log(i);
        }
    }
    
}git

//countEveryOdd(10)
//5 
function countEvens(numbs){
    let count = 0
    for(let i = 0; i < numbs.length ; i++){
        if(numbs[i] % 2 === 0){
            count+=1
        
        }
        
    }
  return count
}
console.log(countEvens()[1,2,3,4,5,6,7,8,9,12])