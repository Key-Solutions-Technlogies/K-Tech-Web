import { Router } from "express";
import { getCotizacionId, getCotizacionTipoServicio, getCotizaciones, getTipoServicios, setCotizaciones, setTipoServicio, updateCotizacion, updateTipoServicio } from "../controllers/tasks";

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


router.post('/servicios')
router.get('/servicios/')
router.get('/servicios/:id')
router.get('/servicios/:fechaInicio')
router.get('/servicios/:cliente')
router.put('/servicios/:id')

router.post('/clientes')
router.get('/clientes')
router.put('/clientes/:id')

router.post('/usuarios')
router.get('/usuarios')





export default router