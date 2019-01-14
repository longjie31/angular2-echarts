import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroListComponent} from './hero-list/hero-list.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: '**',
    redirectTo: 'crisis-center',
    pathMatch: 'full'// 默认为前缀匹配 "prefix"; "full" 为完全匹配
  },
  {
    path: '', // 默认路径，当项目打开时重定向到heroes组件
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
