import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{ path: 'placeAppointment', loadChildren: () => import('./place-appointment/place-appointment.module').then(m => m.PlaceAppointmentModule) },
{ path: 'viewAppointment', loadChildren: () => import('./view-appointment/view-appointment.module').then(m => m.ViewAppointmentModule) },
{ path: '**', loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
