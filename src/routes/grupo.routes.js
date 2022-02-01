import { Router } from 'express';
import Grupo from '../controllers/grupo.controllers';

const router = Router();

//retrive une grupo
router.get("/:id", Grupo.findOne);

//retrive all grupos
router.get("/", Grupo.findAll);

export default router;