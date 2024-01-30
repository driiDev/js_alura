const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} está cadastrado!`);

        // indexof retorna o indice do parametro
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaAluno = listaDeAlunosEMedias[1][indice];
        
        console.log(`${aluno} tem a média ${mediaAluno}.`);

    }else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");