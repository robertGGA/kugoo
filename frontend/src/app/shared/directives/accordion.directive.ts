import { Directive, Input, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Directive({
	selector: "[kuAccordion]",
	standalone: true
})
export class AccordionDirective  {

	isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	private get isOpen(): boolean {
		return this.isOpen$.value;
	}

	@Input()
	set kuAccordion(isOpen: boolean) {
		this.isOpen$.next(isOpen);
	}

	toggle(): void {
		this.isOpen$.next(!this.isOpen);
	}
}
