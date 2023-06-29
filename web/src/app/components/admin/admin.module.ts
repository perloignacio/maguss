import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
@NgModule({
    declarations: [
    MainComponent
  ],
    exports:[
      
    ],
    imports: [
      CommonModule,
      RouterModule,
      AdminRoutingModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      
    ],providers:[
      DatePipe
    ]
  })
  export class AdminModule { }