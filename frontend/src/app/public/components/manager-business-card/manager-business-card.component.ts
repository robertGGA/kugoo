import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "ku-manager-business-card",
	templateUrl: "./manager-business-card.component.html",
	styleUrls: ["./manager-business-card.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerBusinessCardComponent {
	@Output() callEvent: EventEmitter<any> = new EventEmitter<any>();
	@Input() image!: string | Blob;
	@Input() theme: "light" | "dark" | "default" = "default";

	@Input() eventName!: string;

	executeEvent(): void {
		this.callEvent.emit();
	}
}
