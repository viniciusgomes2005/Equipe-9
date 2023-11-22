function profPage(){
    var element =localStorage.getItem(('professor'));
    element=JSON.parse(element);
    const e = document.querySelector('#prof-profile');
    console.log(e);
    const nomedoprof=element.name;
    e.textContent=nomedoprof;
    const i=document.querySelector('#gray-text');
    const descricaodoprof=element.professorDescription;
    i.textContent=descricaodoprof;
};
document.addEventListener('DOMContentLoaded',profPage);