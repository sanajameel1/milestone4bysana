// listing element
document.getElementById('resumeFrom')?.addEventListener('submit', function(event){
    event.preventDefault();

const profilePictureInput= document.getElementById('profilePicture') as HTMLInputElement;

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    const usernameElement = document.getElementById(
        "username"
    )as HTMLInputElement

if(profilePictureInput && nameElement && emailElement &&  phoneElement   && educationElement && experienceElement && skillsElement //&& usernameElement 
    ){
    const name = nameElement.value
    const email = emailElement.value
    const phone = phoneElement.value
    const education = educationElement.value
    const experience = experienceElement.value
    const skills = skillsElement.value

     const username = usernameElement.value;
     const uniquePath = `resumes/${username.replace(/\s+/g, '-')}_CV.html`

    // picture element
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureFileURL = profilePictureFile?URL.createObjectURL(profilePictureFile) :'';

    //Create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureFileURL ?`<img src = "${profilePictureFileURL}"alt="profile Picture "class="profilePicture">` : ''}
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

     const resumeOutputElement = document.getElementById('resumeOutput')
     if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    makeEditable();
        
     }
} else {
    console.error('one or more output element are missing')
}

})

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function (){
            const currentElevent = element as HTMLElement;
            const currentValue = currentElevent.textContent || "" ;

          //replace content
          if(currentElevent.tagName === "p" || currentElevent.tagName === 'span'){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue
            input.classList.add('editing-input')

            input.addEventListener('blur', function(){
            currentElevent.textContent = input.value;
            currentElevent.style.display = 'inline'
            input.remove()

            })
            currentElevent.style.display = 'none'
            currentElevent.parentNode?.insertBefore(input, currentElevent)
            input.focus()
          

          }




        })
    })
}




    
