"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();

// Creacion de la router de la base de datos
/**
 * @swagger
 * /tipoServicios:
 *  get: 
 *    summary: Obtiene todos los tipos de servicios
 *    tags: [Tipo de Servicios]
 */
router.get('/tipoServicios', _tasks.getTipoServicios);

/**
 * @swagger
 * /tipoServicios:
 *  post: 
 *    summary: Agrega un tipo de servicio nuevo
 *    tags: [Tipo de Servicios]
 */
router.post('/tipoServicios', _tasks.setTipoServicio);

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
router.put('/tipoServicios/:idTipoServicio', _tasks.updateTipoServicio);

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
router.get('/cotizaciones', _tasks.getCotizaciones);

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
router.get('/cotizaciones/:id', _tasks.getCotizacionId);

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

router.get('/cotizaciones/:tipoServicios', _tasks.getCotizacionTipoServicio);

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
router.get('/cotizaciones/:cliente', _tasks.getCotizacionCliente);

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

router.post('/cotizaciones/', _tasks.setCotizaciones);

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

router.put('/cotizaciones/:cotizacion', _tasks.updateCotizacion);

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

router.get('/servicios', _tasks.getServicios);

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
router.get('/servicios/:id', _tasks.getServicioId);

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
router.get('/servicios/:fechaInicio', _tasks.getServicioFecha);

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

router.get('/servicios/:cliente', _tasks.getServicioCliente);

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
router.put('/servicios/:id', _tasks.updateServicio);

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
router.post('/servicios', _tasks.setServicio);

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

router.get('/clientes', _tasks.getClientes);

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

router.get('/cliente/:idCliente', _tasks.getClienteId);

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
router.put('/cliente/:id', _tasks.updateCliente);

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
router.post('/cliente', _tasks.setCliente);

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

router.get('/usuarios', _tasks.getUsuarios);

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

router.post('/usuarios', _tasks.setUsuario);
var _default = router;
exports["default"] = _default;