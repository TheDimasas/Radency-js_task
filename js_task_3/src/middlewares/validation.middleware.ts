import express from 'express';
import { NoteSchema, UuidSchema } from '../schemas/schemas';

export const validationBody =
  (schema: NoteSchema) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error: unknown) {
      return res.status(400).json({ error });
    }
  };

export const validationParams =
  (schema: UuidSchema) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await schema.validate(req.params);
      next();
    } catch (error: unknown) {
      return res.status(400).json({ error });
    }
  };
