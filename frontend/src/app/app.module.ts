import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { PreviewCardComponent } from '@shared/components/ui/preview-card/preview-card.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		PreviewCardComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
