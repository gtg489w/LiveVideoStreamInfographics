import { Component, OnInit, Input, Output } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
	selector: 'baseball-settings',
	templateUrl: './baseball-settings.component.html',
	styleUrls: ['./baseball-settings.component.scss']
})
export class BaseballSettingsComponent implements OnInit {

	@Input() @Output() data;

	constructor(public baseballSettings: SettingsService) { }

	ngOnInit() {
	}
}
