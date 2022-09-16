import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, EditorComponent],
})
export class LibComponentsModule {}
