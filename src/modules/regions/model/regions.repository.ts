import { getManager, getRepository } from 'typeorm';
import { RegionRepositoryInterface } from '../interfaces/regions-repository.interface';
import Region from './region.entity';

export default class RegionsRepository implements RegionRepositoryInterface {
  async find(): Promise<Region[]> {
    const result = await getManager().getTreeRepository(Region).findTrees();
    return result;
  }

  async findById(id: string, relations?: string[]): Promise<Region> {
    const regionsRepository = getRepository(Region);
    const region = await regionsRepository.findOneOrFail(id, { relations });
    return region;
  }

  async save(region: Region): Promise<Region> {
    const regionsRepository = getRepository(Region);

    const createRegion = regionsRepository.create(region);

    const newRegion = await regionsRepository.save(createRegion);

    return newRegion;
  }

  async update(region: Region): Promise<Region> {
    const regionsRepository = getRepository(Region);

    await regionsRepository.update(region.id, region);
    const updatedRegion = await regionsRepository.findOneOrFail(region.id);
    return updatedRegion;
  }

  async delete(id: string): Promise<void> {
    const regionsRepository = getRepository(Region);
    await regionsRepository.delete(id);
  }
}
