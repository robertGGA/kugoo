import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonThemes } from "@shared/components/ui/button/models/button.types";

@Component({
	selector: "ku-button",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ButtonComponent {

	@Input() theme: ButtonThemes = "primary";
	@Input() disabled = false;
	@ViewChild("buttonRef") buttonRef!: ElementRef;

	getThemeClass(): ButtonThemes {
		return this.theme;
	}

	setCurrentTheme(theme: ButtonThemes) {
		this.theme = theme;
	}

}
