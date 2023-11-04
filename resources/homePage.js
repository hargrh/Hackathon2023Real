function checkCode(formObj) {
    

};


function clear(){
   if (document.getElementById("comment").innerHTML == "XXXX-XXXX-XX"){
      document.getElementById("comment").innerHTML = "";
   }
}

function populate(){

   if (document.getElementById("comment").innerHTML == ""){
      document.getElementById("comment").innerHTML = "XXXX-XXXX-XX";
   }

}