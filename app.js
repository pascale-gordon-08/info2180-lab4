"use strict";

window.onload= function(){
    var s_button = document.getElementsByTagName("button")[0];
    
    var site = document.getElementById("result");
    var search_input = document.getElementById("search");
    var xhttp;

    s_button.addEventListener('click', search);

    function search(e){
        var xhttp = new XMLHttpRequest();
        e.preventDefault();
        var search_value = search_input.value;
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && search_value.length==0) {
            site.innerHTML= this.responseText;
    }   
  };
  xhttp.open("GET", "http://localhost:8080/superheroes.php", true);
  xhttp.send();
    } 
    

   /* s_button.addEventListener('click', function(e) {
        e.preventDefault();

        var xhttp = new XMLHttpRequest();
        var search_value = search_input.value;
        xhttp.onreadystatechange = loadQuote;
        xhttp.open('GET',"http://localhost:8080/superheroes.php?query="+search_value+"" );
        xhttp.send();
  });


  function loadQuote() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        var response = xhttp.responseText;
        site.innerHTML = response;
      }
    }
}  */



    }



    
    

    

