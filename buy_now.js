formm = document.getElementById("fm")
errorelement = document.getElementById("error")

//Empty input
const checkblank = (buyNow) => {
    if(document.getElementById("enter").value == "") {
      errorelement.innerHTML = 'Please enter your name';
      
    }
}

//default name

const fault = (buyNow) => {
    if(document.getElementById("enter").value == 'YOUR NAME') {
      errorelement.innerHTML = 'Please enter custom letters';
      
    }}

   
    
//unique value

  const unique = (buyNow) => {
    const opt = document.getElementById("enter").value
  
    if(opt.length >15) {
      
      errorelement.innerHTML ='You have exceeded the number of available letters';
      
     }}

      //reset function

    const resett = (plaque) => {
      document.getElementById("enter").value == "";
      errorelement.innerHTML = ""
    }
    



    