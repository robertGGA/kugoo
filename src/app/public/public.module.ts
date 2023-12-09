import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "@app/public/public-routing.module";
import { AccordionComponent } from "@shared/components/ui/accordion/accordion.component";
import { AccordionBodyComponent } from "@shared/components/ui/accordion/accordion-body/accordion-body.component";
import { AccordionHeaderComponent } from "@shared/components/ui/accordion/accordion-header/accordion-header.component";
import { ButtonComponent } from "@shared/components/ui/button/button.component";
import { ChipComponent } from "@shared/components/ui/chip/chip.component";
import { IconComponent } from "@shared/components/ui/icon/icon.component";
import { PreviewCardComponent } from "@shared/components/ui/preview-card/preview-card.component";
import { BreadCrumbUrlPipe } from "@shared/pipes/bread-crumb-url.pipe";

import { BreadCrumbsComponent } from "./components/bread-crumbs/bread-crumbs.component";
import { ManagerBusinessCardComponent } from "./components/manager-business-card/manager-business-card.component";
import { EmailDialogComponent } from "./components/modals/email-dialog/email-dialog.component";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { CategoryCardComponent } from "./pages/main-page/components/category-card/category-card.component";
import { ServiceCardComponent } from "./pages/main-page/components/service-card/service-card.component";
import { SlideComponent } from "./pages/main-page/components/slide/slide.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { ScooterPageComponent } from "./pages/scooter-page/scooter-page.component";

@NgModule({
	declarations: [
		MainPageComponent,
		EmailDialogComponent,
		ScooterPageComponent,
		BreadCrumbsComponent,
		CatalogPageComponent,
		ServiceCardComponent,
		SlideComponent,
		ManagerBusinessCardComponent,
		CategoryCardComponent,

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
		BreadCrumbUrlPipe,
		ChipComponent
	]
})
export class PublicModule {
}
