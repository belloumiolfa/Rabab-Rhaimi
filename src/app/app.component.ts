import { Component ,AfterViewInit,Renderer2, inject  } from '@angular/core';
import { CursorComponent } from "./modules/showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "./modules/showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "./modules/showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "./modules/showcase/components/menu/menu.component";
import { CurtainComponent } from "./modules/showcase/components/curtain/curtain.component";
import { FrameComponent } from "./modules/showcase/components/frame/frame.component";
 import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwupService } from './swup.service';
import { Router } from '@angular/router';
import Swup from 'swup';
import { ContentComponent } from "./modules/showcase/components/content/content.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, RouterModule, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rabeb';
  constructor(private swupService: SwupService) {}
  ngOnInit() {
    this.swupService.initSwup();
  }
  ngAfterViewInit() {
    const swup = new Swup();
  }
}
