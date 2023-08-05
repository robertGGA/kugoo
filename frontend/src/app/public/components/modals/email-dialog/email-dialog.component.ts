import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
	selector: 'ku-email-dialog',
	templateUrl: './email-dialog.component.html',
	styleUrls: ['./email-dialog.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailDialogComponent {
	constructor(@Inject(DIALOG_DATA) public data: { email: string }) {
	}

	get email(): string {
		return this.data.email;
	}
}
