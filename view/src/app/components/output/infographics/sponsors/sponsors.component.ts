import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../../../../classes/data';

@Component({
	selector: 'sponsors',
	templateUrl: './sponsors.component.html',
	styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

	@Input() settings: Settings;
	currentSponsor: number = -1;

	constructor() { }

	ngOnInit() {
		setInterval(() => {
			this.currentSponsor++;
			if(this.currentSponsor > this.settings.sponsors.length) {
				this.currentSponsor = -1;
			}
		}, 3 * 1000);
	}
}
