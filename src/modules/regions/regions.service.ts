import { createRegionValidator, updateRegionValidator } from './validators';
import { CreateRegionRequestInterface } from './interfaces/create-region.interface';
import { RegionRepositoryInterface } from './interfaces/regions-repository.interface';
import { UpdateRegionInterface } from './interfaces/update-region.interface';
import Region from './model/region.entity';

class RegionsService {
  constructor(private regionsRepository: RegionRepositoryInterface) {}

  async find(): Promise<Region[]> {
    const regions = await this.regionsRepository.find();
    return regions;
  }

  async findById(id: string): Promise<Region> {
    const region = await this.regionsRepository.findById(id, [
      'parent',
      'children'
    ]);
    if (!region) throw new Error('not found');

    return region;
  }

  async create(data: CreateRegionRequestInterface): Promise<Region> {
    await createRegionValidator.validate(data, { abortEarly: false });
    const region = await this.regionsRepository.save(data as Region);
    return region;
  }

  async update(data: UpdateRegionInterface): Promise<Region> {
    await updateRegionValidator.validate(data, { abortEarly: false });
    const region = await this.regionsRepository.update(data as Region);
    return region;
  }

  async delete(id: string): Promise<void> {
    await this.regionsRepository.delete(id);
  }
}

export default RegionsService;
