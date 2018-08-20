import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
