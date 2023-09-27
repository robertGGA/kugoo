import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/components/ui/icon/icon.component';

@Component({
	selector: 'ku-dialog-header',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './dialog-header.component.html',
	styleUrls: ['./dialog-header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogHeaderComponent {
	@Output() onCloseHandler = new EventEmitter();
	@Input() showCloseButton: boolean = true;

	public onClose(): void {
		this.onCloseHandler.emit();
	}
}
