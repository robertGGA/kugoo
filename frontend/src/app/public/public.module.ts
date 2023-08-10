import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from '@app/public/public-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EmailDialogComponent } from './components/modals/email-dialog/email-dialog.component';
import {PreviewCardComponent} from "@shared/components/ui/preview-card/preview-card.component";
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import {AccordionComponent} from "@shared/components/ui/accordion/accordion.component";
import { AccordionHeaderComponent } from '@shared/components/ui/accordion/accordion-header/accordion-header.component';
import { AccordionBodyComponent } from '@shared/components/ui/accordion/accordion-body/accordion-body.component';
import { IconComponent } from '@shared/components/ui/icon/icon.component';


@NgModule({
	declarations: [
    MainPageComponent,
    EmailDialogComponent
  ],
	imports: [
		CommonModule,
		PublicRoutingModule,
		PreviewCardComponent,
		ButtonComponent,
		AccordionComponent,
		AccordionHeaderComponent,
		AccordionBodyComponent,
		IconComponent
	]
})
export class PublicModule {
}
