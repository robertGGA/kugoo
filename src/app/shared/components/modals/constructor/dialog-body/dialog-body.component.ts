import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "ku-dialog-body",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./dialog-body.component.html",
	styleUrls: ["./dialog-body.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogBodyComponent {

}
