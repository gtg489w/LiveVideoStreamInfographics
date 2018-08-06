import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Settings } from '../classes/data';

@Injectable()
export class SettingsService {

	public settings: Settings

	constructor(private communicationService: CommunicationService) {
		this.settings = new Settings();
		this.communicationService.initializeSettings(this.settings);
	}

	notify() {
		this.communicationService.notifySettings(this.settings);
	}

	changed() {
		this.notify();
	}


}
