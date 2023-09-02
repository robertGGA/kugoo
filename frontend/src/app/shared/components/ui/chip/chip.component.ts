import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipOptions, ChipThemes } from '@shared/components/ui/chip/chip.types';

@Component({
  selector: 'ku-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
	@Input() theme(theme: ChipThemes): void {
		this.currentTheme = theme;
	}
	@Input() options?: ChipOptions

	protected currentTheme: ChipThemes = 'red';

}
