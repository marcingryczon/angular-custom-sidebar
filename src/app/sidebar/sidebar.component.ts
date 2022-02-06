import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  tabs: {id: string, icon: string, label: string}[] = [
    {id: 'account', icon: 'account_circle', label: 'Account'},
    {id: 'shopping', icon: 'shopping_cart', label: 'Shopping'},
    {id: 'settings', icon: 'settings', label: 'Settings'},
  ];
  selectedTab:string = 'account';
  constructor() {}

  ngOnInit(): void {}

  closeSidenav() {
    this.close.emit(true);
  }

  selectTab(index: number): void {
    this.selectedTab = this.tabs[index].id;
  }
}
