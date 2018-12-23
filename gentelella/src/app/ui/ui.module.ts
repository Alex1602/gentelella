import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [LayoutComponent, NavComponent, TopNavComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
