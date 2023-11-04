function checkCode(formObj) {
    //let awesome = new String(toString(formObj));
    element = docstring.getElementById(formObj);
    console.log(element.innerHTML);

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