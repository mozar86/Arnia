// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 1,
//   name: 'Victor',
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }

let studentCount = 0

function makeStudent(data) {
  
}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

const repository = []

function createStudentRepository(data) {
  
  const student = {
    code: studentCount++,
    name: data.name,
    className: data.className,
    status: data.status,
    document: data.document,
    createdAt: new Date(),
  }
  repository.push(student)
  return student
}

function updateStudentRepository(code, data) {
}

function findStudentByCodeRepository(code) {
}

function findStudentByClassRepository(className) {
}

function deleteStudentByCode(code) {
}

createStudentRepository({
  name: 'Jubileu',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

createStudentRepository({
  name: 'Ciclano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

updateStudentRepository(2, {
  name: 'Fulano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})