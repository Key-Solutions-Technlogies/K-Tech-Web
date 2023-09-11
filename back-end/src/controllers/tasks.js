import { connect} from "../database"


//tipoServicios
export const getTipoServicios =  async (req,res) => {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.tipoServicio')
    console.log(rows)
    res.json(rows)
}


//post tipoServicios
export const setTipoServicio = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.tipoServicio (tipoServicio,descripcion) VALUES(?,?)', [req.body.tipoServicio, req.body.descripcion]);
    res.json(result[0]["insertId"]);
}



export const updateTipoServicio = async  (req,res) => {
    const conn  = await connect();
    const result = await conn.query('UPDATE bv4rkfhexrvnpun4adpx.tipoServicio SET tipoServicio =?, descripcion =? WHERE idTipoServicio =?', [req.body.tipoServicio, req.body.descripcion, req.params.idTipoServicio]);
    //Retorno de numero de filas cambiadas
    res.json(result[0]["changedRows"]);
}




//Cotizaciones
export const getCotizaciones = async (req,res) => {
    
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion')
    console.log(rows)
    res.json(rows)

}

export const getCotizacionId = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion WHERE bv4rkfhexrvnpun4adpx.Cotizacion.idConsulta = ?', [req.params.id]);
    console.log(rows)
    res.json(rows);
}

export const getCotizacionTipoServicio = async (req,res) => {
   const conn = await connect();
   const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion WHERE bv4rkfhexrvnpun4adpx.Cotizacion.idTipoServicio =?', [req.params.id]);
   console.log(rows)
   res.json(rows);
}   


export const getCotizacionCliente = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion WHERE bv4rkfhexrvnpun4adpx.Cotizacion.idCliente =?', [req.params.id]);
    res.json(rows);
    console.log(rows);
}




export const setCotizaciones = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Cotizacion(Fecha,Estado,Mensaje,idTipoServicio,idCliente) VALUES(?,?, ?,?,?)',[req.body.fecha,"En espera",req.body.mensaje,req.body.idTipoServicio,req.body.idCliente]);
    res.json(result[0]["insertId"]);
}


export const updateCotizacion = async (req,res) => {
    const conn = await connect();
    //Date debe estar en formato 'YYYY-MM-DD'
    const result = await conn.query('UPDATE bv4rkfhexrvnpun4adpx.Cotizacion SET Fecha =?, Estado =?, Mensaje =? WHERE idConsulta =?', [req.body.fecha, req.body.estado, req.body.mensaje, req.params.cotizacion]);
    console.log(result);
    res.json(result[0]["changedRows"]);
}





//SERVICIOS API
export const getServicios = async (req,res) => {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio')
    console.log(rows)
    res.json(rows)
}

export const setServicio = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Servicio(idTipoServicio,Descripcion,Costo,FechaInicio,FechaFin,idCliente) VALUES(?,?,?,?,?,?)',[req.body.idTipoServicio, req.body.descripcion, req.body.costo,req.body.fechaInicio,req.body.fechaFin,req.body.idCliente]);
    res.json(result[0]["insertId"]);
    console.log(result);
}



export const getServicioId = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio WHERE bv4rkfhexrvnpun4adpx.Servicio.idServicio =?', [req.params.id]);
    res.json(rows);
    console.log(rows);
}


export const getServicioFecha = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio WHERE bv4rkfhexrvnpun4adpx.Servicio.fechaInicio =?', [req.params.fechaInicio]);
    res.json(rows);
    console.log(rows);
}   

export const getServicioCliente = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio WHERE bv4rkfhexrvnpun4adpx.Servicio.idCliente =?', [req.params.id]);
    res.json(rows);
    console.log(rows);
    

}
export const updateServicio = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('UPDATE bv4rkfhexrvnpun4adpx.Servicio SET idTipoServicio =?, Descripcion =?, Costo =?, FechaInicio =?, FechaFin =?, idCliente =? WHERE idServicio =?', [req.body.idTipoServicio, req.body.descripcion, req.body.costo,req.body.fechaInicio,req.body.fechaFin,req.body.idCliente, req.params.id]);
    res.json(result[0]["changedRows"]);
    console.log(result);
}


export const setCliente = async(req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Cliente(Nombre,Apellido,Correo,Empresa)VALUES(?,?,?,?)',[req.body.nombre,req.body.apellido,req.body.correo,req.body.empresa]);
    console.log(result);
    res.json(result[0]["insertId"]);
}

export const updateCliente = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('UPDATE bv4rkfhexrvnpun4adpx.Cliente SET Nombre =?, Apellido =?, Correo =?, Empresa =? WHERE idCliente =?', [req.body.nombre, req.body.apellido, req.body.correo, req.body.empresa, req.params.id]);
    res.json(result[0]["changedRows"]);
    console.log(result);
    
}

export const getClientes = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cliente');
    res.json(rows);
    console.log(rows);
}

export const getClienteId = async(req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cliente WHERE idCliente = ?',[req.params.idCliente]);
    res.json(rows);
    console.log(rows);
    
}




export const getUsuarios = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Usuario');
    res.json(rows);
    console.log(rows);
}


export const setUsuario = async (req,res) => {
    const conn = await connect();
    const result = await conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Usuario(correo,password,numeroTelefono)VALUES(?,?,?)',[req.body.correo, req.body.password,req.body.numeroTelefono]);
    console.log(result);
    res.json(result[0]["insertId"]);
}
