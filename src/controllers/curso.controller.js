const Curso = require("../models/curso.model");
const getAll = async (req, res, next)=>{   

    try {
        const Curso = await Curso.findAll();
        let data= "";
        if (Curso.length > 0) {
            data = {
                total_cursos: cursos.length,
                cursos: cursos
            };

        }else{
            data={
                message: "this table has no records"

            };
        }
        res.status(200).json({
            ok: true,
            status: 200,
            body:data
        });
        res.json(users);
    } catch (error) {
        next(error);
    }
    

}

module.exports = {
    getAll
    
}