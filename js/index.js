import {professors} from './userClass.js';
console.log(professors);
function professorList(){
    const e=document.querySelector('.listadeprofessores');
    professors.forEach(element => {
        if (!element){
            return false;
        };
        const professor = document.createElement('li');
        const profBody = createProfBox(element,element.name,element.description);
        professor.appendChild(profBody);
        console.log(professor);
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


document.addEventListener('DOMContentLoaded',professorList)
