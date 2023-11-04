function checkCode(formObj) {


};


function clear(){
   if (document.getElementById("NDC_code").innerHTML == "XXXX-XXXX-XX"){
      document.getElementById("NDC_code").innerHTML = "";
   }
}

function populate(){

   if (document.getElementById("NDC_code").innerHTML == ""){
      document.getElementById("NDC_code").innerHTML = "XXXX-XXXX-XX";
   }

}