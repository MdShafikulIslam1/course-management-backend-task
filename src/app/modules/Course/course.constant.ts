export const courseFilterableFields: string[] = [
  'searchTerm',
  'categoryId',
  'level',
  'popularity',
  'title',
  'instructor',
  'duration',
  'price',
];

export const courseSearchableFields: string[] = [
  'categoryId',
  'level',
  'popularity',
  'title',
  'bloodGroup',
  'instructor',
  'duration',
  'price',
];

export const courseRelationalFields: string[] = ['categoryId'];

export const courseRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
