import {professors,students} from './userClass';

function professorList(){
    e=document.querySelector('.listadeprofessores');
    professors.forEach(element => {
        const professor = document.createElement('li');
        const profBody = createProfBox(element.name,element.description);
        professor.appendChild(profBody);
        e.appendChild(professor);
    });
};
function alumnList(){
    e=document.querySelector('.listadealunos');
    students.forEach(element =>{
        const aluno = document.createElement('li');
        const alunBody = createStudentBox(element,element.name,element.feedback);
        aluno.appendChild(alunBody);
        e.appendChild(aluno);
    });
};
function createStudentBox(student,name,feedback) {
    const studentBox = document.createElement('ul');
    studentBox.classList.add('user-box');
    const photoLi = document.createElement('li');
    const userPhoto = document.createElement('img');
    userPhoto.src = 'https://fakeimg.pl/30x30';
    userPhoto.alt = 'user image';
    photoLi.appendChild(userPhoto);
    studentBox.appendChild(photoLi);
    const nameLi = document.createElement('li');
    const userName = document.createElement('h3');
    userName.textContent = name;
    nameLi.appendChild(userName);
    studentBox.appendChild(nameLi);
    const suggestionLi = document.createElement('li');
    const userSuggestion = document.createElement('p');
    userSuggestion.textContent = feedback;
    suggestionLi.appendChild(userSuggestion);
    suggestionLi.classList.add('comment');
    studentBox.appendChild(suggestionLi);
    studentBox.onclick()=()=>{
        localStorage.setItem(student);
    };
    return studentBox;
};
function createProfBox(name,description) {
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
    return userBox;
};
function alumnPage(element){
    e = element.querySelector('h3');
    e.textContent=element.name;
}