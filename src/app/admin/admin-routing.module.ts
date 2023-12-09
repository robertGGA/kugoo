import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminMainPageComponent } from "@app/admin/pages/admin-main-page/admin-main-page.component";
import { LoginPageComponent } from "@app/admin/pages/login-page/login-page.component";
import { AdminLayoutComponent } from "@shared/components/layouts/admin-layout/admin-layout.component";

const routes: Routes = [
	{
		path: "login",
		component: LoginPageComponent,
	},
	{
		path: "",
		component: AdminLayoutComponent,
		children: [
			{
				path: "",
				component: AdminMainPageComponent,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
}
