export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f96e904fa95192e23d735d1',
                  title: 'Sanity Studio',
                  name: 'laptop-kaiser-studio',
                  apiId: '50c698ba-8848-4413-9a5c-e23bd451cab6'
                },
                {
                  buildHookId: '5f96e90418a5c42bc3012f10',
                  title: 'Blog Website',
                  name: 'laptop-kaiser',
                  apiId: '824b85a8-83b7-475c-9fd5-bc1f17027082'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrodesc/laptop-kaiser',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://laptop-kaiser.netlify.app', category: 'apps'}
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
