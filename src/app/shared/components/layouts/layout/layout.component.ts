import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@shared/components/ui/footer/footer.component";
import { HeaderComponent } from "@shared/components/ui/header/header.component";

@Component({
	selector: "ku-layout",
	standalone: true,
	imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
	templateUrl: "./layout.component.html",
	styleUrls: ["./layout.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

}
