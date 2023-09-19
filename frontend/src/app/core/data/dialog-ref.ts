import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class DialogRef {
	private afterClosedObservable$ = new Subject<any>();

	constructor(private overlayRef: OverlayRef) {
	}

	close(result?: any): void {
		this.overlayRef.dispose();
		this.afterClosedObservable$.next(result);
		this.afterClosedObservable$.complete();
	}

	afterClosed(): Observable<any> {
		return this.afterClosedObservable$.asObservable();
	}
}
