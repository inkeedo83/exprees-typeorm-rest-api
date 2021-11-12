import Region from '../model/region.entity';

export interface CreateRegionRequestInterface {
  name: string;
  departmentResponsible?: Region;
}
