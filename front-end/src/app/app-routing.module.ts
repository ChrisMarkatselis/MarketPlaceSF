import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SymbolTableComponent } from './components/symbol-table/symbol-table.component';

const routes: Routes = [
  { path: 'symbols', component: SymbolTableComponent },
  { path: '', redirectTo: 'symbols', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
