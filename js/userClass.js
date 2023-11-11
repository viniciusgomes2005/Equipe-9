class User{
    constructor({name,office,feedback="",question="",alumnClass="",professorInstituitions={},professorDescription=""}){
        this.office = office;
        this.name = name;
        this.feedback = feedback;
        this.question = question;
        this.alumnClass = alumnClass;
        this.professorInstituitions = professorInstituitions;
        this.professorDescription = professorDescription;
    };
};