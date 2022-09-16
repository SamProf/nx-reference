import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1MainComponent } from './feature1-main/feature1-main.component';
import {LibComponentsModule} from "@nx-references/lib-components";
import {LibCoreModule} from "@nx-references/lib-core";

@NgModule({
  imports: [CommonModule, LibComponentsModule, LibCoreModule],
  declarations: [Feature1MainComponent],
  exports: [
    Feature1MainComponent
  ]
})
export class LibFeature1Module {}
