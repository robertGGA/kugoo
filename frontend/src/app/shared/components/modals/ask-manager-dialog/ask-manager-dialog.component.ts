import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from '@shared/components/modals/constructor/dialog-container/dialog-container.component';
import { DialogHeaderComponent } from '@shared/components/modals/constructor/dialog-header/dialog-header.component';
import { DialogRef } from '@core/data/dialog-ref';
import { DialogBodyComponent } from '@shared/components/modals/constructor/dialog-body/dialog-body.component';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'ku-ask-manager-dialog',
	standalone: true,
	imports: [CommonModule, DialogContainerComponent, DialogHeaderComponent, DialogBodyComponent, InputComponent, ReactiveFormsModule],
	templateUrl: './ask-manager-dialog.component.html',
	styleUrls: ['./ask-manager-dialog.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AskManagerDialogComponent {
	phoneControl = new FormControl<string | null>(null);

	constructor(private dialogRef: DialogRef) {
		this.phoneControl.valueChanges.subscribe(value => {
			console.log(value);
		})
	}

	closeModal(): void {
		this.dialogRef.close();
	}
}
