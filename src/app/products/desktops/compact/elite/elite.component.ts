import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompactService } from '../compact.service';

@Component({
  selector: 'app-elite',
  templateUrl: './elite.component.html',
  styleUrls: ['./elite.component.css'],
})
export class EliteComponent implements OnInit {
  data: any;
  errorMessage: any;
  elite: any;
  displayModel: boolean = false;

  constructor(private service: CompactService, private route: Router) {}

  ngOnInit() {
    this.service.getElite().subscribe(
      (elite) => {
        this.data = elite;
        this.elite = this.data.subcategories;
        console.log('this.elite inside elite', this.elite);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  onClick() {
    this.displayModel = true;
    this.route.navigate(['./elitemodel']);
  }
}
