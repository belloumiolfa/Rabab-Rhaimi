import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { BannerComponent } from "../../../showcase/components/banner/banner.component";
import { CallToActionComponent } from "../../components/call-to-action/call-to-action.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";

@Component({
  selector: 'app-portfolio1',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, BannerComponent, CallToActionComponent, FooterComponent, HiddenElementsComponent],
  templateUrl: './portfolio1.component.html',
  styleUrl: './portfolio1.component.css'
})
export class Portfolio1Component {

}
