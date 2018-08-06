import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { BaseballService } from './services/baseball.service';
import { Data } from './classes/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	data: Data = new Data();

	constructor(private zone: NgZone, private _electronService: ElectronService, private baseball: BaseballService) {}
}
