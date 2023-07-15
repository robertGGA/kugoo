import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';
import { DropdownThemes } from '@shared/components/ui/dropdown/models/dropdown.types';

@Component({
	selector: 'ku-dropdown',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent<T extends { id?: string | number, name?: string }> implements ControlValueAccessor {

	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;

	@Input()
	set options(options: Array<T> | null) {
		this.options = options;
	}

	@Input() theme: DropdownThemes = 'shadow';

	get options(): Array<T> | null {
		return this._options;
	}

	private _options: Array<T> | null = null;
	private _value: T | null = null;

	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}

	writeValue(obj: any): void {
		this._value = obj;
	}

	getCurrentTheme(): DropdownThemes {
		return this.theme;
	}

	addItem(id: string): void {
		this._value = this.options?.find(item => item?.id === id) ?? null;
	}

}
