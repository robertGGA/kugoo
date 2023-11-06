import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, Self } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "ku-autocomplete",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./autocomplete.component.html",
	styleUrls: ["./autocomplete.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent<T> implements ControlValueAccessor {

	input: FormControl = new FormControl<string>("");

	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;

	@Input() placeholder = "";
	@Input() hint = "";
	@Input() isMultiple = false;

	value: T | null = null;

	constructor(protected cdr: ChangeDetectorRef, @Self() @Optional() public ngControl: NgControl) {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

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
