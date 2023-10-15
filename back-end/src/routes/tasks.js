import { Router } from "express";
import { setBlog, getBlogs, updateCliente,getUsuarios,setUsuario,getClientes,setServicio,getCotizacionCliente, getClienteId, getCotizacionId, getCotizacionTipoServicio, getCotizaciones, getServicioCliente, getServicioFecha, getServicioId, getServicios, getTipoServicios, setCliente, setCotizaciones, setTipoServicio, updateCotizacion, updateServicio, updateTipoServicio } from "../controllers/tasks";

const router = Router();




// Creacion de la router de la base de datos
/**
 * @swagger
 * /tipoServicios:
 *  get: 
 *    summary: Obtiene todos los tipos de servicios
 *    tags: [Tipo de Servicios]
 */
router.get('/tipoServicios', getTipoServicios)


/**
 * @swagger
 * /tipoServicios:
 *  post: 
 *    summary: Agrega un tipo de servicio nuevo
 *    tags: [Tipo de Servicios]
 */
router.post('/tipoServicios',setTipoServicio)

/**
 * @swagger
 * /tipoServicios:
 *  put: 
 *    summary: Actualizar un tipo de servicio por id 
 *    tags: [Tipo de Servicios]
 *    parameters:
 *     - in: path
 *       name: id Tipo de servicio
 *       schema:
 *          type: integer 
 *       required: true
 */
router.put('/tipoServicios/:idTipoServicio',updateTipoServicio)


//COTIZACIONES

/**
 * @swagger
 * /cotizaciones:
 *  get: 
 *    summary: Obtener todas las cotizaciones
 *    tags: [Cotizaciones]
 *    description: Se obtienen todas las cotizaciones
 *    
 */
router.get('/cotizaciones',getCotizaciones)

/**
 * @swagger
 * /cotizaciones/{cotizacionId}:
 *  get: 
 *    summary: Obtener una cotizacion por id 
 *    tags: [Cotizaciones]
 *    parameters:
 *     - in: path
 *       name: id cotizacion
 *       schema:
 *          type: integer
 *       required: true
 *       description: Id de la cotizacion
 *    
 *    
 */
router.get('/cotizaciones/:id',getCotizacionId)

/**
 * @swagger
 * /cotizaciones/{tipoServicio}:
 *  get: 
 *    summary: Obtener las cotizaciones por el tipo de servicios
 *    tags: [Cotizaciones]
 *    parameters:
 *     - in: path
 *       name: Tipo de Servicio
 *       schema:
 *          type: string
 *       required: true
 *      
 *    
 *    
 */

router.get('/cotizaciones/:tipoServicios',getCotizacionTipoServicio)


/**
 * @swagger
 * /cotizaciones/{cliente}:
 *  get: 
 *    summary: Obtener las cotizaciones de un cliente 
 *    tags: [Cotizaciones]
 *    parameters:
 *     - in: path
 *       name: id Cliente
 *       schema:
 *          type: integer
 *       required: true
 *  
 *    
 *    
 */
router.get('/cotizaciones/:cliente',getCotizacionCliente)

/**
 * @swagger
 * /cotizaciones/{cliente}:
 *  post: 
 *    summary: Agregar una nueva cotizacion 
 *    tags: [Cotizaciones]
 *  
 *    
 *    
 */

router.post('/cotizaciones/',setCotizaciones)

/**
 * @swagger
 * /cotizaciones/{cliente}:
 *  put: 
 *    summary: Actualizar una cotizacion por el id 
 *    tags: [Cotizaciones]
 *    parameters:
 *     - in: path
 *       name: id Cotizacion
 *       schema:
 *          type: integer
 *       required: true
 *  
 *    
 *    
 */

router.put('/cotizaciones/:cotizacion',updateCotizacion)





//SERVICIOS

/**
 * @swagger
 * /servicios:
 *  get: 
 *    summary: Obtener todos los servicios
 *    tags: [Servicios]
 *  
 *  
 *    
 *    
 */

