import {
	AfterViewInit,
	ComponentRef,
	Directive,
	ElementRef,
	Input, OnDestroy, Renderer2,
	TemplateRef,
	ViewContainerRef
} from "@angular/core";
import { TooltipContainerComponent } from "@shared/components/modals/constructor/tooltip-container/tooltip-container.component";

@Directive({
	selector: "[kuTooltip]",
	standalone: true,
})
export class TooltipDirective implements AfterViewInit, OnDestroy {
	@Input() viewRef!: TemplateRef<any | undefined>;

	component!: TooltipContainerComponent;

	componentRef: ComponentRef<TooltipContainerComponent> | null = null;

	protected readonly disposables: Array<() => void> = [];

	constructor(
		private elementRef: ElementRef,
		private hostView: ViewContainerRef,
		private renderer: Renderer2
	) {
	}

	ngAfterViewInit(): void {
		this.registerTriggers();
	}

	ngOnDestroy(): void {
		this.disposables.forEach((dispose) => dispose());
	}

	destroyTooltipRef(): void {
		if (this.componentRef) {
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}

	private initializeTooltip(): void {
		this.componentRef = this.hostView.createComponent(TooltipContainerComponent);
		this.component = this.componentRef.instance as TooltipContainerComponent;
		this.component.setView(this.viewRef);
		this.component.setOverlayOrigin({ elementRef: this.elementRef });
		this.component.mouseleave.subscribe(() => {
			this.destroyTooltipRef();
		});
	}

	private registerTriggers(): void {
		const el = this.elementRef.nativeElement;

		const listenerEnter = this.renderer.listen(el, "mouseenter", () => {
			this.initializeTooltip();
		});

		this.disposables.push(listenerEnter);

		const listenerLeave = this.renderer.listen(el, "mouseleave", () => {
			setTimeout(() => {
				if (!this.component.isActive) {
					this.destroyTooltipRef();
				}
			}, 50);
		});

		this.disposables.push(listenerLeave);
	}
}
