import * as yup from 'yup';

export const schemaNote = yup.object().shape({
  name: yup
    .string()
    .required('The value must be a string and non empty')
    .min(5, 'Min length 5 characters')
    .max(50, 'Max length 50 characters'),
  category: yup
    .string()
    .oneOf(
      ['Quote', 'Idea', 'Task', 'Random Thought'],
      "The value must be one of this array: ['Quote', 'Idea', 'Task', 'Random Thought']"
    )
    .required('The value must be a string and non empty'),
  content: yup
    .string()
    .required('The value must be a string and non empty')
    .min(5, 'Min length 5 characters')
    .max(200, 'Max length 200 characters'),
});

export const schemaUuid = yup.object().shape({
  id: yup
    .string()
    .required('The value must be a string and non empty')
    .uuid('The value must be valid UUID'),
});

export type NoteSchema = typeof schemaNote;
export type UuidSchema = typeof schemaUuid;
