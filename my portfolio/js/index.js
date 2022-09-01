let myName = "Manan";
let today = new Date();
let thisYear = today.getFullYear();  
let footer = document.querySelector('footer');  
let copyright = document.createElement('p'); 
copyright.innerHTML = myName.concat('', thisYear);
footer.appendChild(copyright); 

let skills = ['html', 'css', 'js']; 
let skillsSection = document.getElementById('.skills');
let skillsList = document.querySelector('ul');

for (i=0; i<skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
