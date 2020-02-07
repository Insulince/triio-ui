import { NgModule } from "@angular/core";

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
