// javascript connection with the html IDs
const nameInput = document.getElementById('studentName');
const schoolInput = document.getElementById('schoolName');
const courseInput = document.getElementById('course');
const formMessage = document.getElementById('formMessage');
const studentNameCard = document.getElementById('cardStudentName');
const schoolNameCard = document.getElementById('cardSchoolName');
const courseCard = document.getElementById('cardCourse');
const cardResult = document.getElementById('cardResult');
const studentForm = document.getElementById('studentForm');

// add event listener to the form submission section
studentForm.addEventListener('submit', function(event) { event.preventDefault();
    const fullName = nameInput.value.trim ();
    const school = schoolInput.value.trim ();
    const schoolCourse = courseInput.value.trim ();

    if ( 
        fullName === "" ||
         school === "" ||
         schoolCourse === ""
    ) {
        formMessage.textContent = "Please fill in the all fields. ";
        cardResult.hidden = true;
        return;
    }
    formMessage.textContent = "";
    cardStudentName.textContent = fullName;
    cardSchoolName.textContent = school;
    cardCourse.textContent = schoolCourse;
    cardResult.hidden = false;
});
    