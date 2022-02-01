import sql from './db';

//constructor
const Grupo = function(grupo) {
    this.nombre = grupo.nombre;
};

Grupo.create = (newGrupo, result) => {
    sql.query("INSERT INTO grupo SET ?", newGrupo, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("creted grupo: ", {id: res.insertId, ...newGrupo});
        result(null, { id: res.insertId, ...newGrupo });
    });
};

Grupo.findById = (id, result) => {
    sql.query(`SELECT * FROM grupo WHERE id = ${id}`, (err, res)=> {
        if(err){
            console.log("erro: ", err);
            result(err, null);
            return;
        }

        if(res.length) {
            console.log("found tutorial: ", res[0]);
            result(null, res[0]);
            return;
        }

        //not found grupo with the id
        result({ kind: "not_found" }, null);
    });
};

Grupo.getAll = (result) => {
    const query = "SELECT * FROM grupo";

    sql.query(query, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("grupos: ", res);
        result(null, res);
    });
};




export default Grupo;