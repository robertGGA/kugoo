import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from '@app/public/public-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
	declarations: [
    MainPageComponent
  ],
	imports: [
		CommonModule,
		PublicRoutingModule
	]
})
export class PublicModule {
}
