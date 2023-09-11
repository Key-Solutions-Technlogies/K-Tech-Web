import { Router } from "express";
import { updateCliente,getUsuarios,setUsuario,getClientes,setServicio,getCotizacionCliente, getClienteId, getCotizacionId, getCotizacionTipoServicio, getCotizaciones, getServicioCliente, getServicioFecha, getServicioId, getServicios, getTipoServicios, setCliente, setCotizaciones, setTipoServicio, updateCotizacion, updateServicio, updateTipoServicio } from "../controllers/tasks";

const router = Router();

// Creacion de la router de la base de datos
router.get('/tipoServicios', getTipoServicios)
router.post('/tipoServicios',setTipoServicio)
router.put('/tipoServicios/:idTipoServicio',updateTipoServicio)


//COTIZACIONES

router.get('/cotizaciones',getCotizaciones)
router.get('/cotizaciones/:id',getCotizacionId)
router.get('/cotizaciones/:tipoServicios',getCotizacionTipoServicio)
router.get('/cotizaciones/:cliente',getCotizacionCliente)

router.post('/cotizaciones/',setCotizaciones)

router.put('/cotizaciones/:cotizacion',updateCotizacion)





//SERVICIOS

router.get('/servicios',getServicios)
router.get('/servicios/:id',getServicioId)
router.get('/servicios/:fechaInicio',getServicioFecha)
router.get('/servicios/:cliente',getServicioCliente)
router.put('/servicios/:id',updateServicio)
router.post('/servicios',setServicio)


router.post('/cliente',setCliente)
router.get('/clientes',getClientes)
router.put('/cliente/:id',updateCliente)
router.get('/cliente/:idCliente',getClienteId)

router.post('/usuarios',setUsuario)
router.get('/usuarios',getUsuarios)






export default router