 const guess = document.getElementById("enter")
 const boy = document.getElementById("plaque")
 const cost = document.getElementById("price")
 const obtain = document.getElementById("purchase")
 


 const count = (some_data) => {
   const optimize = some_data.replace(' ', '')
   const gene = optimize.length *5;


 boy.textContent = some_data;
 cost.textContent = '$' + gene;

 
 

 }


guess.oninput = (e)=>{
    count (e.target.value)
   }
   
   

      
   