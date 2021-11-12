import { Router } from 'express';
import RegionsRepository from './model/regions.repository';
import { RegionsController } from './regions.controller';
import RegionsService from './regions.service';

const regionsRouter = Router();

const regionsRepository = new RegionsRepository();
const regionsService = new RegionsService(regionsRepository);
const regionsController = new RegionsController(regionsService);

regionsRouter.get('/regions', (req, res) => {
  regionsController.find(req, res);
});
regionsRouter.get('/regions/:id', (req, res) => {
  regionsController.findById(req, res);
});
regionsRouter.post('/regions', (req, res) => {
  regionsController.create(req, res);
});
regionsRouter.patch('/regions/:id', (req, res) => {
  regionsController.update(req, res);
});
regionsRouter.delete('/regions/:id', (req, res) => {
  regionsController.delete(req, res);
});

export default regionsRouter;
