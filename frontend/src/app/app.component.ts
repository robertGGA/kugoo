import { Component, OnInit } from '@angular/core';
import { TestService } from '@core/services/test.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
	selector: 'gu-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'frontend';
}
