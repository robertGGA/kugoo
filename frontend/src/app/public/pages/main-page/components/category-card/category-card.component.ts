import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	Input,
	Renderer2
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "ku-category-card",
	templateUrl: "./category-card.component.html",
	styleUrls: ["./category-card.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCardComponent implements AfterViewInit {
	@Input() imagePath?: string;
	@Input() routerPath?: string;

	constructor(private el: ElementRef,
				private renderer: Renderer2,
				private router: Router) {
	}

	@HostListener("click") listenClick() {
		if (this.routerPath) {
			this.router.navigate([this.routerPath])
		}
	}

	ngAfterViewInit(): void {
		if (this.imagePath) {
			this.renderer.setStyle(this.el.nativeElement, "background-image", `url(${this.imagePath})`)
		}
	}


}