router.get('/servicios',getServicios)


/**
 * @swagger
 * /servicios/{idServicio}:
 *  get: 
 *    summary: Obtener un servicio por id 
 *    tags: [Servicios]
 *    parameters:
 *     - in: path
 *       name: id Servicio
 *       schema:
 *          type: integer
 *       required: true
 *  
 */
router.get('/servicios/:id',getServicioId)


/**
 * @swagger
 * /servicios/{fechaInicio}:
 *  get: 
 *    summary: Obtener los servicios por fecha 
 *    tags: [Servicios]
 *    parameters:
 *     - in: path
 *       name: fecha
 *       schema:
 *          type: date
 *       required: true
 *  
 *    
 *    
 */
router.get('/servicios/:fechaInicio',getServicioFecha)

/**
 * @swagger
 * /servicios/{idCliente}:
 *  get: 
 *    summary: Obtener los servicios de un  cliente
 *    tags: [Servicios]
 *    parameters:
 *     - in: path
 *       name: id del Cliente
 *       schema:
 *          type: integer
 *       required: true
 *  
 *    
 *    
 */

router.get('/servicios/:cliente',getServicioCliente)


/**
 * @swagger
 * /servicios/{idServicio}:
 *  put: 
 *    summary: Actualizar un servicio por id
 *    tags: [Servicios]
 *    parameters:
 *     - in: path
 *       name: id Servicio
 *       schema:
 *          type: integer 
 *       required: true
 *  
 *    
 *    
 */
router.put('/servicios/:id',updateServicio)


/**
 * @swagger
 * /servicios:
 *  post: 
 *    summary: Agregar un nuevo servicio 
 *    tags: [Servicios]
 *    
 *  
 *    
 *    
 */
router.post('/servicios',setServicio)


/**
 * @swagger
 * /clientes:
 *  get: 
 *    summary: Obtener todos los clientes
 *    tags: [Clientes]
 *  
 *    
 *    
 */


router.get('/clientes',getClientes)

/**
 * @swagger
 * /cliente/{idCliente}:
 *  get: 
 *    summary: Obtener un cliente por id 
 *    tags: [Clientes]
 *    parameters:
 *     - in: path
 *       name: id Cliente
 *       schema:
 *          type: integer 
 *       required: true
 *  
 *    
 *    
 */

router.get('/cliente/:idCliente',getClienteId)

/**
 * @swagger
 * /cliente/{idCliente}:
 *  put: 
 *    summary: Actualizar un cliente por id 
 *    tags: [Clientes]
 *    parameters:
 *     - in: path
 *       name: id Cliente
 *       schema:
 *          type: integer 
 *       required: true
 *  
 *    
 *    
 */
router.put('/cliente/:id',updateCliente)

/**
 * @swagger
 * /cliente/{idCliente}:
 *  post: 
 *    summary: Agregar un nuevo cliente 
 *    tags: [Clientes]
 *  
 *    
 *    
 */
router.post('/cliente',setCliente)




/**
 * @swagger
 * /usuarios:
 *  get: 
 *    summary: Obtener todos los usuarios
 *    tags: [Usuarios]
 *  
 *    
 *    
 */


router.get('/usuarios',getUsuarios)

/**
 * @swagger
 * /usuarios:
 *  post: 
 *    summary: Agregar un nuevo usuario
 *    tags: [Usuarios]
 *  
 *    
 *    
 */

router.post('/usuarios',setUsuario)



/**
 * @swagger
 * /blogs:
 *  get: 
 *    summary: Obtener los blogs
 *    tags: [Blog]
 *  
 *    
 *    
 */
router.get('/blogs',getBlogs)



/**
 * @swagger
 * /blogs:
 *  post: 
 *    summary: Agregar Blog
 *    tags: [Blog]
 *  
 *    
 *    
 */
router.post('/blog',setBlog)


export default router