import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';


@NgModule({
	declarations: [

  
    AdminMainPageComponent
  ],
	imports: [
		CommonModule,
		AdminRoutingModule
	]
})
export class AdminModule {
}
