import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import MovieController from './app/controllers/MovieController';

const router = Router();

router.post('/user', UserController.create);
router.post('/user/auth', AuthController.authenticate);
router.get('/user', authMiddleware, UserController.listUser);
router.get('/user/movies', authMiddleware, UserController.listMoviesCatalog);

router.post('/movie', authMiddleware, MovieController.catalogMovie);
router.get('/movie', authMiddleware, MovieController.listMovie);
router.get('/movies', authMiddleware, MovieController.list);

export default router;
