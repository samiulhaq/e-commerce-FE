import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule, MatInputModule, MatListModule } from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule, 
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatButtonModule, 
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
