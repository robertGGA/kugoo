import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@shared/components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
