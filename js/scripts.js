//JS object to store all resume info
const finalResume = []

//Query selectors for buttons
const signUpSubmit = document.querySelector("#signUpSubmit");
const workSubmit = document.querySelector("#workSubmit");
const volunteerSubmit = document.querySelector("#volunteerSubmit");
const educationSubmit = document.querySelector("#educationSubmit");

//Event Listeners on buttons to store info
signUpSubmit.addEventListener('click', signUp);
workSubmit.addEventListener('click', workHistory);
volunteerSubmit.addEventListener('click', volunteerHistory);
educationSubmit.addEventListener('click', educationHistory);

//Submit Functions- save info to JS Object
function signUp() {
    finalResume.signUpFirstName = document.querySelector("#signUpFirstName").value;
    finalResume.signUpLastName = document.querySelector("#signUpLastName").value;
    finalResume.signUpPhoneNumber = document.querySelector("#signUpPhoneNumber").value;
    finalResume.signUpEmail = document.querySelector("#signUpEmail").value;
    finalResume.signUpAddress = document.querySelector("#signUpAddress").value; 
    finalResume.signUpCountry = document.querySelector("#signUpCountry")[signUpCountry.selectedIndex].text;
    finalResume.signUpState = document.querySelector("#signUpState")[signUpState.selectedIndex].text;
    finalResume.signUpZip = document.querySelector("#signUpZip").value;
}

function workHistory() {
    finalResume.workField = document.querySelector("#workField")[workField.selectedIndex].text;
    finalResume.workName = document.querySelector("#workName").value;
    finalResume.workSkills = document.querySelector("#workSkills")[workSkills.selectedIndex].text;
    finalResume.workAddress = document.querySelector("#workAddress").value;
    finalResume.workCountry = document.querySelector("#workCountry")[workCountry.selectedIndex].text;
    finalResume.workState = document.querySelector("#workState")[workState.selectedIndex].text;
    finalResume.workZip = document.querySelector("#workZip").value;
    finalResume.workingHere = document.querySelector("#workingHere").checked;
}

function volunteerHistory() {
    finalResume.volunteerTitle = document.querySelector("#volunteerTitle")[volunteerTitle.selectedIndex].text;
    finalResume.volunteerOrg = document.querySelector("#volunteerOrg").value;
    finalResume.volunteerSkills = document.querySelector("#volunteerSkills")[volunteerSkills.selectedIndex].text;
    finalResume.volunteerCity = document.querySelector("#volunteerCity").value;
    finalResume.volunteerYears = document.querySelector("#volunteerYears")[volunteerYears.selectedIndex].text;
}

function educationHistory() {
    finalResume.educationLevel = document.querySelector("#educationLevel")[educationLevel.selectedIndex].text;
    finalResume.educationSchool = document.querySelector("#educationSchool").value;
    finalResume.educationStatus = document.querySelector("#educationStatus")[educationStatus.selectedIndex].text;
    finalResume.educationField = document.querySelector("#educationField").value;
}