import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDirective } from '@shared/directives/accordion.directive';

@Component({
	selector: 'ku-accordion',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: AccordionDirective,
			useExisting: AccordionComponent,
		},
	],
})
export class AccordionComponent extends AccordionDirective {

}
