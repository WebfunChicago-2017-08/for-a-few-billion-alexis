
console.log(totalMoneyDoubledEveryDay(30));
console.log(howManyDaysToReachXAmount(30000));
console.log(howManyDaysToReachXAmount(1000000000));

function totalMoneyDoubledEveryDay(days){
  var totalMoney = 0;
 
 for(var day = 1; day <= days; day++){
   if(day === 1){
     totalMoney += 1;
   } else{
     totalMoney *= 2;
   }
  //  console.log("the total money in day " + day + " is " + (totalMoney/100));
 }
 
 return totalMoney/100;
}



function howManyDaysToReachXAmount(amount){
  amount = amount*100;
  var accumulated = 0;
  var days = 0;
  
  while(accumulated < amount){
    days += 1;
    if(days === 1){
      accumulated += 1;
    } else{
      accumulated *= 2;
    }
  //   console.log("The amount in day " + days + " is " + (accumulated/100));
    
  }
  return days;
}

