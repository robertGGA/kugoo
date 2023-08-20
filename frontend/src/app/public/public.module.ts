import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from '@app/public/public-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EmailDialogComponent } from './components/modals/email-dialog/email-dialog.component';
import { PreviewCardComponent } from '@shared/components/ui/preview-card/preview-card.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { AccordionComponent } from '@shared/components/ui/accordion/accordion.component';
import { AccordionHeaderComponent } from '@shared/components/ui/accordion/accordion-header/accordion-header.component';
import { AccordionBodyComponent } from '@shared/components/ui/accordion/accordion-body/accordion-body.component';
import { IconComponent } from '@shared/components/ui/icon/icon.component';
import { ScooterPageComponent } from './pages/scooter-page/scooter-page.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { BreadCrumbUrlPipe } from '@shared/pipes/bread-crumb-url.pipe';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';


@NgModule({
	declarations: [
		MainPageComponent,
		EmailDialogComponent,
		ScooterPageComponent,
		BreadCrumbsComponent,
		CatalogPageComponent,

	],
	imports: [
		CommonModule,
		PublicRoutingModule,
		PreviewCardComponent,
		ButtonComponent,
		AccordionComponent,
		AccordionHeaderComponent,
		AccordionBodyComponent,
		IconComponent,
		BreadCrumbUrlPipe
	]
})
export class PublicModule {
}
