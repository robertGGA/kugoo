import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "@shared/components/ui/header/header.component";
import { FooterComponent } from "@shared/components/ui/footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "ku-layout",
  standalone: true,
	imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
