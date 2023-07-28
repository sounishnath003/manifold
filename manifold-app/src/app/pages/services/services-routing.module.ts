import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationalComponent } from './components/conversational/conversational.component';
import { ImageGenerationComponent } from './components/image-generation/image-generation.component';
import { MusicGenerationComponent } from './components/music-generation/music-generation.component';
import { VideoGenerationComponent } from './components/video-generation/video-generation.component';

const routes: Routes = [
  {
    path: 'conversational',
    pathMatch: 'full',
    component: ConversationalComponent,
  },
  {
    path: 'image-generation',
    pathMatch: 'full',
    component: ImageGenerationComponent,
  },
  {
    path: 'video-generation',
    pathMatch: 'full',
    component: VideoGenerationComponent,
  },
  {
    path: 'music-generation',
    pathMatch: 'full',
    component: MusicGenerationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
