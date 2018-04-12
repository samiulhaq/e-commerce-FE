import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatExpansionModule, MatAutocompleteModule,
  MatSelectModule, MatIconModule, MatTableModule, MatGridListModule, MatInputModule, MatListModule, MatCardModule,
  MatSnackBarModule, MatStepperModule }
          from '@angular/material';



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
    MatSelectModule,
    MatTableModule,
    MatStepperModule
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
    MatSelectModule,
    MatTableModule,
    MatStepperModule
  ]
})
export class AppMaterialModule { }
