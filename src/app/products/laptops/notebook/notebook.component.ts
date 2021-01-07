import { Component, Input, OnInit } from '@angular/core';
import { LaptopsComponent } from '../laptops.component';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
})
export class NotebookComponent implements OnInit {
  laptops: any;
  data: any;
  errorMessage: any;
  detailsClicked: boolean = false;

  constructor(private service: LaptopService, private route: Router) {}

  ngOnInit() {
    this.service.getLaptops().subscribe(
      (laptops) => {
        this.data = laptops;
        this.laptops = this.data.subcategories;
        console.log('this.laptops inside notebook', this.laptops);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  onClick() {
    console.log('button clicked!');
    this.detailsClicked = true;
    this.route.navigate(['./spectre']);
  }
}
