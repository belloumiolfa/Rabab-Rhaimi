import { Component } from '@angular/core';
import { CursorComponent } from '../../../showcase/components/cursor/cursor.component';
import { ScrollbarComponent } from '../../../showcase/components/scrollbar/scrollbar.component';
import { MenuComponent } from '../../../showcase/components/menu/menu.component';
import { CurtainComponent } from '../../../showcase/components/curtain/curtain.component';
import { FrameComponent } from '../../../showcase/components/frame/frame.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';
import { FooterComponent } from '../../../showcase/components/footer/footer.component';
import { HiddenElementsComponent } from '../../../showcase/components/hidden-elements/hidden-elements.component';
import { Port1Component } from '../../components/port1/port1.component';
import { Banner1Component } from '../../../blog/components/banner-1/banner-1.component';
import { Banner2Component } from '../../../blog/components/banner-2/banner-2.component';
import { Banner3Component } from '../../../blog/components/banner-3/banner-3.component';
import { CallToActionP4Component } from "../../../projects/components/call-to-action-p4/call-to-action-p4.component";

@Component({
  selector: 'app-portfolio1',
  imports: [
    CursorComponent,
    ScrollbarComponent,
    MenuComponent,
    CurtainComponent,
    CallToActionComponent,
    FooterComponent,
    HiddenElementsComponent,
    Port1Component,
    Banner3Component,
],
  templateUrl: './portfolio1.component.html',
  styleUrl: './portfolio1.component.css',
})
export class Portfolio1Component {}
