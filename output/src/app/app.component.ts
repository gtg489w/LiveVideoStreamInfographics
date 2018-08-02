import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	constructor(private zone: NgZone, private _electronService: ElectronService) {
		this.zone.runOutsideAngular(() => {
			this._electronService.ipcRenderer.on('data', (event, arg) => {
				this.zone.run(() => {
					console.log('got data', arg);
				});
			});
		});
	}
}
