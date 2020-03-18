
import DashView from '../components/Dash.vue'
import DashboardView from '../components/views/Dashboard.vue'
import TablesView from '../components/views/Tables.vue'
// import HelloWorld from '@/components/HelloWorld'


const routes = [
    {
      path: '/',
      name: 'DashboardView',
      component: DashView,
      children:[
        {
          path: 'dashboard',
          alias: '',
          component: DashboardView,
          name: 'dashboard',
          meta : { description: "" }
        },
        {
          path: 'tables',
          alias: '',
          component: TablesView,
          name: 'Tables',
          meta : { description: "" }
        }
      ]
    }
  ]

export default routes

