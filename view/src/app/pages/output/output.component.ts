import { Component, OnInit, NgZone } from '@angular/core';
import { Data } from '../../classes/data';
import { ElectronService } from '../../../../node_modules/ngx-electron';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

	data: Data = new Data();

	constructor(private zone: NgZone, private _electronService: ElectronService) {
		this.data = new Data();
		this.zone.runOutsideAngular(() => {
			this._electronService.ipcRenderer.on('data', (event, arg) => {
				this.zone.run(() => {
					this.data = arg;
					console.log(arg);
				});
			});
		});
	}

	ngOnInit() {}
}
