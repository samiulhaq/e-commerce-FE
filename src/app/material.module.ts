import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatExpansionModule,
          MatIconModule, MatGridListModule, MatInputModule, MatListModule, MatCardModule, MatSnackBarModule } from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSnackBarModule 
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule { }
