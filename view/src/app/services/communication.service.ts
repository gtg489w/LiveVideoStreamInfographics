import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from '../../../node_modules/ngx-electron';
import { Game, Settings, Data } from '../classes/data';

@Injectable()
export class CommunicationService {

	private game: Game;
	private settings: Settings;

	constructor(private zone: NgZone, private _electronService: ElectronService) {}

	initializeGame(game: Game) {
		this.game = game;
	}

	initializeSettings(settings: Settings) {
		this.settings = settings;
	}

	notifyGame(game: Game) {
		this.game = game;
		this.notify();
	}

	notifySettings(settings: Settings) {
		this.settings = settings;
		this.notify();
	}

	notify() {
		let data = new Data();
		data.game = this.game;
		data.settings = this.settings;
		this._electronService.ipcRenderer.send('data', data);
	}
}
