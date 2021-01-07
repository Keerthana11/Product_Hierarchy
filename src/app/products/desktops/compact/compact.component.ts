import { Component, OnInit } from '@angular/core';
import { DesktopService } from '../desktop.service';
import { DesktopsComponent } from '../desktops.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
  styleUrls: ['./compact.component.css'],
})
export class CompactComponent implements OnInit {
  errorMessage: any;
  desktops: any;
  data: any;
  detailsClicked: boolean = false;

  constructor(private service: DesktopService, private route: Router) {}

  ngOnInit() {
    this.service.getDesktops().subscribe(
      (desktops) => {
        this.data = desktops;
        this.desktops = this.data.subcategories;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  onClick() {
    console.log('button clicked!');
    this.detailsClicked = true;
    this.route.navigate(['./elite']);
  }
}
