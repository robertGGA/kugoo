import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[kuCreateModal]',
	standalone: true
})
export class CreateModalDirective {
	constructor(private containerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
	}

	openModal() {

	}

}
