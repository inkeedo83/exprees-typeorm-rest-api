import * as Yup from 'yup';

const createRegionValidator = Yup.object().shape({
  name: Yup.string().required(),
  departmentResponsible: Yup.object({
    id: Yup.string()
  }).optional()
});

const updateRegionValidator = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string().required(),
  parentId: Yup.string()
});

export { createRegionValidator, updateRegionValidator };
