import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    if (email && password) {
      const user = await repository.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Email e/ou senha incorretos' });
      } else {
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          return res.status(401).json({ error: 'Dados incorretos' });
        } else {
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || '');

          delete user.password;

          return res.json({ user, token });
        }
      }
    } else {
      return res.status(409).json({ error: 'Preencha todos os campos' });
    }
  }
}

export default new AuthController();
