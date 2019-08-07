module.exports = {
    title: 'Corolar Cloud',
    description: 'Welcome to our Knowledge Base',
    base: '/docs/',
    markdown: {
        toc: {
          includeLevel: [1, 2, 3]
        }
      },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { 
                text: 'User Guides', link: '/guides/2.1/',
                items: [
                    { text: 'version 2.1', link: '/guides/2.1/' },
                    { text: 'version 2.0', link: '/guides/2.0/' },
                    { text: 'version 1.4', link: '/guides/1.4/' }
                ]
            },
            { text: 'How-to Articles', link: '/how-to-articles/' },
            { text: 'Release Notes', link: '/release-notes/' },
            { text: 'Contact Us', link: '/contactus/' }
        ],
        sidebar: {
            "/guides/2.1/userguide/":[
                "",
                "deploymentguide",
                "impuserguide"
            ],
            "/guides/2.1/apireference/": [
                "",
                "codesetapi"
            ],
            "/guides/2.1/": [
                "",
                "userguide/",
                "apireference/"
            ]
        }
    }
  }