import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule, MatInputModule, MatListModule, MatCardModule } from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule, 
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule, 
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
