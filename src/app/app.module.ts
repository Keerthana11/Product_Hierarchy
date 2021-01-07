import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { DesktopsComponent } from './products/desktops/desktops.component';
import { NotebookComponent } from './products/laptops/notebook/notebook.component';
import { SpectreComponent } from './products/laptops/notebook/spectre/spectre.component';
import { CompactComponent } from './products/desktops/compact/compact.component';
import { EliteComponent } from './products/desktops/compact/elite/elite.component';
import { SaveformComponent } from './saveform/saveform.component';
import { SpectremodelComponent } from './products/laptops/notebook/spectre/spectremodel/spectremodel.component';
import { ElitemodelComponent } from './products/desktops/compact/elite/elitemodel/elitemodel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ProductsComponent,
    LaptopsComponent,
    DesktopsComponent,
    NotebookComponent,
    SpectreComponent,
    CompactComponent,
    EliteComponent,
    SaveformComponent,
    SpectremodelComponent,
    ElitemodelComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
