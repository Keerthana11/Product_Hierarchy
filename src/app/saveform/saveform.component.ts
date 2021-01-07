import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saveform',
  templateUrl: './saveform.component.html',
  styleUrls: ['./saveform.component.css'],
})
export class SaveformComponent implements OnInit {
  spectre: any;
  constructor(private route: Router) {}

  ngOnInit() {}
  onSave(form: any) {
    alert('You have succesfully purchased the Product!');
    form.reset();
  }
}
