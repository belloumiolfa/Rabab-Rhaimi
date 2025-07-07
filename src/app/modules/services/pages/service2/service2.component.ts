import { Component } from '@angular/core';
import { HiddenElementsComponent } from '../../../showcase/components/hidden-elements/hidden-elements.component';
import { FooterComponent } from '../../../showcase/components/footer/footer.component';
import { Service22Component } from '../../components/service22/service22.component';
import { OtherServiceComponent } from '../../components/other-service/other-service.component';
import { Banner2Component } from '../../components/bannerS2/banner2.component';
@Component({
  selector: 'app-service2',
  imports: [
    HiddenElementsComponent,
    FooterComponent,
    Service22Component,
    OtherServiceComponent,
    Banner2Component,
  ],
  templateUrl: './service2.component.html',
  styleUrl: './service2.component.css',
})
export class Service2Component {}
