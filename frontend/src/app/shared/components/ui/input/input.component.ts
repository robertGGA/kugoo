import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, ElementRef,
	forwardRef,
	Input, OnInit, Optional, Self, ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { DestroyService } from '@core/services/destroy.service';
import { takeUntil } from 'rxjs';
import { InputTheme, SupportedTypes } from '@shared/components/ui/input/input.types';
import { injectNgControl } from '@app/utils/NoopValueAccessor';

@Component({
	selector: 'ku-input',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [
		DestroyService
	],
})
export class InputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
	ngControl = injectNgControl();
	@Input() placeholder: string | null = null;
	@Input() isFloatingLabel: boolean = true;
	@Input() type: SupportedTypes = 'text'
	@Input() theme: InputTheme = 'primary'
	@Input() required: boolean = false;

	@Input()
	set disabled(disabled: boolean) {
		this.isDisabled = disabled;
	}

	@ViewChild('inputElement') input!: HTMLElement;


	public isDisabled: boolean = false;
	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;
	isTouched: boolean = false;

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
