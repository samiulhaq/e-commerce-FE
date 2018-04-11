import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatExpansionModule, MatAutocompleteModule, MatSelectModule,
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
    MatSnackBarModule,
    MatAutocompleteModule,
    MatSelectModule
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
    MatSnackBarModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class AppMaterialModule { }
