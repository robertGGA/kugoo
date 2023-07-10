import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ku-dropdown',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

}
