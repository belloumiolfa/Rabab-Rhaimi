import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { CallToActionComponent } from "../../components/call-to-action/call-to-action.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { Banner2Component } from "../../components/banner2/banner2.component";

@Component({
  selector: 'app-portfolio2',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, CallToActionComponent, FooterComponent, HiddenElementsComponent, Banner2Component],
  templateUrl: './portfolio2.component.html',
  styleUrl: './portfolio2.component.css'
})
export class Portfolio2Component {

}
