import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomFieldComponent } from './random-field/random-field.component';
import { UserDetailsModule } from './user-details/user-details.module';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'random-field',
    pathMatch: 'full',
  },
  {
    path: 'random-field',
    component: RandomFieldComponent
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)
    
  },

//   {
//     path: 'layout',
//     component: LayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
//       }
//     ]
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
