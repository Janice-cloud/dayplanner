
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

// colours for time 
var currentTime = moment().format('h a')
var time = [
  {
    h : 9,
    a : "am"
  },
  {
    h : 10,
    a : "am"
  },
  {
    h : 11,
    a : "am"
  },
  {
    h : 12,
    a : "pm"
  },
  {
    h : 1,
    a : "pm"
  },
  {
    h : 2,
    a : "pm"
  },
  {
    h : 3,
    a : "pm"
  },
  {
    h : 4,
    a : "pm"
  },
  {
    h : 5,
    a : "pm"
  },
  
]

$("#nine").text(time[0].h +" "+ time[0].a);
$("#ten").text(time[1].h +" "+ time[1].a);
$("#eleven").text(time[2].h +" "+ time[2].a);
$("#twelve").text(time[3].h +" "+ time[3].a)
$("#one").text(time[4].h +" "+ time[4].a)
$("#two").text(time[5].h +" "+ time[5].a)
$("#three").text(time[6].h +" "+ time[6].a)
$("#four").text(time[7].h +" "+ time[7].a)
$("#five").text(time[8].h +" "+ time[8].a)

console.log(time[0].h +" "+ time[0].a)
console.log(time[1].h +" "+ time[1].a)
console.log(time[8].h +" "+ time[8].a)
console.log(currentTime);


if (currentTime === time[0].h +" "+ time[0].a) {
  $(".attribute-nine").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[1].h +" "+ time[1].a) {
  $(".attribute-ten").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[2].h +" "+ time[2].a) {
  $(".attribute-eleven").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[3].h +" "+ time[3].a) {
  $(".attribute-twelve").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[4].h +" "+ time[4].a) {
  $(".attribute-one").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[5].h +" "+ time[5].a) {
  $(".attribute-two").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[6].h +" "+ time[6].a) {
  $(".attribute-three").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[7].h +" "+ time[7].a) {
  $(".attribute-four").attr("class", "col-md-8 border bg-success text-white");
} 

if (currentTime === time[8].h +" "+ time[8].a) {
  $(".attribute-five").attr("class", "col-md-8 border bg-success text-white");
} 



}); 
