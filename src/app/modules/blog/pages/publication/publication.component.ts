import { Component } from '@angular/core';
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { SimilarComponent } from "../../components/similar/similar.component";
import { PubComponent } from "../../components/pub/pub.component";
import { BannerPubComponent } from "../../components/banner-pub/banner-pub.component";
import { Similar2Component } from "../../components/similar2/similar2.component";

@Component({
  selector: 'app-publication',
  imports: [HiddenElementsComponent, FooterComponent, CurtainComponent, MenuComponent, ScrollbarComponent, CursorComponent, PubComponent, BannerPubComponent, Similar2Component],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {

}
