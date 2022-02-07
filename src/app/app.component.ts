import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidenav = false;
  openSidenav(){
    this.showSidenav = true;
  }

  closeSidenav(close: boolean){
    this.showSidenav = !close;
  }
}
