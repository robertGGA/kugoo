import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	forwardRef,
	Input, OnInit,
	ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { DestroyService } from '@core/services/destroy.service';
import { takeUntil } from 'rxjs';

@Component({
	selector: 'ku-input',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
		DestroyService
	],
})
export class InputComponent implements ControlValueAccessor, OnInit {
	@Input() placeholder: string | null = null;
	@Input() isFloatingLabel: boolean = true;

	@Input()
	set disabled(disabled: boolean) {
		this.isDisabled = disabled;
	}

	protected textControl = new FormControl('');

	public isDisabled: boolean = false;
	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;
	isTouched: boolean = false;

	constructor(private cdr: ChangeDetectorRef,
				private destroy$: DestroyService) {
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
		this.textControl.valueChanges
			.pipe(takeUntil(this.destroy$))
			.subscribe(value => {
					this.onChangeCallback(value);
					this.onTouchedCallback();
				}
			)
	}

}
