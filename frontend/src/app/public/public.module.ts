import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from '@app/public/public-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EmailDialogComponent } from './components/modals/email-dialog/email-dialog.component';
import {PreviewCardComponent} from "@shared/components/ui/preview-card/preview-card.component";
import { ButtonComponent } from '@shared/components/ui/button/button.component';


@NgModule({
	declarations: [
    MainPageComponent,
    EmailDialogComponent
  ],
	imports: [
		CommonModule,
		PublicRoutingModule,
		PreviewCardComponent,
		ButtonComponent
	]
})
export class PublicModule {
}
