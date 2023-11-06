import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionHeaderDirective } from "@shared/directives/accordion-header.directive";

@Component({
	selector: "ku-accordion-header",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./accordion-header.component.html",
	styleUrls: ["./accordion-header.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionHeaderComponent extends AccordionHeaderDirective {

}
