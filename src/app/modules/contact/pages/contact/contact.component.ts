import { Component } from '@angular/core';
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { BannerContactComponent } from "../../components/banner-contact/banner-contact.component";
import { MapComponent } from "../../components/map/map.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, HiddenElementsComponent, FrameComponent, CurtainComponent, MenuComponent, ScrollbarComponent, CursorComponent, BannerContactComponent, MapComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
