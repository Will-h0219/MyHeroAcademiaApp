import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardText } from './pipes/card-text.pipe';
import { ApiErrorComponent } from './components/api-error/api-error.component';



@NgModule({
  declarations: [
    ApiErrorComponent,
    SpinnerComponent,

    CardText
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    RouterModule,

    ApiErrorComponent,
    SpinnerComponent,

    CardText
  ]
})
export class SharedModule { }
