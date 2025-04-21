import { Component } from '@angular/core';
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { BannerComponent } from "../../../services/components/banner/banner.component";
import { CallToAction1Component } from "../../components/call-to-action1/call-to-action1.component";
import { ServiceeComponent } from "../../components/servicee/servicee.component";

@Component({
  selector: 'app-service1',
  imports: [FrameComponent, CurtainComponent, MenuComponent, ScrollbarComponent, CursorComponent, FooterComponent, HiddenElementsComponent, BannerComponent, CallToAction1Component, ServiceeComponent],
  templateUrl: './service1.component.html',
  styleUrl: './service1.component.css'
})
export class Service1Component {

}
