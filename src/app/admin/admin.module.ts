import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginPageComponent } from "@app/admin/pages/login-page/login-page.component";
import { ButtonComponent } from "@shared/components/ui/button/button.component";
import { IconComponent } from "@shared/components/ui/icon/icon.component";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminMainPageComponent } from "./pages/admin-main-page/admin-main-page.component";

@NgModule({
	declarations: [
		LoginPageComponent,
		AdminMainPageComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		IconComponent,
		ButtonComponent
	]
})
export class AdminModule {
}
