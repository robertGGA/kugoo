import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, ContentChild,
	Input, OnInit,
	Optional,
	Self,
	TemplateRef, ViewChild, ViewChildren, ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { DropdownThemes } from '@shared/components/ui/dropdown/models/dropdown.types';
import { BehaviorSubject } from 'rxjs';
import { DropdownOptionComponent } from '@shared/components/ui/dropdown-option/dropdown-option.component';
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

	@ContentChild(TemplateRef) tmpl!: TemplateRef<any>;

	@Input()
	set options(options: Array<T> | null) {
		this._options = options;
	}

	@Input() optionTemplate!: TemplateRef<any>;
	@Input() theme: DropdownThemes = 'shadow';
	@Input() optionKey: string = 'id';
	@Input() optionLabel: string = 'name';

	get options(): Array<T> | null {
		return this._options;
	}

	private _options: Array<T> | null = null;
	private _value: T | null = null;

	constructor(protected cdr: ChangeDetectorRef,
				@Self() @Optional() public ngControl: NgControl,
				private viewContainerRef: ViewContainerRef) {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}

		this.isClicked$.subscribe(value => {
			console.log(value);
		})
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

	private getIsOpen(): boolean {
		return this.isClicked$.value;
	}

	swap(): void {
		this.isClicked$.next(!this.getIsOpen())
	}

	close(): void {
		this.isClicked$.next(false)
	}

}
