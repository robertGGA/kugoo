import {
	animate, state, style, transition, trigger
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AccordionDirective } from "@shared/directives/accordion.directive";

@Component({
	selector: "ku-accordion-body",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./accordion-body.component.html",
	styleUrls: ["./accordion-body.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [trigger("accordion", [
		state("void", style({
			height: "0",
			opacity: 0,

		})),
		state("*", style({
			height: "*",
			opacity: 1,

		})),
		transition("* => *", [
			animate("0.5s ease"),
		]),
	])],
})
export class AccordionBodyComponent {
	constructor(public accordion: AccordionDirective) {
	}
}
