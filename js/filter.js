import { students } from './userClass';
function filterbySubject({ subject="default", institution='default' }) {
    let filteredStudents = students;
  
    if (institution !== 'default') {
      filteredStudents = students.filter(student => Object.values(student.alumnClass)[0] === institution);
    }
  
    if (subject !== "default") {
      filteredStudents = filteredStudents.filter(student => Object.keys(student.alumnClass)[0] === subject);
    }
  
    localStorage.setItem('filteredStudents', JSON.stringify(filteredStudents));
  }
  
function giveProperties() {
    const buttons = document.querySelectorAll('.filterbutton');
    const hiddenFilter = document.getElementById('hiddenfilter');
    const buttons2 = document.querySelectorAll('.filterclassbutton');
    const subjects = document.querySelectorAll('.subject')
    console.log(hiddenFilter);
    buttons.forEach((button, index) => {
      let inst = 'default';
  
      switch (index) {
        case 0:
          inst = 'Insper';
          break;
        case 1:
          inst = 'Mackenzie';
          break;
        case 2:
          inst = 'Poli-USP';
          break;
      };
      localStorage.setItem('inst',inst);
  
      button.addEventListener('click', () => {
        console.log(inst);
        filterbySubject({ institution: inst });
        switch(inst){
            case "Insper":
                subjects[0].textContent='Fismov';
                break;
            case "Mackenzie":
                subjects[0].textContent='Cálculo 1';
                break;
            case "Poli-USP":
                subjects[0].textContent='Geometria analítica';
                break;
        };
        hiddenFilter.style.visibility = 'visible';
      });
    },
  );
  
    
  buttons2.forEach((button) => {
    const inst =localStorage.getItem('inst');
    let sub = 'default';
    button.addEventListener('click', () => {
        filterbySubject({institution:inst,subject:sub});
      }
     );
   }
 );
}
document.addEventListener('DOMContentLoaded',giveProperties);
console.log(Object.values(students[0].alumnClass)[0])