import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDialogContainer } from '@angular/cdk/dialog';

@Component({
	selector: 'ku-dialog-container',
	standalone: true,
	imports: [CommonModule, CdkDialogContainer],
	templateUrl: './dialog-container.component.html',
	styleUrls: ['./dialog-container.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogContainerComponent extends CdkDialogContainer {

}
