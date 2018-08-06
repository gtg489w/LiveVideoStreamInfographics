import { Component, OnInit, Input, Output } from '@angular/core';
import { BaseballService } from '../../../services/baseball.service';

@Component({
  selector: 'baseball-live-keyboard',
  templateUrl: './baseball-live-keyboard.component.html',
  styleUrls: ['./baseball-live-keyboard.component.scss']
})
export class BaseballLiveKeyboardComponent implements OnInit {

	@Input() @Output() data;
	liveKeyboardModel: string = '';

	constructor(public baseball: BaseballService) { }

	ngOnInit() {
	}

	liveKeyboard = function(e) {
		let key: string = e.key;
		switch(key.toLowerCase()) {
			case 'r':
				this.baseball.addRun();
				break;
			case 'h':
				this.baseball.addHit();
				this.baseball.clearCount();
				break;
			case 'e':
				this.baseball.addError();
				this.baseball.clearCount();
				break;
			case 'o':
				this.baseball.addOut();
				break;
			case 'b':
				this.baseball.addBall();
				break;
			case 's':
				this.baseball.addStrike();
				break;
			case 'c':
				this.baseball.clearCount();
				break;
			case 'a':
				this.baseball.advanceInning();
				break;
			case '1':
				this.baseball.toggleFirst();
				break;
			case '2':
				this.baseball.toggleSecond();
				break;
			case '3':
				this.baseball.toggleThird();
				break;
		}
		setTimeout(() => {
			this.liveKeyboardModel = '';
		}, 100);
	};
}
