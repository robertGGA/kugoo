import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/components/ui/icon/icon.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component';

@Component({
	selector: 'ku-preview-card',
	standalone: true,
	imports: [CommonModule, IconComponent, ButtonComponent],
	templateUrl: './preview-card.component.html',
	styleUrls: ['./preview-card.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCardComponent {

}
