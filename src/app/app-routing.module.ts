import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './ccc/ccc.component';


const routes: Routes = mapToAllOutlets([
  {
    path: 'page-red',
    component: AaaComponent,
  },
  {
    path: 'page-green',
    component: BbbComponent
  },
  {
    path: 'page-blue',
    component: CccComponent
  }
])

function mapToAllOutlets(routes: Routes): Routes {
  const outlets = ['outlet-a', 'outlet-b', 'outlet-c'];
  const result = [];
  for (const route of routes) {
    for (const outlet of outlets) {
      result.push({
        ...route,
        outlet
      })
    }
  }
  return result;
}

// const routes: Routes = [
//   {
//     path: 'page-red',
//     component: AaaComponent,
//     outlet: 'outlet-c'
//   },

//   {
//     path: 'page-red',
//     component: AaaComponent,
//     outlet: 'outlet-a'
//   },

//   {
//     path: 'page-green',
//     component: BbbComponent,
//     outlet: 'outlet-b'
//   },
//   {
//     path: 'page-green',
//     component: BbbComponent,
//     outlet: 'outlet-c'
//   },

//   {
//     path: 'page-blue',
//     component: CccComponent,
//     outlet: 'outlet-b'
//   },
//   {
//     path: 'page-blue',
//     component: CccComponent,
//     outlet: 'outlet-c'
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
