export default [
  {
    path: '/',
    component: '@/index',
    routes: [
      { exact: true, path: '/login', component: '@/pages/login' },
      {
        path: '/',
        component: '@/layouts/index',
        routers: [
          // { path: '/leaderboard', component: '@/pages/LeaderBoard' }
        ],
      },
    ],
  },
];
