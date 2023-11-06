import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "@shared/components/ui/button/button.component";


@Component({
	selector: "ku-not-found-page",
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: "./not-found-page.component.html",
	styleUrls: ["./not-found-page.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {


}
