import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-basic',
  templateUrl: './basic.html'
})
export class DemoDatepickerBasicComponent {
  dates = [
    new Date('2019-02-06')
  ];
}
