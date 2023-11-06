import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, ElementRef,
	Input, OnInit, ViewChild,
	ViewEncapsulation
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, ReactiveFormsModule } from "@angular/forms";
import { DestroyService } from "@core/services/destroy.service";
import { InputTheme, SupportedTypes } from "@shared/components/ui/input/input.types";
import { injectNgControl } from "@app/utils/NoopValueAccessor";

@Component({
	selector: "ku-input",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./input.component.html",
	styleUrls: ["./input.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [
		DestroyService
	],
})
export class InputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
	ngControl = injectNgControl();
	@Input() placeholder: string | null = null;
	@Input() isFloatingLabel = true;
	@Input() type: SupportedTypes = "text"
	@Input() theme: InputTheme = "primary"
	@Input() required = false;

	@Input()
	set disabled(disabled: boolean) {
		this.isDisabled = disabled;
	}

	@ViewChild("inputElement") input!: HTMLElement;


	public isDisabled = false;
	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;
	isTouched = false;

	constructor(private cdr: ChangeDetectorRef,
				private destroy$: DestroyService,
				private elRef: ElementRef) {
	}

	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}


	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}

	writeValue(obj: any): void {
	}

	setDisabledState(isDisabled: boolean) {
		this.isDisabled = isDisabled;
	}

	swapFloating(): void {
		this.isTouched = !this.isTouched;
		this.cdr.markForCheck();
	}

	ngOnInit(): void {
 	}

	ngAfterViewInit(): void {

	}

}
