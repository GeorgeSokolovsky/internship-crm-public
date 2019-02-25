import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { ShortenPipe } from '../pipes/shorten.pipe';

@NgModule({
  declarations: [DefaultImagePipe, ShortenPipe],
  exports: [DefaultImagePipe, ShortenPipe],
  imports: [CommonModule],
})
export class SharedPipesModule {}
