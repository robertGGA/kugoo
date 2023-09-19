import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	Optional,
	Self,
	TemplateRef, ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { DropdownThemes } from '@shared/components/ui/dropdown/models/dropdown.types';
import { BehaviorSubject } from 'rxjs';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';
import { IconComponent } from '@shared/components/ui/icon/icon.component';

@Component({
	selector: 'ku-dropdown',
	standalone: true,
	imports: [CommonModule, ClickOutsideDirective, IconComponent],
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent<T> implements ControlValueAccessor {

	private onTouchedCallback!: () => void;
	private onChangeCallback!: (value: any) => void;

	isClicked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	@Input()
	set options(options: Array<T> | null) {
		this._options = options;
	}

	@Input() optionTemplate!: TemplateRef<any | undefined>;
	@Input() theme: DropdownThemes = 'shadow';
	@Input() optionKey: string = 'id';
	@Input() optionLabel: string = 'name';

	get options(): Array<T> | null {
		return this._options;
	}

	private _options: Array<T> | null = null;
	private _value: T | null = null;

	constructor(@Self() @Optional() public ngControl: NgControl,
				private viewContainerRef: ViewContainerRef) {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

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

	addItem(item: T): void {
		this._value = item;
	}

	private isOpen(): boolean {
		return this.isClicked$.value;
	}

	swap(event: Event): void {
		event.stopPropagation();
		this.isClicked$.next(!this.isOpen())
	}

	close(): void {
		this.isClicked$.next(false)
	}

}
