// utilzando Class //
class Aluno {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(name, score) {
        const aluno = new Aluno(name, score);
        this.alunos.push(aluno);
    }

    filtrarAlunosAprovados() {
        return this.alunos.filter(aluno => aluno.score >= 6);
    }
}

const turma = new Turma();
turma.adicionarAluno('Anderson', 8.0);
turma.adicionarAluno('Gleiciane', 10);
turma.adicionarAluno('Carlos', 5.0);
turma.adicionarAluno('André', 9.5);

const alunosAprovados = turma.filtrarAlunosAprovados();
console.log(alunosAprovados);


// Sem utilizar Class //
const alunos = [
    {name: 'Anderson', score: 8.0},
    {name: 'Gleiciane', score: 10.0},
    {name: 'Carlos', score: 5.0},
    {name: 'André', score: 9.0}
]

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.score >= 6);
}

const alunosAprovados2 = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados2);