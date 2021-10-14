import express from 'express';

import NotesService from '../services/notes.service';
import {
  validationBody,
  validationParams,
} from '../middlewares/validation.middleware';
import { schemaNote, schemaUuid } from '../schemas/schemas';

const router: express.Router = express.Router();

router.post('/notes', validationBody(schemaNote), NotesService.create);
router.delete('/notes/:id', validationParams(schemaUuid), NotesService.delete);
router.patch(
  '/notes/:id',
  validationBody(schemaNote),
  validationParams(schemaUuid),
  NotesService.update
);
router.get('/notes', NotesService.getAll);
router.get('/notes/:id', validationParams(schemaUuid), NotesService.getOne);
router.get('/stats', NotesService.getStats);

export default router;
