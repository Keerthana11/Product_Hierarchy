import { Component, OnInit } from '@angular/core';
import { NotebookService } from '../notebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spectre',
  templateUrl: './spectre.component.html',
  styleUrls: ['./spectre.component.css'],
})
export class SpectreComponent implements OnInit {
  data: any;
  errorMessage: any;
  spectre: any;
  displayModel: boolean = false;

  constructor(private service: NotebookService, private route: Router) {}

  ngOnInit() {
    this.service.getSpectre().subscribe(
      (spectre) => {
        this.data = spectre;
        this.spectre = this.data.subcategories;
        console.log('this.spectre inside spectre', this.spectre);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  onClick() {
    console.log('Button in spectre clicked!');
    this.displayModel = true;
    this.route.navigate(['./spectremodel']);
  }
}
