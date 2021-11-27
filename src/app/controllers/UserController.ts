import { Request, Response } from 'express';
import { Equal, getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import Movie from '../models/Movie';

class UserController {
  async create(req: Request, res: Response) {
    const repository = getRepository(User);
    const { name, email, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (name && email && password) {
      if (userExists) {
        return res.status(409).json({ error: 'Email já utilizado' });
      } else {
        const user = repository.create({ name, email, password });
        await repository.save(user);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || '');

        delete user.password;

        return res.json({ user, token });
      }
    } else {
      return res.status(409).json({ error: 'Preencha todos os campos' });
    }
  }

  async listUser(req: Request, res: Response) {
    const userId = req.userId;
    const repository = getRepository(User);

    const user = await repository.findOne({ where: { id: Equal(userId) } });

    delete user.password;

    return res.json({ user });
  }

  async listMoviesCatalog(req: Request, res: Response) {
    const repository = getRepository(Movie);
    const userId = req.userId;

    const movie = await repository.find({ where: { id_user: Equal(userId) } });

    return res.json(movie);
  }
}

export default new UserController();
