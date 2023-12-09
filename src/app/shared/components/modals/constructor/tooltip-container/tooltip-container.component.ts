import {
	CdkConnectedOverlay,
	CdkOverlayOrigin,
	ConnectedOverlayPositionChange,
	ConnectionPositionPair
} from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter, Input, Output,
	TemplateRef,
	ViewChild, ViewContainerRef,
} from "@angular/core";
import { DestroyService } from "@core/services/destroy.service";
import { fromEvent, takeUntil } from "rxjs";

@Component({
	selector: "ku-tooltip-container",
	standalone: true,
	imports: [CommonModule, CdkConnectedOverlay],
	templateUrl: "./tooltip-container.component.html",
	styleUrls: ["./tooltip-container.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class TooltipContainerComponent implements AfterViewInit {
	@ViewChild("overlay", { static: false }) overlay!: TemplateRef<CdkConnectedOverlay>;

	@ViewChild("tooltip", { read: ViewContainerRef }) tooltip!: ViewContainerRef;

	@Output() mouseLeaveEmit = new EventEmitter();

	@Input() setView(view: TemplateRef<any>) {
		this.view = view;
	}

	protected view: TemplateRef<any> | undefined;

	origin!: CdkOverlayOrigin;

	positions = [
		new ConnectionPositionPair(
			{ originX: "center", originY: "top" },
			{ overlayX: "center", overlayY: "bottom" },
			0,
			0,
			"tooltip-body-top",
		),
		new ConnectionPositionPair(
			{ originX: "center", originY: "bottom" },
			{ overlayX: "center", overlayY: "top" },
			0,
			0,
			"tooltip-body-bottom",
		),
	];

	visible = false;

	overlayRef: any;

	isActive = false;

	constructor(private cdr: ChangeDetectorRef, private destroy$: DestroyService) {
	}

	hide(): void {
		this.visible = false;
		this.cdr.markForCheck();
	}

	show(): void {
		this.visible = true;
	}

	positionChange(event: ConnectedOverlayPositionChange) {

	}

	ngAfterViewInit(): void {
		fromEvent(this.tooltip?.element.nativeElement, "mouseenter")
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.isActive = true;
				this.cdr.markForCheck();
			});

		fromEvent(this.tooltip?.element.nativeElement, "mouseleave")
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.isActive = false;
				this.cdr.markForCheck();
				this.mouseLeaveEmit.emit();
			});
	}

	setOverlayOrigin(origin: CdkOverlayOrigin): void {
		this.origin = origin;
		this.show();
	}
}
