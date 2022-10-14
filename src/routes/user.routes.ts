import { Router } from 'express';
import { getUser, getUsers,deleteUser,updateUser,createUser } from '../controllers/user.controller';


const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;