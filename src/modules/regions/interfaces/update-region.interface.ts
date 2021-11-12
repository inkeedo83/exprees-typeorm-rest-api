import Region from '../model/region.entity';

export interface UpdateRegionInterface {
  id?: string;
  name: string;
  parent?: Region;
  children?: Region[];
  created_at?: Date;
  updated_at?: Date;
}
