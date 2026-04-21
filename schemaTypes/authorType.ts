import { defineField, defineType } from 'sanity'

export const authorType = defineType({
  name: 'Author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      type: 'image',
    }),
  ],
})
