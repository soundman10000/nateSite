const routes =
  [ { route: ['index']
    , name: 'index'
    , moduleId: 'pages/index/component'
    , nav: false, title:'Index'
    }
  , { route: ['aboutus']
    , name: 'aboutus'
    , moduleId: 'pages/about-us/component'
    , nav: false, title:'About Us'
    }
  , { route: ['']
    , redirect: 'index'
    }
  ]

export class App {
  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Home'

    config.map(routes)

    config.mapUnknownRoutes(() => 'pages/index/component')

    this.router = router
  }
}