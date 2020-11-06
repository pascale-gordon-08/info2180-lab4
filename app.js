"use strict";

window.onload= function(){
    var s_button = document.getElementsByTagName("button")[0];
    var h_list = document.getElementById("s_list");

    s_button.addEventListener('click', search);

    function search(e){
        var xhttp = new XMLHttpRequest();
        e.preventDefault();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        alert(xhttp.responseText);
    }   
  };
  xhttp.open("GET", "superheroes.php", true);
  xhttp.send();
    }
}