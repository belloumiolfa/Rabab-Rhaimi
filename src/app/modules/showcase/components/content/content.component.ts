import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { TeamComponent } from "../team/team.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { PartnersComponent } from "../partners/partners.component";
import { BlogComponent } from "../blog/blog.component";
import { FooterComponent } from "../footer/footer.component";
import { HiddenElementsComponent } from "../hidden-elements/hidden-elements.component";
import { AssoicationComponent } from "../assoication/assoication.component";

@Component({
  selector: 'app-content',
  imports: [BannerComponent, AboutComponent, ServicesComponent, ReviewsComponent, PartnersComponent, BlogComponent, FooterComponent, HiddenElementsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
