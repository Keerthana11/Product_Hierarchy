import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { DesktopsComponent } from '../products/desktops/desktops.component';
import { LaptopService } from '../products/laptops/laptop.service';
import { DesktopService } from '../products/desktops/desktop.service';
import { ProductsComponent } from '../products/products.component';
import { NotebookComponent } from './laptops/notebook/notebook.component';
import { SpectreComponent } from './laptops/notebook/spectre/spectre.component';
import { CompactComponent } from './desktops/compact/compact.component';
import { EliteComponent } from './desktops/compact/elite/elite.component';
import { SpectremodelComponent } from './laptops/notebook/spectre/spectremodel/spectremodel.component';
import { ElitemodelComponent } from './desktops/compact/elite/elitemodel/elitemodel.component';

@NgModule({
  declarations: [
    LaptopsComponent,
    DesktopsComponent,
    ProductsComponent,
    NotebookComponent,
    SpectreComponent,
    CompactComponent,
    EliteComponent,
    SpectremodelComponent,
    ElitemodelComponent,
  ],
  imports: [CommonModule],
  providers: [LaptopService, DesktopService],
})
export class ProductsModule {}
