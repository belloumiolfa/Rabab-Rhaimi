import { Component } from '@angular/core';
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { Bannerp5Component } from "../../components/bannerp5/bannerp5.component";
import { ProjectP5Component } from "../../components/project-p5/project-p5.component";
import { CallToActionP5Component } from "../../components/call-to-action-p5/call-to-action-p5.component";

@Component({
  selector: 'app-project-5',
  imports: [FooterComponent, HiddenElementsComponent, CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, Bannerp5Component, ProjectP5Component, CallToActionP5Component],
  templateUrl: './project-5.component.html',
  styleUrl: './project-5.component.css'
})
export class Project5Component {

}
