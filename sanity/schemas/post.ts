export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
            options: {
                hotspot: true
            }
        },
        {
            name: 'content',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Content'
        },
    ]
}