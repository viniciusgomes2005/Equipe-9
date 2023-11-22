function alumnPage(){
    var element =localStorage.getItem(('student'));
    element=JSON.parse(element);
    const e = document.querySelector('.username-profile');
    e.textContent=element.name;
    const i=document.querySelector('#grey-text');
    const turma = Object.keys(element.alumnClass)[0].concat(' : ', element.alumnClass[Object.keys(element.alumnClass)[0]]);
    i.textContent=turma;
    const o=document.querySelector('.alumn-feedback');
    o.textContent=element.feedback;
};
document.addEventListener('DOMContentLoaded',alumnPage);