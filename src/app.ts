//#region @notForNpm
import notify from './lib';
//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-firedev-powertoast',
  template: 'hello from firedev-powertoast',
  styles: [` body { margin: 0px !important; } `],
})
export class FiredevPowertoastComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [],
  exports: [FiredevPowertoastComponent],
  declarations: [FiredevPowertoastComponent],
  providers: [],
})
export class FiredevPowertoastModule { }
//#endregion


async function start(port: number) {
  console.log('hello world');
  notify({
    title: 'hellow',
    message: 'world',
    icon: '/c/Users/darek/projects/test-projects/firedev-powertoast/logo.png'
  })
}

export default start;



//#endregion
