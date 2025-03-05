import { Component } from '@angular/core';
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { Banner1Component } from "../../components/banner-1/banner-1.component";
import { PopularComponent } from "../../components/popular/popular.component";
import { CallToActionComponent } from "../../../portfolio/components/call-to-action/call-to-action.component";

@Component({
  selector: 'app-blog',
  imports: [HiddenElementsComponent, FooterComponent, CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, Banner1Component, PopularComponent, CallToActionComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
