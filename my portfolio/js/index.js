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


let messageForm = document.querySelector('[name = leave_message]')
messageForm.addEventListener('submit',function(event){
    event.preventDefault()

    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;
    console.log(name);
    console.log(email);
    console.log(message);


    let messageSection = document.getElementById('messages')
    let messageList = messageSection.querySelector('ul')
    let newMessage = document.createElement('li')
    newMessage.innerHTML = '<a href="mailto:email">name</a><span>message</span>'
    let removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.setAttribute('type', 'button') 
    removeButton.addEventListener('click', function(event){
    let entry = document.querySelector("button").parentNode;
    entry.remove(); 
    removeButton.appendChild(newMessage) 
    newMessage.append(messageList) 
})
    document.querySelector('[name = leave_message]').reset();
});  


