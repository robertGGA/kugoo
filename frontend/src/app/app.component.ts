import { Component, inject, OnInit } from '@angular/core';
import { TestService } from '@core/services/test.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
	selector: 'gu-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'frontend';

	constructor(private testService: TestService) {
	}

	getTest(): Observable<string> {
		return this.testService.testApi().pipe(catchError(err => of(err)));
	}

	ngOnInit(): void {
		this.getTest().subscribe(value => {
			console.log(value);
		})
	}
}
