import { connect} from "../database"


//tipoServicios
export const getTipoServicios =  async (req,res) => {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM TipoServicio')
    console.log(rows)
    res.json(rows)
}


//post tipoServicios
export const setTipoServicio = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO TipoServicio (nombreServicio,descripcion,URL) VALUES(?,?,?)', [req.body.tipoServicio, req.body.descripcion,req.body.url]);
    res.json(result[0]["insertId"]);
}



export const updateTipoServicio = async  (req,res) => {
    const conn  = await connect();
    const result = await conn.query('UPDATE TipoServicio SET nombreServicio =?, descripcion =?, URL=? WHERE idTipoServicio =?', [req.body.tipoServicio, req.body.descripcion, req.body.url, req.params.idTipoServicio]);
    //Retorno de numero de filas cambiadas
    res.json(result[0]["changedRows"]);
}




//Cotizaciones
export const getCotizaciones = async (req,res) => {
    
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM Consulta')
    console.log(rows)
    res.json(rows)

}

export const getCotizacionId = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Consulta WHERE Consulta.idConsulta = ?', [req.params.id]);
    console.log(rows)
    res.json(rows);
}

export const getCotizacionTipoServicio = async (req,res) => {
   const conn = await connect();
   const [rows] = await conn.query('SELECT * FROM Consulta WHERE Consulta.idTipoServicio =?', [req.params.id]);
   console.log(rows)
   res.json(rows);
}   


export const getCotizacionCliente = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Consulta WHERE Consulta.idCliente =?', [req.params.id]);
    res.json(rows);
    console.log(rows);
}




export const setCotizaciones = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO Consulta(fecha,estado,mensaje,idTipoServicio,idCliente) VALUES(?,?, ?,?,?)',[req.body.fecha,"En espera",req.body.mensaje,req.body.idTipoServicio,req.body.idCliente]);
    res.json(result[0]["insertId"]);
}


export const updateCotizacion = async (req,res) => {
    const conn = await connect();
    //Date debe estar en formato 'YYYY-MM-DD'
    const result = await conn.query('UPDATE Consulta SET fecha =?, estado =?, mensaje =? WHERE idConsulta =?', [req.body.fecha, req.body.estado, req.body.mensaje, req.params.cotizacion]);
    console.log(result);
    res.json(result[0]["changedRows"]);
}





//SERVICIOS API
export const getServicios = async (req,res) => {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM Servicio')
    console.log(rows)
    res.json(rows)
}

export const setServicio = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO Servicio(idTipoServicio,descripcion,costo,fechaInicio,fechaFin,idCliente) VALUES(?,?,?,?,?,?)',[req.body.idTipoServicio, req.body.descripcion, req.body.costo,req.body.fechaInicio,req.body.fechaFin,req.body.idCliente]);
    res.json(result[0]["insertId"]);
    console.log(result);
}



export const getServicioId = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Servicio WHERE Servicio.idServicio =?', [req.params.id]);
    res.json(rows);
    console.log(rows);
}


export const getServicioFecha = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Servicio WHERE Servicio.fechaInicio =?', [req.params.fechaInicio]);
    res.json(rows);
    console.log(rows);
}   

export const getServicioCliente = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Servicio WHERE Servicio.idCliente =?', [req.params.id]);
    res.json(rows);
    console.log(rows);
    

}
export const updateServicio = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('UPDATE Servicio SET idTipoServicio =?, descripcion =?, costo =?, fechaInicio =?, fechaFin =?, idCliente =? WHERE idServicio =?', [req.body.idTipoServicio, req.body.descripcion, req.body.costo,req.body.fechaInicio,req.body.fechaFin,req.body.idCliente, req.params.id]);
    res.json(result[0]["changedRows"]);
    console.log(result);
}


export const setCliente = async(req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO Cliente(nombre,apellido,correo,empresa)VALUES(?,?,?,?)',[req.body.nombre,req.body.apellido,req.body.correo,req.body.empresa]);
    console.log(result);
    res.json(result[0]["insertId"]);
}

export const updateCliente = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('UPDATE Cliente SET nombre =?, apellido =?, correo =?, empresa =? WHERE idCliente =?', [req.body.nombre, req.body.apellido, req.body.correo, req.body.empresa, req.params.id]);
    res.json(result[0]["changedRows"]);
    console.log(result);
    
}

export const getClientes = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Cliente');
    res.json(rows);
    console.log(rows);
}

export const getClienteId = async(req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Cliente WHERE idCliente = ?',[req.params.idCliente]);
    res.json(rows);
    console.log(rows);
    
}




export const getUsuarios = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Usuario');
    res.json(rows);
    console.log(rows);
}


export const setUsuario = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO Usuario(correo,password,numeroTelefono,nombre,apellido)VALUES(?,?,?,?,?)',[req.body.correo, req.body.password,req.body.numeroTelefono,req.body.nombre,req.body.apellido]);
    console.log(result);
    res.json(result[0]["insertId"]);
}


export const setBlog = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO Blog(nombreBlog,urlPost,urlImagen)VALUES(?,?,?)',[req.body.nombre, req.body.urlPost,req.body.urlImagen]);
    console.log(result);
    res.json(result[0]["insertId"]);
}


export const getBlogs = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Blog');
    res.json(rows);
    console.log(rows);
}

