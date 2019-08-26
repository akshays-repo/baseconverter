var input
var convertionMethod

// collect the input 
function  datacollection(){
  input = document.getElementById("data1").value
  convertionMethod = document.getElementById("list").value
  validaTion(input,convertionMethod);
} 


// check user insert the input
function validaTion(data1,convertionMethod){
      if (data1 == "")
        {
        alert("Enter the input")
        return false
        }
        else
        {
        conv(data1,convertionMethod);
        }}


// to copy clipboard
function copyClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("output");
   /* Select the text field */
    copyText.select();
   /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

// function for convertion 

  function conv(n,base){
  var output
  if (n < 0) {
    n = 0xFFFFFFFF + n + 1;
   }
      switch (base)  
      {  
      case 'B':  
      output = parseInt(n, 10).toString(2);
      break;  
      case 'H':  
      output = parseInt(n, 10).toString(16);
      break;  
      case 'O':  
      output=  parseInt(n, 10).toString(8);
      break;  			
      }
      document.getElementById("output").value= output;
      }
