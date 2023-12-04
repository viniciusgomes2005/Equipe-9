import {students} from '../userClass.js';
console.log(students)
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
    userSuggestion.textContent = feedback.slice(0,30)+'...';
    suggestionLi.appendChild(userSuggestion);
    suggestionLi.classList.add('comment');
    studentBox.appendChild(suggestionLi);
    studentBox.addEventListener('click',function(){
        localStorage.setItem('student',JSON.stringify(student));
        window.location.href = '../pages/alumn.html';
    });
    return studentBox;
};
function alumnList(){
    const e=document.querySelector('.listadealunos');
    students.forEach(element =>{
        if (!element){
            return false;
        };
        const aluno = document.createElement('li');
        const alunBody = createStudentBox(element,element.name,element.feedback);
        aluno.appendChild(alunBody);
        e.appendChild(aluno);
    });
};
document.addEventListener('DOMContentLoaded',alumnList);