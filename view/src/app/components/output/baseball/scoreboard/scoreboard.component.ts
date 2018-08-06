import { Component, OnInit, Input } from '@angular/core';
import { Game, Settings } from '../../../../classes/data';

@Component({
	selector: 'baseball-scoreboard',
	templateUrl: './scoreboard.component.html',
	styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

	@Input() game: Game;
	@Input() settings: Settings;

	constructor() { }

	ngOnInit() {}

}
