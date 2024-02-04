const pool = require('../database')
const query = require('./queries')

const getStudents = (req,res) =>{
    pool.query(query.getStudents,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);      
    })
}

const getStudentsById = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(query.getStudentById, [id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addStudent = (req,res)=>{
    const {name , email, age, dob} = req.body

    // check if email exist

    pool.query(query.checkEmailExist,[email], (error,results)=>{
        if(results.rows.length) {
            res.send("Email already exists.");
        }

        // add student to db
        pool.query(query.addStudent, [name, email, age, dob] ,(error,results) =>{
            if(error) throw error;
            res.status(201).send("Student Created Succesfully!");
        
        })
    })

}

const removeStudent = (req,res) =>{
    const id  = parseInt(req.params.id);

    pool.query(query.getStudentById,[id],(error,results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not existt in the database")
        }

        pool.query(query.removeStudent,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Student removed succesfully. ")
        })

    })
}

const updateStudent = (req,res) =>{
    const id = parseInt(req.params.id);
    const {name} =req.body;

    pool.query(query.getStudentById,[id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not existt in the database")
        }

        pool.query(query.updateStudent,[name, id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Student updated succesfully");
        })
    })
}
module.exports = {
    getStudents,
    getStudentsById,
    addStudent,
    removeStudent,
    updateStudent,
} 