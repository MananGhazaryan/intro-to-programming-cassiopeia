let myName = "Manan";
let today = new Date();
let thisYear = today.getFullYear();  
let footer = document.querySelector('footer');  
let copyright = document.createElement('p'); 
copyright.innerHTML = myName.concat('', thisYear);
footer.appendChild(copyright); 

let skills = ['html', 'css', 'js']; 
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (i=0; i<skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}


let messageForm = document.querySelector('[name = leave_message]');
messageForm.addEventListener('submit',function(event){
    event.preventDefault();

let name = event.target.name.value;
let email = event.target.email.value;
let message = event.target.message.value;
console.log(`name: ${name}, email: ${email}, message: ${message}`);


    let messageSection = document.querySelector('#messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message}</span>`;
   
    let removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button'); 
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function() {
        newMessage.remove(); 
    }); 
    
    let editButton = document.createElement('button')
    editButton.innerText = 'Edit';
    editButton.setAttribute('type', 'button');
    editButton.addEventListener('click',function(event) {
    newMessage.remove(); 
    let nameElement = document.querySelector('[name = name]') 
    nameElement.value = name; 
    let emailElement = document.querySelector('[name = email]') 
    emailElement.value = email; 
    let messageElement = document.querySelector('[name = message]') 
    messageElement.value = message; 
});

newMessage.appendChild(removeButton); 
newMessage.appendChild(editButton);  
messageList.appendChild(newMessage);

messageForm.reset(); 
}); 