import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalleViaje,
} from "../controllers/paginasControllers.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// res es lo que nos repsonde y req lo que enviamos get- obtener
router.get("/", paginaInicio);

// render espera una vista
router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimonios);
router.post("/testimoniales", guardarTestimonial);

export default router;
