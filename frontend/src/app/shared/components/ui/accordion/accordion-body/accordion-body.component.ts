import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDirective } from '@shared/directives/accordion.directive';

@Component({
	selector: 'ku-accordion-body',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './accordion-body.component.html',
	styleUrls: ['./accordion-body.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionBodyComponent {
	constructor(public accordion: AccordionDirective) {
	}
}
