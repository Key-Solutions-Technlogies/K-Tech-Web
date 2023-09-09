import { Router } from "express";
import { getUsuarios,setUsuario,getClientes,setServicio,getCotizacionCliente, getClienteId, getCotizacionId, getCotizacionTipoServicio, getCotizaciones, getServicioCliente, getServicioFecha, getServicioId, getServicios, getTipoServicios, setCliente, setCotizaciones, setTipoServicio, updateCotizacion, updateServicio, updateTipoServicio } from "../controllers/tasks";

const router = Router();

// Creacion de la router de la base de datos
router.get('/tipoServicios', getTipoServicios)
router.post('/tipoServicios',setTipoServicio)
router.put('/tipoServicios',updateTipoServicio)

router.get('/cotizaciones',getCotizaciones)
router.post('/cotizaciones',setCotizaciones)

router.put('/cotizaciones/:id',updateCotizacion)
router.get('/cotizaciones/:id',getCotizacionId)
router.get('/cotizaciones/:tipoServicios',getCotizacionTipoServicio)
router.get('/cotizaciones/:cliente',getCotizacionCliente)


router.post('/servicios',setServicio)
router.get('/servicios/',getServicios)
router.get('/servicios/:id',getServicioId)
router.get('/servicios/:fechaInicio',getServicioFecha)
router.get('/servicios/:cliente',getServicioCliente)
router.put('/servicios/:id',updateServicio)

router.post('/clientes',setCliente)
router.get('/clientes',getClientes)
router.put('/clientes/:id',getClienteId)

router.post('/usuarios',setUsuario)
router.get('/usuarios',getUsuarios)






export default router