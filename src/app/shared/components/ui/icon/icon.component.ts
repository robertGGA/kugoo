import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IconBase, IconSize } from "@shared/components/ui/icon/models/icon.model";

@Component({
	selector: "ku-icon",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./icon.component.html",
	styleUrls: ["./icon.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements IconBase {
	private svgName!: string;

	private width: IconSize = 0;

	private height: IconSize = 0;

	@Input()
	set svgIcon(svg: string) {
		if (this.svgName !== svg) {
			if (svg) {
				this.updateSvg(svg);
			} else if (this.svgName) {
				this.removeSvg();
			}
		}
		this.createSvg(svg);
	}

	get svgIcon(): string {
		return this.svgName;
	}

	@Input()
	set widthIcon(width: IconSize) {
		this.width = width;
	}

	get widthIcon(): IconSize {
		return this.width;
	}

	@Input()
	set heightIcon(height: IconSize) {
		this.height = height;
	}

	get heightIcon(): IconSize {
		return this.height;
	}

	updateSvg(rawValue: string): void {
		this.svgName = `assets/sprite.svg#${rawValue}`;
	}

	createSvg(rawValue: string): void {
		this.svgName = `assets/sprite.svg#${rawValue}`;
	}

	removeSvg(): void {
		this.svgName = "";
	}
}
