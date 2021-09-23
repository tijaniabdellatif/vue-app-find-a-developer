import { createRouter,createWebHashHistory } from "vue-router";
import CoachDetail from './pages/coaches/CoachDetail';
import CoachList from './pages/coaches/CoachList';
import CoachRegister from './pages/coaches/CoachRegister';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsReceive from './pages/requests/RequestsReceive';
import NotFound from './pages/NotFound';

const router = createRouter({
 history:createWebHashHistory(),
 routes:[

    {path:'/',redirect:'/coaches'},
     {path:'/coaches',component:CoachList},
     {path:'/coaches/:id',component:CoachDetail,children:[

         {path:'contact',component:ContactCoach}

     ]},

     {path:'/register',component:CoachRegister},
     {path:'/requests',component:RequestsReceive},
     {path:'/:notFound(.*)',component:NotFound}


 ]

});

export default router;
