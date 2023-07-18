import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Inject,
	OnDestroy,
	Output
} from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Directive({
	selector: '[kuClickOutside]',
	standalone: true
})
export class ClickOutsideDirective {

	@Output() eventOnClick = new EventEmitter();
	isFirstClicked: boolean = false;

	constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
	}

	@HostListener('document:click', ['$event.target'])
	public onClick(target: EventTarget) {
		const clickedInside = this.elementRef.nativeElement.contains(target) || this.elementRef.nativeElement === target;

		if (!clickedInside) {
			this.eventOnClick.emit();
		}
	}

	// ngAfterViewInit(): void {
	// 	this.subscriptions = fromEvent(this.document, 'click')
	// 		.pipe(filter(event => !this.isInside(event.target as HTMLElement)))
	// 		.subscribe((e) => {
	// 			this.eventOnClick.emit();
	// 		})
	// }
	//
	// private isInside(element: HTMLElement): boolean {
	// 	const nativeElement = this.elementRef.nativeElement as HTMLElement;
	// 	console.log(nativeElement === element || nativeElement.contains(element));
	// 	return nativeElement === element || nativeElement.contains(element);
	// }
	//
	// ngOnDestroy(): void {
	// 	this.subscriptions?.unsubscribe();
	// }


}
