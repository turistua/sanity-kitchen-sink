export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dd9436167033d03548e1cf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-99reizmj',
                  apiId: 'bbd6ecbb-53b4-4bfe-8be4-3abde9fd4c01'
                },
                {
                  buildHookId: '60dd9437167033d15848e0c4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zu17xdhw',
                  apiId: 'fb54a6a3-f699-4af0-95d6-ab97f9ef3ea5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/turistua/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zu17xdhw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
