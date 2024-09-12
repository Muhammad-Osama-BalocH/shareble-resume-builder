// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
var _a;
//     // Type assertions to get form input values
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLTextAreaElement;
//     const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
//     const skillElement = document.getElementById('skill') as HTMLTextAreaElement;
//     // Check that elements exist
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
//         // Retrieving the values
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillElement.value;
//         // Creating the resume output HTML
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> <span id="edit-name"class="editable">${name}</span></p>
//             <p><strong>Email:</strong> <span id="edit-edit"class="editable"> ${email}</span</p>
//             <p><strong>Phone:</strong>  <span id="edit-phone"class="editable">${phone}</span</p>
//             <h3>Education</h3>
//             <p>${education}</p>
//             <h3>Experience</h3>
//             <p>${experience}</p>
//             <h3>Skills</h3>
//             <p>${skills}</p>
//         `;
//         // Inserting the resume into the page
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error('The resume output element is missing');
//         }
//     } else {
//         console.error('One or more input elements are missing');
//     }
// });
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions to get form input values
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    // Check that elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        // Retrieving the values
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillElement.value;
        // Creating the resume output HTML with contenteditable="true"
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\" contenteditable=\"true\">".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\" contenteditable=\"true\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Inserting the resume into the page
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
