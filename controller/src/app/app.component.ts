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
		this._electronService.ipcRenderer.send('data', { settings: 'test' });
	}
}
