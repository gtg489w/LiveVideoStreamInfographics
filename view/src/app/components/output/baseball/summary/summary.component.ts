import { Component, OnInit, Input } from '@angular/core';
import { Settings } from 'electron';
import { Game } from '../../../../classes/data';

@Component({
	selector: 'baseball-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

	@Input() game: Game;
	@Input() settings: Settings;

	constructor() { }

	ngOnInit() {
	}

}
