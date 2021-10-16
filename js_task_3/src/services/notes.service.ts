import express from 'express';
import { Message } from 'yup/lib/types';

import NotesRepository from '../repositories/notes.repository';

class NotesService {
  async create(req: express.Request, res: express.Response) {
    try {
      return res.json(await NotesRepository.createNote(req.body));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(400).json({ message });
    }
  }

  getAll(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.getAllNotes());
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(400).json({ message });
    }
  }

  getStats(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.getStats());
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(400).json({ message });
    }
  }

  getOne(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.getNote(req.params.id));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }

  update(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.updateNote(req.body, req.params.id));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }

  delete(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.deleteNote(req.params.id));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
}
export default new NotesService();
