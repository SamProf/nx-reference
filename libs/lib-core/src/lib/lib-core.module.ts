import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainServiceService} from "./main-service.service";

@NgModule({
  imports: [CommonModule],
  providers: [MainServiceService]
})
export class LibCoreModule {}
