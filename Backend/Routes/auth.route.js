import {Router} from 'express';
const router = Router();
import {register, login, getAllUsers } from '../Controllers/auth.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js'; //import
 router.post('/register', register);
 router.post('/login', login );
 router.get('/users',verifyToken, getAllUsers); // use middleware here



 export default router;

