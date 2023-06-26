import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }
  link1: any = ['/', {
    outlets: {
      'outlet-a': ['page-red'], // en função do mapToAllOutlets bata apenas alterar a rota
      'outlet-b': ['page-green'],// altere page-red que a mágica acontece
      'outlet-c': ['page-blue']
    }
  }];
  link2 = ['/', {
    outlets: {
      'outlet-a': ['page-red'], 'outlet-b': ['page-blue'], 'outlet-c': ['page-green']
    }
  },];



  home() {
    // this.router.navigate([{ outlets: { 'outlet-c': [ 'page-blue'],  }}]);
    // this.router.navigate(['/',{ outlets: { 'outlet-c': ['page-blue'] } }], { skipLocationChange: true });
    // this.link1 = ['/', { outlets: { 'outlet-c': ['page-blue']}}];

    // this.router.navigate(['/'])
    // this.router.navigate(['/',{ outlets: { 'outlet-c': ['page-blue'] } }], { skipLocationChange: true });
    // this.router.navigate(['/',{ outlets: { 'outlet-c': ['page-blue'] } }],);
    // setTimeout(()=>{
    //   this.router.navigate(['/',{ outlets: { 'outlet-c': ['page-blue'] } }],);
    // },200)

    // this.router.navigate(['/', { outlets: { 'outlet-c': null } }], );
    this.router.navigate(['/', {
      outlets: {
        'outlet-a': null,
        'outlet-b': null,
        'outlet-c': null
      }
    }], {
      // relativeTo: this.activateRoute.parent
    });
  }



}
