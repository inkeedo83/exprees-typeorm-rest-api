import { Request, Response } from 'express';
import RegionsService from './regions.service';

export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  async find(request: Request, response: Response): Promise<Response> {
    const regions = await this.regionsService.find();

    return response.json(regions);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const region = await this.regionsService.findById(id);
    return response.json(region);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, parent } = request.body;
    const data = { name, parent };

    try {
      const region = await this.regionsService.create(data);
      return response.status(200).json(region);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'unexpected error' });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, parent } = request.body;
    const data = { id, name, parent };

    try {
      const region = await this.regionsService.update(data);
      return response.status(200).json(region);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'unexpected error' });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.regionsService.delete(id);
    return response.json({ message: 'deleted' });
  }
}
