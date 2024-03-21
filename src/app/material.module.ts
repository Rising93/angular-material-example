import { NgModule } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MAT_DATE_LOCALE, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
    imports: [
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule
    ],
    exports: [
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule
    ],
    providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
      {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
    ]
})
export class MaterialModule { }
