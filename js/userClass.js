class User{
    constructor({name,office,feedback="",question="",alumnClass={},professorDescription=""}){
        this.office = office;
        this.name = name;
        this.feedback = feedback;
        this.question = question;
        this.alumnClass = alumnClass;
        this.professorDescription = professorDescription;
    };
};

const students = [];
const professors = [];

// Alunos do Insper na matéria Fismov
students.push(
    new User({
        name: "Ana Silva",
        office: "Student",
        alumnClass: { Fismov: "Insper" },
        question: "Como podemos aplicar os conceitos de Fismov em projetos práticos?",
        feedback: "As aulas estão sendo muito proveitosas, aprendendo bastante!",
    })
);

students.push(
    new User({
        name: "Lucas Oliveira",
        office: "Student",
        alumnClass: { Fismov: "Insper" },
        question: "Qual é a importância da disciplina Fismov para a engenharia?",
        feedback: "Gostaria de mais exemplos práticos durante as aulas.",
    })
);

// Alunos do Mackenzie na matéria Cálculo 1
students.push(
    new User({
        name: "Isabela Santos",
        office: "Student",
        alumnClass: { "Cálculo 1": "Mackenzie" },
        question: "Como podemos utilizar os conceitos de Cálculo 1 em situações do cotidiano?",
        feedback: "Acho as aulas um pouco rápidas, seria bom ter mais exercícios em sala.",
    })
);

students.push(
    new User({
        name: "Pedro Rocha",
        office: "Student",
        alumnClass: { "Cálculo 1": "Mackenzie" },
        question: "O que é mais desafiador em Cálculo 1?",
        feedback: "A matéria é difícil, mas estou conseguindo acompanhar.",
    })
);

// Alunos da Poli-USP na matéria Geometria Analítica
students.push(
    new User({
        name: "Juliana Lima",
        office: "Student",
        alumnClass: { "Geometria Analítica": "Poli-USP" },
        question: "Como a Geometria Analítica se relaciona com outras disciplinas de engenharia?",
        feedback: "Acho a matéria muito interessante, mas os exercícios são desafiadores.",
    })
);

students.push(
    new User({
        name: "Rafael Souza",
        office: "Student",
        alumnClass: { "Geometria Analítica": "Poli-USP" },
        question: "Qual a aplicação prática da Geometria Analítica?",
        feedback: "Estou gostando bastante da disciplina, o professor explica muito bem.",
    })
);
students.push(
    new User({
        name: "Mariana Santos",
        office: "Student",
        alumnClass: { Fismov: "Insper" },
        question: "O que mais lhe interessa em Fismov?",
        feedback: "Estou gostando muito do conteúdo, é bastante relevante para minha área de interesse.",
    })
);

students.push(
    new User({
        name: "Ricardo Oliveira",
        office: "Student",
        alumnClass: { Fismov: "Insper" },
        question: "Você acredita que Fismov é uma disciplina essencial para engenheiros?",
        feedback: "Acho que sim, especialmente para quem quer seguir na área de mecânica.",
    })
);

// Continuação dos alunos do Mackenzie na matéria Cálculo 1
students.push(
    new User({
        name: "Carla Lima",
        office: "Student",
        alumnClass: { "Cálculo 1": "Mackenzie" },
        question: "Qual é a parte mais desafiadora de Cálculo 1?",
        feedback: "A parte de limites é um pouco complicada, mas estou estudando bastante.",
    })
);

students.push(
    new User({
        name: "Fernando Silva",
        office: "Student",
        alumnClass: { "Cálculo 1": "Mackenzie" },
        question: "Como você se prepara para as provas de Cálculo 1?",
        feedback: "Costumo fazer muitos exercícios e revisar os conceitos antes das provas.",
    })
);

// Continuação dos alunos da Poli-USP na matéria Geometria Analítica
students.push(
    new User({
        name: "Amanda Rocha",
        office: "Student",
        alumnClass: { "Geometria Analítica": "Poli-USP" },
        question: "Você pretende aplicar Geometria Analítica em sua carreira profissional?",
        feedback: "Ainda estou indecisa, mas acho que pode ser útil em algumas situações.",
    })
);

students.push(
    new User({
        name: "José Oliveira",
        office: "Student",
        alumnClass: { "Geometria Analítica": "Poli-USP" },
        question: "O que você acha da abordagem do professor em Geometria Analítica?",
        feedback: "O professor é ótimo, explica de forma clara e está sempre disposto a ajudar.",
    })
);
// Alunos da UFMG na matéria Algoritmos e Estruturas de Dados
students.push(
    new User({
        name: "Juliana Pereira",
        office: "Student",
        alumnClass: { "Algoritmos e Estruturas de Dados": "UFMG" },
        question: "Qual é o seu maior desafio em Algoritmos e Estruturas de Dados?",
        feedback: "A complexidade de alguns algoritmos é um desafio, mas estou estudando para superar.",
    })
);

