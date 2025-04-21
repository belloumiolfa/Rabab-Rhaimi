import { Component } from '@angular/core';
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { Bannerp4Component } from "../../components/bannerp4/bannerp4.component";
import { ProjectP4Component } from "../../components/project-p4/project-p4.component";
import { CallToActionP4Component } from "../../components/call-to-action-p4/call-to-action-p4.component";

@Component({
  selector: 'app-project-4',
  imports: [FooterComponent, HiddenElementsComponent, CursorComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, Bannerp4Component, ProjectP4Component, CallToActionP4Component],
  templateUrl: './project-4.component.html',
  styleUrl: './project-4.component.css'
})
export class Project4Component {

}
