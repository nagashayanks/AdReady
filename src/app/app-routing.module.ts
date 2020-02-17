import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import(`./module/member/member.module`).then(m => m.MemberModule)
    },
    {
      path: 'login',
      loadChildren: () => import(`./module/member/member.module`).then(m => m.MemberModule)
    },
    {
<<<<<<< HEAD
      path: 'plans',
      loadChildren: () => import(`./module/plans/plans.module`).then(m => m.PlansModule)
=======
      path: 'available-slots',
      loadChildren: () => import(`./module/available-slots/available-slots.module`).then(m => m.AvailableSlotsModule)
>>>>>>> 20295e62a067b02a7e9de6965d7d9e3e82c9a56a
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
