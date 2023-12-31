import { DOCUMENT } from "@angular/common";
import {
	Directive,
	ElementRef,
	EventEmitter,
	Inject,
	OnDestroy, OnInit,
	Output, Renderer2,
} from "@angular/core";

@Directive({
	selector: "[kuClickOutside]",
	standalone: true,
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
	@Output() eventOnClick = new EventEmitter();

	constructor(
		private elementRef: ElementRef,
		@Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2
	) {
	}

	listenerFn = () => {
	};

	ngOnInit(): void {
		this.listenerFn = this.renderer.listen("window", "click", (event) => {
			const clickedInside = this.elementRef.nativeElement.contains(event.target) || this.elementRef.nativeElement === event.target;
			if (!clickedInside) {
				this.eventOnClick.emit();
			}
		});
	}

	ngOnDestroy(): void {
		this.listenerFn();
	}
}
