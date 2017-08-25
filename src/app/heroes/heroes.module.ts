import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './heroes.service';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroListComponent],
  exports: [HeroListComponent],
  providers: [HeroesService]
})
export class HeroesModule { }
