import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { Pub2Component } from "../../components/pub2/pub2.component";
import { SimilarComponent } from "../../components/similar/similar.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { BannerPub2Component } from "../../components/banner-pub2/banner-pub2.component";
import { Similar2Component } from "../../components/similar2/similar2.component";

@Component({
  selector: 'app-publication2',
  imports: [CursorComponent, ScrollbarComponent, MenuComponent, CurtainComponent, Pub2Component, FooterComponent, HiddenElementsComponent, BannerPub2Component, Similar2Component],
  templateUrl: './publication2.component.html',
  styleUrl: './publication2.component.css'
})
export class Publication2Component {

}
