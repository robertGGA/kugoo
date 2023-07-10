import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Directive({
	selector: '[kuClickOutside]',
	standalone: true
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

	private subscriptions: Subscription | undefined;

	@Output() eventOnClick = new EventEmitter();

	constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
	}

	ngAfterViewInit(): void {
		this.subscriptions = fromEvent(this.document, 'click')
			.pipe(filter(event => !this.isInside(event.target as HTMLElement)))
			.subscribe(() => {
				this.eventOnClick.emit();
			})
	}

	private isInside(element: HTMLElement): boolean {
		const nativeElement = this.elementRef.nativeElement as HTMLElement;
		console.log(nativeElement === element || nativeElement.contains(element));
		return nativeElement === element || nativeElement.contains(element);
	}

	ngOnDestroy(): void {
		this.subscriptions?.unsubscribe();
	}


}
