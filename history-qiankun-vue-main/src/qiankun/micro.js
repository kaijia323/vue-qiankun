export const microApps = [
  {
    name: 'historyMicro',
    entry: '//localhost:8888',
    container: '#subApp',
    activeRule: '/historyMicro'
  }
].map(app => {
  // 将监听的路由下发到子应用的base
  const routerBase = app.activeRule
  app.props = {
    routerBase
  }
  return app
})
