import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  link1 = ['/', { outlets: {
    'outlet-a': ['page-red'], // en função do mapToAllOutlets bata apenas alterar a rota
    'outlet-b': ['page-green'],// altere page-red que a mágica acontece
    'outlet-c': ['page-blue']
  }}];
  link2 = ['/', { outlets: {
    'outlet-a': ['page-red'],
    'outlet-b': ['page-blue'],
    'outlet-c': ['page-green']
  }}];







}
