import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconComponent } from "@shared/components/ui/icon/icon.component";
import { ButtonComponent } from "@shared/components/ui/button/button.component";
import { PreviewCardTypes } from "@shared/components/ui/preview-card/preview-card.types";
import { RouterLink } from "@angular/router";
import { ChipComponent } from "@shared/components/ui/chip/chip.component";
import { ChipOptions } from "@shared/components/ui/chip/chip.types";

@Component({
	selector: "ku-preview-card",
	standalone: true,
	imports: [CommonModule, IconComponent, ButtonComponent, RouterLink, ChipComponent],
	templateUrl: "./preview-card.component.html",
	styleUrls: ["./preview-card.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCardComponent {

	@Input() cardData!: PreviewCardTypes;

	get isNew(): boolean | undefined {
		return this.cardData.isNew;
	}

	get chipOptions(): ChipOptions | null {
		return this.isNew ? null : {isUpperCase: true}
	}

}
