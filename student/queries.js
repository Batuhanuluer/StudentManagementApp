
const getStudents = "SELECT * FROM students";
const getStudentById = 'SELECT * FROM students WHERE id = $1';
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)"
const removeStudent = "DELETE FROM students WHERE id = $1"
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";
const checkEmailExist = "SELECT s FROM students s where s.email =  $1";

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    checkEmailExist,
    removeStudent,
    updateStudent,
}