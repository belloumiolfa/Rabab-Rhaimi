import { Component } from '@angular/core';
import { FooterComponent } from "../../../showcase/components/footer/footer.component";
import { HiddenElementsComponent } from "../../../showcase/components/hidden-elements/hidden-elements.component";
import { FrameComponent } from "../../../showcase/components/frame/frame.component";
import { CurtainComponent } from "../../../showcase/components/curtain/curtain.component";
import { MenuComponent } from "../../../showcase/components/menu/menu.component";
import { ScrollbarComponent } from "../../../showcase/components/scrollbar/scrollbar.component";
import { PreloaderComponent } from "../../../showcase/components/preloader/preloader.component";
import { CursorComponent } from "../../../showcase/components/cursor/cursor.component";
import { BannerTeamComponent } from "../../components/banner-team/banner-team.component";
import { TeamComponent } from "../../../showcase/components/team/team.component";
import { CallToActionTeamComponent } from "../../components/call-to-action-team/call-to-action-team.component";

@Component({
  selector: 'app-teams',
  imports: [FooterComponent, HiddenElementsComponent, FrameComponent, CurtainComponent, MenuComponent, ScrollbarComponent, PreloaderComponent, CursorComponent, BannerTeamComponent, TeamComponent, CallToActionTeamComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

}
