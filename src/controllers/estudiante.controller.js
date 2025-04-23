const Estudiante = require("../models/estudiante.model");
const getAll = async (req, res, next)=>{   

    try {
        const estudiante = await Estudiante.findAll();
        let data= "";
        if (estudiantes.length > 0) {
            data = {
                total_estudiantes: estudiantes.length,
                estudiantes: estudiantes
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