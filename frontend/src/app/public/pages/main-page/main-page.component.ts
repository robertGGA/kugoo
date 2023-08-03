import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';


@Component({
	selector: 'ku-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

	constructor(private dialogService: Dialog) {
	}

}
