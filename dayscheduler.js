

$(document).ready(function() {
//Show date on HTML
var now = moment().format('MMMM Do YYYY');

console.log(now);

let dateHeading = $("#date");
dateHeading.text(now);


//saving text in localStorage
$("#text-nine").val(localStorage.getItem("storedText-nine"));
$("#save-nine").on("click", function () {
 
    var textEl = $("#text-nine").val();
    //store input
    localStorage.setItem("storedText-nine", textEl);
    // Retrieve
    var storedEl = $("#text-nine").innerHTML = localStorage.getItem("storedText-nine");
      
    console.log(storedEl + " works")
});

$("#text-ten").val(localStorage.getItem("storedText-ten"));
$("#save-ten").on("click", function () {
 
    var textEl = $("#text-ten").val();
    //store input
    localStorage.setItem("storedText-ten", textEl);
    // Retrieve
    var storedEl = $("#text-ten").innerHTML = localStorage.getItem("storedText-ten");
      
    console.log(storedEl + " works")
});

$("#text-eleven").val(localStorage.getItem("storedText-eleven"));
$("#save-eleven").on("click", function () {
 
    var textEl = $("#text-eleven").val();
    //store input
    localStorage.setItem("storedText-eleven", textEl);
    // Retrieve
    var storedEl = $("#text-eleven").innerHTML = localStorage.getItem("storedText-eleven");
    console.log(storedEl + " works")
});


$("#text-twelve").val(localStorage.getItem("storedText-twelve"));
$("#save-twelve").on("click", function () {
 
    var textEl = $("#text-twelve").val();
    //store input
    localStorage.setItem("storedText-twelve", textEl);
    // Retrieve
    var storedEl = $("#text-twelve").innerHTML = localStorage.getItem("storedText-twelve");
      
    console.log(storedEl + " works")
});

$("#text-one").val(localStorage.getItem("storedText-one"));
$("#save-one").on("click", function () {
 
    var textEl = $("#text-one").val();
    //store input
    localStorage.setItem("storedText-one", textEl);
    // Retrieve
    var storedEl = $("#text-one").innerHTML = localStorage.getItem("storedText-one");
      
    console.log(storedEl + " works")
});

$("#text-one").val(localStorage.getItem("storedText-one"));
$("#save-one").on("click", function () {
 
    var textEl = $("#text-one").val();
    //store input
    localStorage.setItem("storedText-one", textEl);
    // Retrieve
    var storedEl = $("#text-one").innerHTML = localStorage.getItem("storedText-one");    
    console.log(storedEl + " works")

});

$("#text-one").val(localStorage.getItem("storedText-one"));
$("#save-one").on("click", function () {
 
    var textEl = $("#text-one").val();
    //store input
    localStorage.setItem("storedText-one", textEl);
    // Retrieve
    var storedEl = $("#text-one").innerHTML = localStorage.getItem("storedText-one");    
    console.log(storedEl + " works")

});

$("#text-two").val(localStorage.getItem("storedText-two"));
$("#save-two").on("click", function () {
 
    var textEl = $("#text-two").val();
    //store input
    localStorage.setItem("storedText-two", textEl);
    // Retrieve
    var storedEl = $("#text-two").innerHTML = localStorage.getItem("storedText-two");    
    console.log(storedEl + " works")
});

$("#text-three").val(localStorage.getItem("storedText-three"));
$("#save-three").on("click", function () {
 
    var textEl = $("#text-three").val();
    //store input
    localStorage.setItem("storedText-three", textEl);
    // Retrieve
    var storedEl = $("#text-three").innerHTML = localStorage.getItem("storedText-three");    
    console.log(storedEl + " works")
});


$("#text-four").val(localStorage.getItem("storedText-four"));
$("#save-four").on("click", function () {
 
    var textEl = $("#text-four").val();
    //store input
    localStorage.setItem("storedText-four", textEl);
    // Retrieve
    var storedEl = $("#text-four").innerHTML = localStorage.getItem("storedText-four");    
    console.log(storedEl + " works")
});

$("#text-five").val(localStorage.getItem("storedText-five"));
$("#save-five").on("click", function () {
 
    var textEl = $("#text-five").val();
    //store input
    localStorage.setItem("storedText-five", textEl);
    // Retrieve
    var storedEl = $("#text-five").innerHTML = localStorage.getItem("storedText-five");    
    console.log(storedEl + " works")
});



}); 
