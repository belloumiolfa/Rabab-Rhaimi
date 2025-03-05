import { Component } from '@angular/core';
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";

@Component({
  selector: 'app-project-6',
  imports: [FooterComponent, HiddenElementsComponent, FrameComponent, CurtainComponent, MenuComponent, ScrollbarComponent, PreloaderComponent, CursorComponent],
  templateUrl: './project-6.component.html',
  styleUrl: './project-6.component.css'
})
export class Project6Component {

}
