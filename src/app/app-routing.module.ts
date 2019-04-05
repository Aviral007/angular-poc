import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PublicModule} from './public/public.module';
// import { PrivateModule} from './private/private.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './public/public.module#PublicModule'
  },
  {
    path: 'privatemodule',
    loadChildren: './private/private.module#PrivateModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
