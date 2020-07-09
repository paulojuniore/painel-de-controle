const fs = require('fs');

// Função responsável por ler um arquivo .csv e retorná-lo em formato de array
//onde cada item representa uma linha do arquivo.
const readFile = (file) => {
  const data = fs.readFileSync(file, {
    encoding: 'utf8',
    flag: 'r'
  });

  const generosSplitted = data.split('\n')
  generosSplitted.splice(generosSplitted.length - 1)

  return generosSplitted;
}

// Função responsável por preparar os dados de cursos para inserção no banco de dados.
const buildCursos = (cursos) => {
  const dados = [];
  for (let i = 0; i < cursos.length; i++) {
    dados.push({
      nome_curso: cursos[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de munícipios para inserção no banco de dados.
const buildMunicipios = (municipios) => {
  const dados = [];
  for (let i = 0; i < municipios.length; i++) {
    const tokens_municipio = municipios[i].split(';');
    if (tokens_municipio[0].length > 30) {
      console.log('ERROR');
    }
    dados.push({
      municipio: tokens_municipio[0],
      estado: tokens_municipio[1],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de munícipios para inserção no banco de dados.
const buildAlunoVinculos = (aluno_vinculos) => {
  const dados = [];
  for (let i = 0; i < aluno_vinculos.length; i++) {
    const tokens_aluno = aluno_vinculos[i].split(';');
    dados.push({
      cpf: tokens_aluno[0],
      matricula_vinculo: tokens_aluno[1],
      id_curso: tokens_aluno[2],
      id_situacao_vinculo: tokens_aluno[3],
      periodo_evasao: tokens_aluno[4],
    });
  }
  return dados;
}

module.exports = { 
  readFile,
  buildCursos,
  buildMunicipios,
  buildAlunoVinculos,
}