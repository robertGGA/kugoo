import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'ku-autocomplete',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent<T> implements ControlValueAccessor {

	input: FormControl = new FormControl<string>('');

	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;

	@Input() placeholder: string = '';
	@Input() hint: string = '';
	@Input() isMultiple: boolean = false;

	value: T | null = null;

	@Input()
	set options(options: Array<T> | null) {
		this._options = options;
	}

	get options(): Array<T> | null {
		return this._options;
	}

	private _options!: Array<T> | null;

	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}

	writeValue(obj: any): void {
		this.value = obj;
	}

}
