import { Component, OnInit, Input, Output } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
	selector: 'text-infographic-controls',
	templateUrl: './text-infographic-controls.component.html',
	styleUrls: ['./text-infographic-controls.component.scss']
})
export class TextInfographicControlsComponent implements OnInit {

	@Input() @Output() data;

	config = {
		"height": "440px",
		"width": "700px",
		"enableToolbar": true,
		"showToolbar": true,
		"placeholder": "Infographic content here...",
		"toolbar": [
			["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
			["color"],
			["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
			["cut", "copy", "delete", "removeFormat", "undo", "redo"],
			["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
		]
	}

	precanndedMessage;

	constructor(public settingsService: SettingsService) { }

	ngOnInit() {
	}

	changed() {
		setTimeout(() => {
			this.settingsService.changed();
		}, 100);
	}

	setContent() {
		console.log(this.precanndedMessage);
		this.settingsService.settings.infographic.title = this.precanndedMessage.title;
		this.settingsService.settings.infographic.content = this.precanndedMessage.content;
		this.settingsService.settings.infographic.fontPercentage = this.precanndedMessage.fontPercentage;
	}

}
