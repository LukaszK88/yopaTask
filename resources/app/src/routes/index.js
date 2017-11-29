import DefaultLayout from '../Layout/DefaultLayout';
import Login from '../Pages/Login';
import Overview from '../Pages/Overview';
import Note from '../Pages/Note';

const routes = [
  {
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
      {
        path: '/overview',
        exact: true,
        component: Overview,
      },
      {
        path: '/note/:id',
        component: Note,
      },
    ],
  },
];

export default routes;