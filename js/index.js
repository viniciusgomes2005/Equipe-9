import {professors} from './userClass.js';
function professorList(){
    const input = document.getElementById('answer');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            applyFilter();
        }
    });
    const e=document.querySelector('.listadeprofessores');
    professors.forEach(element => {
        if (!element){
            return false;
        };
        const professor = document.createElement('li');
        const profBody = createProfBox(element,element.name,element.description);
        professor.appendChild(profBody);
        e.appendChild(professor);
    });
};
function createProfBox(professor,name,description) {
    const userBox = document.createElement('ul');
    userBox.classList.add('user-box');
    const photoLi = document.createElement('li');
    const professorPhoto = document.createElement('img');
    professorPhoto.src = 'https://fakeimg.pl/30x30';
    professorPhoto.alt = 'pearson image';
    professorPhoto.classList.add('professor-photo');
    photoLi.appendChild(professorPhoto);
    userBox.appendChild(photoLi);
    const nameLi = document.createElement('li');
    const professorName = document.createElement('h3');
    professorName.textContent = name;
    professorName.classList.add('professor-name');
    nameLi.appendChild(professorName);
    userBox.appendChild(nameLi);
    const descriptionLi = document.createElement('li');
    const professorDescription = document.createElement('p');
    professorDescription.textContent = description;
    descriptionLi.appendChild(professorDescription);
    descriptionLi.classList.add('professor-description');
    userBox.appendChild(descriptionLi);
    userBox.addEventListener('click',function(){
        localStorage.setItem('professor',JSON.stringify(professor));
        window.location.href = '../pages/professor.html';
    });
    return userBox;
    
};
function applyFilter() {
    const input = document.getElementById('answer');
    const filterText = input.value.toLowerCase(); // Convertendo para minúsculas para comparação sem distinção entre maiúsculas e minúsculas

    const e = document.querySelector('.listadeprofessores');
    e.innerHTML = ''; 

    professors.forEach(element => {
        if (element && matchesFilter(element, filterText)) {
            const professor = document.createElement('li');
            const profBody = createProfBox(element, element.name, element.description);
            professor.appendChild(profBody);
            e.appendChild(professor);
        }
    });
}

function matchesFilter(element, filterText) {
    const lowerText=filterText.toLowerCase();
    const combinedString = (element.name + ' ' + element.description).toLowerCase();
    return combinedString.includes(lowerText);
}
document.addEventListener('DOMContentLoaded',professorList)
