import { Component } from '@angular/core';
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { Banner2Component } from "../../components/banner-2/banner-2.component";
import { Blog2Component } from "../../components/blog2/blog2.component";
import { CallToAction2Component } from "../../components/call-to-action2/call-to-action2.component";

@Component({
  selector: 'app-blog-inner',
  imports: [CursorComponent, PreloaderComponent, ScrollbarComponent, MenuComponent, CurtainComponent, FrameComponent, HiddenElementsComponent, FooterComponent, Banner2Component, Blog2Component, CallToAction2Component],
  templateUrl: './blog-inner.component.html',
  styleUrl: './blog-inner.component.css'
})
export class BlogInnerComponent {

}
