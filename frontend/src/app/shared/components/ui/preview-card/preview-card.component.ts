import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ku-preview-card',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './preview-card.component.html',
	styleUrls: ['./preview-card.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCardComponent {

}
