function checkCode(formObj) {
    //let awesome = new String(toString(formObj));
    //element = docstring.getElementById(formObj);
    alert('asad')
    let thingy = new String('https://api.fda.gov/drug/ndc.json?search=product_ndc:'+formObj.NDC_code.value)
    alert('b')
    getJSONP(thingy, function(data){
        let z = data
    });
    alert(z)


};

function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}


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