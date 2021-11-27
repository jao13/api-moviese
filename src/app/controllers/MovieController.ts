import { Request, Response } from 'express';
import { Equal, getRepository } from 'typeorm';

import Movie from '../models/Movie';

class MovieController {
  async catalogMovie(req: Request, res: Response) {
    const repository = getRepository(Movie);
    const { name, description, cover, type_movie } = req.body;
    const userId = req.userId;

    const movieExists = await repository.findOne({ where: { name } });

    if (name && description && cover && type_movie) {
      if (movieExists) {
        return res.status(400).json({ error: 'Filme já catalogado' });
      } else {
        const movie = repository.create({
          id_user: userId,
          name,
          description,
          cover,
          type_movie,
        });
        await repository.save(movie);

        return res.json(movie);
      }
    } else {
      return res.status(409).json({ error: 'Preencha todos os campos' });
    }
  }

  async listMovie(req: Request, res: Response) {
    const { id } = req.body;
    const repository = getRepository(Movie);

    const movie = await repository.findOne({ id });

    return res.json(movie);
  }

  async list(req: Request, res: Response) {
    const repository = getRepository(Movie);

    const movie = await repository.find();

    return res.json(movie);
  }
}

export default new MovieController();
