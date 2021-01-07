import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { ProductsComponent } from '../app/products/products.component';
import { DesktopsComponent } from './products/desktops/desktops.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { SpectreComponent } from './products/laptops/notebook/spectre/spectre.component';
import { EliteComponent } from './products/desktops/compact/elite/elite.component';
import { SaveformComponent } from '../app/saveform/saveform.component';
import { NotebookComponent } from './products/laptops/notebook/notebook.component';
import { SpectremodelComponent } from './products/laptops/notebook/spectre/spectremodel/spectremodel.component';
import { ElitemodelComponent } from './products/desktops/compact/elite/elitemodel/elitemodel.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'desktops', component: DesktopsComponent },
  { path: 'spectre', component: SpectreComponent },
  { path: 'elite', component: EliteComponent },
  { path: 'notebook', component: NotebookComponent },
  { path: 'saveform', component: SaveformComponent },
  { path: 'spectremodel', component: SpectremodelComponent },
  { path: 'elitemodel', component: ElitemodelComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
