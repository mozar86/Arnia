const { MongoClient, ObjectId } = require('mongodb')
const client = new MongoClient('mongodb+srv://lucresequiser:ml163086@cluster1.vmygcm6.mongodb.net/')

const studentsCollection = client.db('turma7').collection('students')

//create
async function createStudent(name, documentNumber, className) {
    const student = await studentsCollection.insertOne({
        name, 
        documentNumber, 
        className
    })
    console.log(student)
    client.close()
}
//read
async function listStudents() {
    const students = await studentsCollection.find().toArray()
    console.log(students)
}

async function listStudentsByClassName(className) {
    const students = await studentsCollection.find({ className }).toArray()
    console.log(students)   
}

async function getStudentsByDocumentNumber(documentNumber) {
    const students = await studentsCollection.findOne({ documentNumber }) 
    console.log(students)  
}
//update
async function updateStudent(id, data) {
    await studentsCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set:{...data} }
    )
}
//delete
async function removeStudent(id) {
    const teste = await studentsCollection.findOneAndDelete({
        _id: new ObjectId(id)
    })
    console.log("Removeu: ", teste)
}

createStudent('Carlos', '12345678911', 'turma7')
//listStudents()
//listStudentsByClassName('turma7')
//updateStudent('colocar_o_id_gerado', { name: 'Shamanta' })
//removeStudent('colocar_o_id_gerado')