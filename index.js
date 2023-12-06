const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age")
const statusSpan = document.querySelector("#status")
const updateBtnProfile = document.querySelector("#updateBtn")

const isSuper = confirm("Are you feeling super?");

if(isSuper === true){
 console.log("Welcome to The Mushroom Kingdom!")   
}
else{
    profileImage.src = "images/Wario.jpg";
    firstNameSpan.innerHTML = "Wario";
    ageSpan.innerHTML = "35";
    statusSpan.innerHTML = "Businessman";
}

updateBtnProfile.addEventListener("click", () => {
console.log("clicked");
profileImage.src = "images/Bowser.jpg";
firstNameSpan.innerHTML = "Bowser";
ageSpan.innerHTML = "50";
statusSpan.innerHTML = "King";


})