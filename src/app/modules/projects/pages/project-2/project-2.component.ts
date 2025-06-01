import { Component } from '@angular/core';
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { Bannerp2Component } from "../../components/bannerp2/bannerp2.component";
import { ProjectP2Component } from "../../components/project-p2/project-p2.component";
import { CallToActionP2Component } from "../../components/call-to-action-p2/call-to-action-p2.component";

@Component({
  selector: 'app-project-2',
  imports: [FooterComponent, HiddenElementsComponent, CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, Bannerp2Component, ProjectP2Component, CallToActionP2Component],
  templateUrl: './project-2.component.html',
  styleUrl: './project-2.component.css'
})
export class Project2Component {

}
