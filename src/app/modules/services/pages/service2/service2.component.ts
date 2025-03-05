import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { Banner2Component } from "../../../portfolio/components/banner2/banner2.component";
import { Service22Component } from "../../components/service22/service22.component";
import { PriceComponent } from "../../components/price/price.component";
import { OtherServiceComponent } from "../../components/other-service/other-service.component";

@Component({
  selector: 'app-service2',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, HiddenElementsComponent, FooterComponent, Banner2Component, Service22Component, PriceComponent, OtherServiceComponent],
  templateUrl: './service2.component.html',
  styleUrl: './service2.component.css'
})
export class Service2Component {

}
