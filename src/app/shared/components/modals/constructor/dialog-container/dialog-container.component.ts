import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "ku-dialog-container",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./dialog-container.component.html",
	styleUrls: ["./dialog-container.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContainerComponent {

}
