import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter, Input, OnInit, Output,
	TemplateRef,
	ViewChild, ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	CdkConnectedOverlay,
	CdkOverlayOrigin,
	ConnectedOverlayPositionChange,
	ConnectionPositionPair
} from '@angular/cdk/overlay';
import { fromEvent } from 'rxjs';

@Component({
	selector: 'ku-tooltip-container',
	standalone: true,
	imports: [CommonModule, CdkConnectedOverlay],
	templateUrl: './tooltip-container.component.html',
	styleUrls: ['./tooltip-container.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContainerComponent implements OnInit, AfterViewInit {

	@ViewChild('overlay', { static: false }) overlay!: TemplateRef<CdkConnectedOverlay>;
	@ViewChild('tooltip', { read: ViewContainerRef }) tooltip!: ViewContainerRef;
	@Output() mouseleave = new EventEmitter();

	@Input() setView(view: TemplateRef<any>) {
		this.view = view;
	}

	protected view: TemplateRef<any> | undefined;
	origin!: CdkOverlayOrigin;
	positions = [
		new ConnectionPositionPair(
			{ originX: 'center', originY: 'top' },
			{ overlayX: 'center', overlayY: 'bottom' },
			0,
			0,
			'tooltip-body-top'
		),
		new ConnectionPositionPair(
			{ originX: 'center', originY: 'bottom' },
			{ overlayX: 'center', overlayY: 'top' },
			0,
			0,
			'tooltip-body-bottom'
		)
	];
	visible: boolean = false;
	overlayRef: any;
	isActive: boolean = false;

	constructor(private cdr: ChangeDetectorRef) {
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
		fromEvent(this.tooltip?.element.nativeElement, 'mouseenter').subscribe(() => {
			this.isActive = true;
			this.cdr.markForCheck();
		})

		fromEvent(this.tooltip?.element.nativeElement, 'mouseleave').subscribe(() => {
			this.isActive = false;
			this.cdr.markForCheck();
			this.mouseleave.emit();
		})
	}

	setOverlayOrigin(origin: CdkOverlayOrigin): void {
		this.origin = origin;
		this.show();
	}

	ngOnInit(): void {
	}
}
