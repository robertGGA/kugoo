import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layouts/layout/layout.component';

const routes: Routes = [
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
