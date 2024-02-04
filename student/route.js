const {Router} = require('express')
const controller =require('./controller')

const router = Router()

router.get('/',controller.getStudents)
router.get('/:id', controller.getStudentsById)
router.post('/',controller.addStudent);
router.put('/:id',controller.updateStudent);
router.delete('/:id', controller.removeStudent)


module.exports = router