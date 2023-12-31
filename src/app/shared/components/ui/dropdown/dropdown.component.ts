import { CommonModule } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	Optional,
	Self,
	TemplateRef
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { DropdownThemes } from "@shared/components/ui/dropdown/models/dropdown.types";
import { IconComponent } from "@shared/components/ui/icon/icon.component";
import { ClickOutsideDirective } from "@shared/directives/click-outside.directive";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "ku-dropdown",
	standalone: true,
	imports: [CommonModule, ClickOutsideDirective, IconComponent],
	templateUrl: "./dropdown.component.html",
	styleUrls: ["./dropdown.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent<T> implements ControlValueAccessor {
	private onTouchedCallback!: () => void;

	private onChangeCallback!: (value: any) => void;

	isClicked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	@Input()
	set options(options: Array<T> | null) {
		this.dropdownOptions = options;
	}

	get options(): Array<T> | null {
		return this.dropdownOptions;
	}

	@Input() optionTemplate!: TemplateRef<any | undefined>;

	@Input() theme: DropdownThemes = "shadow";

	@Input() optionKey = "id";

	@Input() optionLabel = "name";

	private dropdownOptions: Array<T> | null = null;

	private val: T | null = null;

	constructor(@Self() @Optional() public ngControl: NgControl) {
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
		this.val = obj;
	}

	getCurrentTheme(): DropdownThemes {
		return this.theme;
	}

	addItem(item: T): void {
		this.val = item;
	}

	swap(event: Event): void {
		event.stopPropagation();
		this.isClicked$.next(!this.isOpen());
	}

	close(): void {
		this.isClicked$.next(false);
	}

	private isOpen(): boolean {
		return this.isClicked$.value;
	}
}
