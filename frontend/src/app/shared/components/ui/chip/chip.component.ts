import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef, inject,
	Input,
	Renderer2,
	ViewChild
} from '@angular/core';
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
export class ChipComponent implements AfterViewInit {

	@ViewChild('chip') chip: ElementRef | undefined;

	@Input() set theme(theme: ChipThemes) {
		this.currentTheme = theme;
	}
	@Input() options?: ChipOptions | null

	protected currentTheme: ChipThemes = 'red';

	renderer = inject(Renderer2)

	ngAfterViewInit(): void {
		if (this.options && this.chip) {
			if (this.options.isUpperCase) {
				console.log(this.options.isUpperCase)
				this.renderer.setStyle(this.chip?.nativeElement, "text-transform", 'uppercase')
			}
		}
	}

}
