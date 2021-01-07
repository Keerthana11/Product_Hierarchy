import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmodelService } from '../elitemodel/emodel.service';

@Component({
  selector: 'app-elitemodel',
  templateUrl: './elitemodel.component.html',
  styleUrls: ['./elitemodel.component.css'],
})
export class ElitemodelComponent implements OnInit {
  data: any;
  emodel: any;
  errorMessage: any;
  save: boolean = false;
  id = 'elite';

  constructor(private service: EmodelService, private route: Router) {}

  ngOnInit() {
    this.service.getEliteModel().subscribe(
      (emodel) => {
        this.data = emodel;
        this.emodel = this.data.subcategories;
        console.log('this.emodel inside smodel', this.emodel);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  onSave() {
    this.save = true;
    this.route.navigate(['./saveform']);
  }
}
