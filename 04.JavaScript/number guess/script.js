//javascript goes brrr....
const dropdownlow = document.querySelector(".limlow");
const dropdownhigh = document.querySelector(".limhigh");

dropdownlow.addEventListener("click", () => {
  if (document.querySelector(".limlowlist").className.includes("active")) {
    document.querySelector(".limlowlist").classList.remove("active");
  } else {
    document.querySelector(".limlowlist").classList.add("active");
  }
  document.querySelectorAll(".limlowlist li").forEach((e) => {
    if (
      e.className.includes("active") &&
      document.querySelector(".limlowlist").className.includes("active")
    ) {
    } else if (
      e.className.includes("active") &&
      !document.querySelector(".limlowlist").className.includes("active")
    ) {
      e.classList.remove("active");
    } else if (
      !e.className.includes("active") &&
      document.querySelector(".limlowlist").className.includes("active")
    ) {
      e.classList.add("active");
    } else {
    }
  });
});
dropdownhigh.addEventListener("click", () => {
  if (document.querySelector(".limhighlist").className.includes("active")) {
    document.querySelector(".limhighlist").classList.remove("active");
  } else {
    document.querySelector(".limhighlist").classList.add("active");
  }
  document.querySelectorAll(".limhighlist li").forEach((e) => {
    if (
      e.className.includes("active") &&
      document.querySelector(".limhighlist").className.includes("active")
    ) {
    } else if (
      e.className.includes("active") &&
      !document.querySelector(".limhighlist").className.includes("active")
    ) {
      e.classList.remove("active");
    } else if (
      !e.className.includes("active") &&
      document.querySelector(".limhighlist").className.includes("active")
    ) {
      e.classList.add("active");
    } else {
    }
  });
});
document.querySelectorAll(".limhighlist li").forEach((e) => {
  if (e.textContent != "custom") {
    e.addEventListener("click", () => {
      document.getElementById("right").textContent = e.textContent;
      document.querySelector(".limhighlist").classList.remove("active");
    });
  } else {
    e.addEventListener("click", () => {
      var input = prompt("Enter custom higher limit: ");
      if (!isNaN(input)) {
        document.getElementById("right").textContent = input;
        document.querySelector(".limhighlist").classList.remove("active");
      } else {
        alert("Input can be number only");
      }
    });
  }
});
document.querySelectorAll(".limlowlist li").forEach((e) => {
  if (e.textContent != "custom") {
    e.addEventListener("click", () => {
      document.getElementById("left").textContent = e.textContent;
      document.querySelector(".limlowlist").classList.remove("active");
    });
  } else {
    e.addEventListener("click", () => {
      var input = prompt("Enter custom lower limit: ");
      console.log(+input);
      if (!isNaN(input)) {
        document.getElementById("left").textContent = input;
        document.querySelector(".limlowlist").classList.remove("active");
      } else {
        alert("Input can be number only");
      }
    });
  }
});
let historyArray = [];
const resetbtn = document.querySelector(".reset");
const Submitbtn = document.querySelector(".submit");

resetbtn.addEventListener("click", function(){
  if (
    document.getElementById("left").textContent === "X" ||
    document.getElementById("right").textContent === "Y"
  ) {
    alert("Limits not defined yet!");
  } else if (
    parseFloat(document.getElementById("left").textContent) >=
    parseFloat(document.getElementById("right").textContent)
  ) {
    alert("The left limit must be lower than the right limit");
  } else {
    
    if (resetbtn.textContent === "Set limits") {
      resetbtn.textContent = "Change limits";
      document.querySelector(".limlow").classList.add("locked");
    document.querySelector(".limhigh").classList.add("locked");
    } else {
      resetbtn.textContent = "Set limits";
      document.querySelector(".limlow").classList.remove("locked");
    document.querySelector(".limhigh").classList.remove("locked");
    }
  }
  var lowerlim = parseFloat(document.getElementById("left").textContent);
var higherlim = parseFloat(document.getElementById("right").textContent);
var randNum = Math.floor(Math.random() * (higherlim - lowerlim + 1) + lowerlim);
historyArray.unshift(randNum);
console.log(historyArray)
});
const inp = document.getElementById("inp");
Submitbtn.addEventListener("click", ()=>{
  if(inp.value === ""){
    alert("Enter a guess please")
  }
  else{
    if(parseInt(inp.value)  === historyArray[0]){
      alert("congrats you found the value!")
    }
    else if(inp.value > historyArray[0]){
      document.getElementById("right").textContent = inp.value;
    }
    else if(inp.value < historyArray[0]){
      document.getElementById("left").textContent = inp.value;
    }
  }
})