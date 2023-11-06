import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "@app/public/pages/main-page/main-page.component";
import { NotFoundPageComponent } from "@shared/components/pages/not-found-page/not-found-page.component";
import { ScooterPageComponent } from "@app/public/pages/scooter-page/scooter-page.component";
import { BreadCrumbsComponent } from "@app/public/components/bread-crumbs/bread-crumbs.component";

const routes: Routes = [

	{
		path: "",
		component: MainPageComponent,
	},
	{
		component: BreadCrumbsComponent,
		path: "",
		children: [
			{
				path: "catalog",
				children: [
					{
						path: "scooter/:id",
						component: ScooterPageComponent
					}
				]
			},
		]
	},
	{
		path: "**",
		pathMatch: "full",
		component: NotFoundPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule {
}
