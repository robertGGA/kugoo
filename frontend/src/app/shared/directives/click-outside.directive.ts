import {
	Directive,
	ElementRef,
	EventEmitter,
	Inject,
	OnDestroy, OnInit,
	Output, Renderer2
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Directive({
	selector: "[kuClickOutside]",
	standalone: true
})
export class ClickOutsideDirective implements OnInit, OnDestroy {

	@Output() eventOnClick = new EventEmitter();
	listenerFn = () => {};

	constructor(private elementRef: ElementRef,
				@Inject(DOCUMENT) private document: Document,
				private renderer: Renderer2) {
	}

	ngOnInit(): void {
		this.listenerFn = this.renderer.listen("window", "click", (event) => {
			const clickedInside = this.elementRef.nativeElement.contains(event.target) || this.elementRef.nativeElement === event.target;
			console.log(clickedInside);
			if (!clickedInside) {
				this.eventOnClick.emit();
			}
		})
	}

	ngOnDestroy(): void {
		this.listenerFn();
	}
}