students.push(
    new User({
        name: "Pedro Almeida",
        office: "Student",
        alumnClass: { "Algoritmos e Estruturas de Dados": "UFMG" },
        question: "Como você costuma estudar para esta disciplina?",
        feedback: "Gosto de fazer muitos exercícios práticos e revisar os conceitos-chave.",
    })
);

// Alunos da UNICAMP na matéria Sistemas Operacionais
students.push(
    new User({
        name: "Luciana Silva",
        office: "Student",
        alumnClass: { "Sistemas Operacionais": "UNICAMP" },
        question: "Você já teve alguma experiência prática com Sistemas Operacionais?",
        feedback: "Participei de um projeto prático relacionado a sistemas operacionais, o que foi muito enriquecedor.",
    })
);

students.push(
    new User({
        name: "Rafael Oliveira",
        office: "Student",
        alumnClass: { "Sistemas Operacionais": "UNICAMP" },
        question: "O que você acha do conteúdo ministrado nesta disciplina?",
        feedback: "Acho muito interessante, especialmente as aulas práticas em laboratório.",
    })
);

// Alunos da USP na matéria Redes de Computadores
students.push(
    new User({
        name: "Fernanda Santos",
        office: "Student",
        alumnClass: { "Redes de Computadores": "USP" },
        question: "Você planeja seguir carreira na área de redes de computadores?",
        feedback: "Ainda estou decidindo, mas as aulas têm despertado meu interesse nessa área.",
    })
);

students.push(
    new User({
        name: "Rodrigo Lima",
        office: "Student",
        alumnClass: { "Redes de Computadores": "USP" },
        question: "Qual foi o projeto mais interessante que você realizou nesta disciplina?",
        feedback: "Trabalhamos em um projeto prático de configuração de redes, o que foi desafiador e gratificante.",
    })
);

// Professores da UFMG
professors.push(
    new User({
        name: "Ana Costa",
        office: "Professor",
        professorDescription: "Especializada em Algoritmos e Estruturas de Dados. Possui vasta experiência em pesquisa na área.",
    })
);

professors.push(
    new User({
        name: "Carlos Oliveira",
        office: "Professor",
        professorDescription: "De Algoritmos e Estruturas de Dados, com ênfase em teoria da computação.",
    })
);

// Professores da UNICAMP
professors.push(
    new User({
        name: "Maria Santos",
        office: "Professor",
        professorDescription: "Renomada em Sistemas Operacionais, com contribuições significativas para a área.",
    })
);

professors.push(
    new User({
        name: "Paulo Rocha",
        office: "Professor",
        professorDescription: "Experiente em Sistemas Operacionais, com foco em pesquisa aplicada.",
    })
);

// Professores da USP
professors.push(
    new User({
        name: "Laura Lima",
        office: "Professor",
        professorDescription: "Especialista em Redes de Computadores, com ênfase em segurança cibernética.",
    })
);

professors.push(
    new User({
        name: "André Alves",
        office: "Professor",
        professorDescription: "Com vasta experiência em Redes de Computadores, com participação em projetos de larga escala.",
    })
);
// Adicionando mais professores de Cálculo
professors.push(
    new User({
        name: "Fernanda Oliveira",
        office: "Professor",
        professorDescription: "Especializada em Cálculo Diferencial e Integral, com forte ênfase na aplicação prática.",
    })
);

professors.push(
    new User({
        name: "Roberto Santos",
        office: "Professor",
        professorDescription: "Com experiência em Cálculo Numérico, contribuindo para a resolução de problemas computacionais.",
    })
);
// Professores de Cálculo
professors.push(
    new User({
        name: "Fernanda Silva",
        office: "Professor",
        professorDescription: "Especializada em Cálculo Diferencial e Integral. Contribuições significativas para a área.",
    })
);

professors.push(
    new User({
        name: "Ricardo Oliveira",
        office: "Professor",
        professorDescription: "De Cálculo Numérico, com ampla experiência em métodos computacionais aplicados ao Cálculo.",
    })
);

// Professores de Cálculo
professors.push(
    new User({
        name: "André Ramalho",
        office: "Professor",
        professorDescription: "Especializada em Cálculo Diferencial e Integral, com ênfase em aplicações práticas.",
    })
);

professors.push(
    new User({
        name: "Luís Súarez",
        office: "Professor",
        professorDescription: "De Cálculo Multivariável, com experiência em pesquisa em otimização.",
    })
);

// Professores de Física
professors.push(
    new User({
        name: "Isabel Sousa",
        office: "Professor",
        professorDescription: "Especialista em Física Quântica, com contribuições importantes para a área.",
    })
);

professors.push(
    new User({
        name: "Gabriel Santos",
        office: "Professor",
        professorDescription: "Com experiência em Física de Partículas, participando de projetos de pesquisa avançada.",
    })
);
professors.push(
    new User({
        name: "Juliana Almeida",
        office: "Professor",
        professorDescription: "Especializada em Cálculo III, explorando conceitos avançados e aplicações práticas.",
    })
);

professors.push(
    new User({
        name: "Denis Costa",
        office: "Professor",
        professorDescription: "Com vasta experiência em Física Experimental, promovendo atividades práticas e laboratoriais.",
    })
);
export default {professors,students};
