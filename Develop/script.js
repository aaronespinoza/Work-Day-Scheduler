//Current time
var time = moment().format("dddd,MMMM Do");
$("#currentDay").text(time);
//local storage
var currentTime= moment()
//element locations variables
var hour9 = document.getElementById("9");
var hour10 = document.getElementById("10");
var hour11 = document.getElementById("11");
var hour12 = document.getElementById("12");
var hour1 = document.getElementById("1");
var hour2 = document.getElementById("2");
var hour3 = document.getElementById("3");
var hour4 = document.getElementById("4");
//event listener
var saveButton = document.querySelector(".btn");

saveButton.addEventListener("click", function(event) {
event.preventDefault();
    
var plans = {
    hour9: hour9.value,
    hour10: hour10.value,
    hour11: hour11.value,
    hour12: hour12.value,
    hour1: hour1.value,
    hour2: hour2.value,
    hour3: hour3.value,
    hour4: hour4.value,
};
    
localStorage.setItem("plans", JSON.stringify(plans));
//renderPlans();
});

$("#hour9").val(localStorage.getItem("plans.hour9"));

// function renderPlans() {
//   var lastPlans = JSON.parse(localStorage.getItem("plans"));
//   if (lastPlans) {
//     hour9.textContent = lastPlans.hour9
//   }
// };

// var currentHour= currentTime.format("H")
// var events=[];
// var todayStorage = JSON.parse(localStorage.getItem("events"))
// // Stringify and set key in localStorage to events array
// function storeTodos() {
// localStorage.setItem("events", JSON.stringify(events));
// }
// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       storeTodos();
//       renderTodos();
//     }
//   });