import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SymbolTableComponent } from './components/symbol-table/symbol-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'symbols',
        component: SymbolTableComponent
      }
      // ,
      // {
      //   path: 'logout',
      //   component: LogoutComponent
      // }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
