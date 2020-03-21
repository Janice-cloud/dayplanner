
//write a function to show the time of each 
$(document).ready(function(){

var date = moment().format();

console.log(date);

if(localStorage.userEdits != null) {
        $("#edit").textContent = localStorage.userEdits;
     }

$("#save").on("click", function(event) {
    event.target;

        var editEl =  $("#edit");
        var userVersion = editEl.textContent;
     
        localStorage.userEdits = userVersion;
    
    });
 


});