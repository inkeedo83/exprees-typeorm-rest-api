import Region from '../model/region.entity';

export interface RegionRepositoryInterface {
  find(): Promise<Region[]>;
  findById(id: string, relations?: string[]): Promise<Region>;
  save(region: Region): Promise<Region>;
  update(region: Region): Promise<Region>;
  delete(id: string): Promise<void>;
}
