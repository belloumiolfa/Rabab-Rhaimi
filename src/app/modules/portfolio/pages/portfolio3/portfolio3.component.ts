import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";

@Component({
  selector: 'app-portfolio3',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, FrameComponent, MenuComponent, CurtainComponent, HiddenElementsComponent],
  templateUrl: './portfolio3.component.html',
  styleUrl: './portfolio3.component.css'
})
export class Portfolio3Component {

}
