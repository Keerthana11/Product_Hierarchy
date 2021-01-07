import { Component, OnInit } from '@angular/core';
import { SmodelService } from './smodel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spectremodel',
  templateUrl: './spectremodel.component.html',
  styleUrls: ['./spectremodel.component.css'],
})
export class SpectremodelComponent implements OnInit {
  data: any;
  smodel: any;
  errorMessage: any;
  save: boolean = false;
  id = 'spectre';

  constructor(private service: SmodelService, private route: Router) {}

  ngOnInit() {
    this.service.getSpectreModel().subscribe(
      (smodel) => {
        this.data = smodel;
        this.smodel = this.data.subcategories;
        console.log('this.smodel inside smodel', this.smodel);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  onSave() {
    this.save = true;
    this.route.navigate(['./saveform']);
  }
}
