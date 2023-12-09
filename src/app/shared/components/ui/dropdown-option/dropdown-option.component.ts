import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "ku-dropdown-option",
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: "./dropdown-option.component.html",
	styleUrls: ["./dropdown-option.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownOptionComponent {
	@Input() item!: { id: string, name: string };
}
