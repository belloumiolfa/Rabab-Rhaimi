import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { Bannerp3Component } from "../../components/bannerp3/bannerp3.component";
import { ProjectP3Component } from "../../components/project-p3/project-p3.component";
import { CallToActionP3Component } from "../../components/call-to-action-p3/call-to-action-p3.component";

@Component({
  selector: 'app-project-3',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FooterComponent, HiddenElementsComponent, Bannerp3Component, ProjectP3Component, CallToActionP3Component],
  templateUrl: './project-3.component.html',
  styleUrl: './project-3.component.css'
})
export class Project3Component {

}
