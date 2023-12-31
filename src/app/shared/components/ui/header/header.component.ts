import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DestroyService } from "@core/services/destroy.service";
import { DialogService } from "@core/services/dialog.service";
import { AskManagerDialogComponent } from "@shared/components/modals/ask-manager-dialog/ask-manager-dialog.component";
import { DialogContainerComponent } from "@shared/components/modals/constructor/dialog-container/dialog-container.component";
import { AutocompleteComponent } from "@shared/components/ui/autocomplete/autocomplete.component";
import { ButtonComponent } from "@shared/components/ui/button/button.component";
import { DropdownComponent } from "@shared/components/ui/dropdown/dropdown.component";
import { DropdownOptionComponent } from "@shared/components/ui/dropdown-option/dropdown-option.component";
import { IconComponent } from "@shared/components/ui/icon/icon.component";
import { ClickOutsideDirective } from "@shared/directives/click-outside.directive";
import { takeUntil } from "rxjs";

@Component({
	selector: "ku-header",
	standalone: true,
	imports: [
		CommonModule,
		IconComponent,
		ButtonComponent,
		ClickOutsideDirective,
		AutocompleteComponent,
		DropdownComponent,
		DropdownOptionComponent,
		RouterLink
	],
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class HeaderComponent {
	testOptions: { id: string, name: string }[] = [{ id: "0", name: "Самокаты" }, { id: "1", name: "Аксессуары" }];

	constructor(
		private dialog: DialogService,
		private destroy$: DestroyService
	) {
	}

	openCart(): void {
		const resultClosed = this.dialog.open(DialogContainerComponent);
	}

	openAskManagerDialog(): void {
		this.dialog.open(AskManagerDialogComponent)
			.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe((value) => {
				console.log(value);
			});
	}

	click() {
		console.log("hi i opened");
	}
}
