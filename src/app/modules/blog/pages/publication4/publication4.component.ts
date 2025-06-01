import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { SimilarComponent } from "../../components/similar/similar.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { Pub4Component } from "../../components/pub4/pub4.component";
import { BannerPub4Component } from "../../components/banner-pub4/banner-pub4.component";
@Component({
  selector: 'app-publication4',
  imports: [CursorComponent, ScrollbarComponent, MenuComponent, CurtainComponent, SimilarComponent, FooterComponent, HiddenElementsComponent, Pub4Component, BannerPub4Component],
  templateUrl: './publication4.component.html',
  styleUrl: './publication4.component.css'
})
export class Publication4Component {

}
