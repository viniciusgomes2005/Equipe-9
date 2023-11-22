function alumnPage(){
    const element =localStorage.getItem('student')
    const e = document.querySelector('.username-profile');
    e.textContent=element.name;
    i=document.querySelector('.grey-text');
    i.textContent = Object.keys(element.alumnClass)[0].concat(' : ', element.alumnClass[Object.keys(element.alumnClass)[0]]);
    o=document.querySelector('.alumn-feedback');
    o.textContent=element.feedback;
};
document.addEventListener('DOMContentLoaded',alumnPage);