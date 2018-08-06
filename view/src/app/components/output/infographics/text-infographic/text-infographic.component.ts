import { Component, OnInit, Input } from '@angular/core';
import { Settings, Game } from '../../../../classes/data';

@Component({
  selector: 'text-infographic',
  templateUrl: './text-infographic.component.html',
  styleUrls: ['./text-infographic.component.scss']
})
export class TextInfographicComponent implements OnInit {

	@Input() game: Game;
	@Input() settings: Settings;

	constructor() { }

	ngOnInit() {
	}

}
