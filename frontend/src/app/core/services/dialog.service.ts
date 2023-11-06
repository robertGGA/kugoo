import { inject, Injectable, Injector } from "@angular/core";
import { DialogConfig } from "@angular/cdk/dialog";
import { ComponentType, Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { DIALOG_DATA } from "@core/data/dialog-tokens";
import { DialogRef } from "@core/data/dialog-ref";
import { fromEvent } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DialogService {

	private overlay = inject(Overlay);
	private injector = inject(Injector);


	open<T>(component: ComponentType<T>, config?: DialogConfig): DialogRef {
		const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
		const overlayRef = this.overlay.create({
			positionStrategy,
			hasBackdrop: config?.hasBackdrop ?? true,
			backdropClass: config?.backdropClass ?? "dialog-backdrop",
			panelClass: config?.panelClass ?? "dialog-panel"
		});
		const dialogRef = new DialogRef(overlayRef);

		const injector = Injector.create({
			parent: this.injector,
			providers: [
				{ provide: DialogRef, useValue: dialogRef },
				{ provide: DIALOG_DATA, useValue: config?.data },
			],
		});
		const portal = new ComponentPortal(component, null, injector);
		overlayRef.attach(portal);
		this.disposeDialog(overlayRef);

		return dialogRef;
	}

	private disposeDialog(overlayRef: OverlayRef): void {
		fromEvent(overlayRef.backdropElement!, "click").subscribe(() => {
			overlayRef.dispose();
		})
	}
}
