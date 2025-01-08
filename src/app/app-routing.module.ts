import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {'path': '', 'component': HomeComponent},
  {'path': 'about', 'component': AboutComponent},
  {'path': 'users', 'component': UsersComponent},
  {'path': 'users/:id', 'component': UserProfileComponent},
  {'path': '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
