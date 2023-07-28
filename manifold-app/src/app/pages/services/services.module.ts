import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageGenerationComponent } from './components/image-generation/image-generation.component';
import { MusicGenerationComponent } from './components/music-generation/music-generation.component';
import { VideoGenerationComponent } from './components/video-generation/video-generation.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    ImageGenerationComponent,
    VideoGenerationComponent,
    MusicGenerationComponent,
  ],
  imports: [CommonModule, ServicesRoutingModule],
})
export class ServicesModule {}
