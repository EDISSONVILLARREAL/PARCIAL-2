const Inscripcion = require("../models/inscripcion.model");
const getAll = async (req, res, next)=>{   

    try {
        const inscripcion = await Inscripcion.findAll();
        let data= "";
        if (inscripcion.length > 0) {
            data = {
                total_inscripciones: inscripcion.length,
                inscripciones: inscripciones
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