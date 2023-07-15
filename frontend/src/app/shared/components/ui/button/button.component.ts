import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Input,
	Output,
	Renderer2,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonThemes } from '@shared/components/ui/button/models/button.types';

@Component({
	selector: 'ku-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

	@Input() theme: ButtonThemes = 'primary';
	@Output() click = new EventEmitter();
	@ViewChild('buttonRef') buttonRef!: ElementRef;
	renderer = inject(Renderer2);

	constructor(private elementRef: ElementRef) {
	}

	submitEvent($event: any) {
		this.click.emit($event);
	}

	getThemeClass(): ButtonThemes {
		return this.theme;
	}

	setCurrentTheme(theme: ButtonThemes) {
		this.theme = theme;
	}
}
