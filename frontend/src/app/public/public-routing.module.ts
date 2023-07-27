import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layouts/layout/layout.component';
import { MainPageComponent } from '@app/public/pages/main-page/main-page.component';
import { NotFoundPageComponent } from '@shared/components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: MainPageComponent,
			},
			{
				path: '**',
				pathMatch: 'full',
				component: NotFoundPageComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule {
}
