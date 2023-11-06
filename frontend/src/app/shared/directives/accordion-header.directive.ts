import { Directive, HostListener, inject } from "@angular/core";
import { AccordionDirective } from "@shared/directives/accordion.directive";

@Directive({
	selector: "[kuAccordionHeader]",
	exportAs: "kuAccordionHeader",
	standalone: true,
})
export class AccordionHeaderDirective {
	private accordion = inject(AccordionDirective);

	@HostListener("click") toggle(): void {
		this.accordion.toggle();
	}

}
