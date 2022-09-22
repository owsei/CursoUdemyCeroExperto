import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbAccordionModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
