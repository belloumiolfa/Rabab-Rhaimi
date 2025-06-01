import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { Banner1Component } from "../../../blog/components/banner-1/banner-1.component";
import { CallToActionComponent } from "../../../blog/components/call-to-action/call-to-action.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { P1Component } from "../../components/p1/p1.component";
import { CallToActionP1Component } from "../../components/call-to-action-p1/call-to-action-p1.component";

@Component({
  selector: 'app-project-1',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, Banner1Component, FooterComponent, HiddenElementsComponent, P1Component, CallToActionP1Component],
  templateUrl: './project-1.component.html',
  styleUrl: './project-1.component.css'
})
export class Project1Component {

}