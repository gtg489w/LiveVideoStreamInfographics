import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from '../../../node_modules/ngx-electron';
import { CommunicationService } from './communication.service';
import { Game } from '../classes/data';

@Injectable()
export class BaseballService {

	public game: Game;

	constructor(private communicationService: CommunicationService) {
		this.game = new Game();
		this.communicationService.initializeGame(this.game);
	}

	notify() {
		this.communicationService.notifyGame(this.game);
	}

	// Title

	setTitle(title) {
		this.game.title = title;
		this.notify();
	}

	// Names

	setAwayTeamName(name) {
		this.game.away.team = name;
		this.notify();
	}

	setHomeTeamName(name) {
		this.game.home.team = name;
		this.notify();
	}

	// Runs

	setAwayRuns(runs) {
		this.game.away.runs = runs;
		this.notify();
	}

	setHomeRuns(runs) {
		this.game.home.runs = runs;
		this.notify();
	}

	// Hits

	setAwayHits(hits) {
		this.game.away.hits = hits;
		this.notify();
	}

	setHomeHits(hits) {
		this.game.home.hits = hits;
		this.notify();
	}

	// Errors

	setAwayErrors(errors) {
		this.game.away.errors = errors;
		this.notify();
	}

	setHomeErrors(errors) {
		this.game.home.errors = errors;
		this.notify();
	}

	// Inning

	setInning(inning) {
		this.game.inning = inning;
		this.notify();
	}

	// Count

	setBalls(balls) {
		this.game.balls = balls;
		this.notify();
	}

	setStrikes(strikes) {
		this.game.strikes = strikes;
		this.notify();
	}

	setOuts(outs) {
		this.game.outs = outs;
		this.notify();
	}

	// Base Runners

	toggleFirst() {
		this.game.runners.first = !this.game.runners.first;
		this.notify();
	}

	toggleSecond() {
		this.game.runners.second = !this.game.runners.second;
		this.notify();
	}

	toggleThird() {
		this.game.runners.third = !this.game.runners.third;
		this.notify();
	}

	// Actions

	startGame() {
		this.game.inning = 1;
		this.game.inning_section = 'top';
		this.game.batting = this.game.away;
		this.notify();
	}


	clearRunners() {
		this.game.runners.first = false;
		this.game.runners.second = false;
		this.game.runners.third = false;
		this.notify();
	}

	clearCount() {
		this.game.balls = 0;
		this.game.strikes = 0;
		this.notify();
	};

	addBall() {
		this.game.balls++;
		if(this.game.balls >= 4) {
			this.walk();
		}
		this.notify();
	};

	addStrike() {
		this.game.strikes++;
		if(this.game.strikes >= 3) {
			this.clearCount();
			this.addOut();
		}
		this.notify();
	};

	walk() {
		this.game.balls = 0;
		this.game.strikes = 0;

		// advance runners
		if(this.game.runners.first) {
			if(this.game.runners.second) {
				if(this.game.runners.third) {
					if(this.game.batting) {
						this.game.batting.runs++;
					}
				}
				this.game.runners.third = true;
			}
			this.game.runners.second = true;
		}
		this.game.runners.first = true;
		this.notify();
	}

	addHit() {
		if(!this.game.batting) {
			return;
		}
		this.game.batting.hits++;
		this.notify();
	}

	addRun() {
		if(!this.game.batting) {
			return;
		}
		this.game.batting.runs++;
		this.notify();
	}

	addError() {
		if(!this.game.batting) {
			return;
		}
		if(this.game.batting == this.game.home) {
			this.game.away.errors++;
		} else {
			this
			.game.home.errors++;
		}
		this.notify();
	}

	addOut() {
		this.game.outs++;
		if(this.game.outs >= 3) {
			this.advanceInning();
		}
		this.notify();
	};

	advanceInning() {
		if(this.game.inning_section == '') {
			this.startGame();
		} else if(this.game.inning_section == 'top') {
			this.game.inning_section = 'middle';
		} else if(this.game.inning_section == 'middle') {
			this.game.inning_section = 'bottom';
			this.game.batting = this.game.home;
		} else if(this.game.inning_section == 'bottom') {
			this.game.inning_section = 'end';
		} else {
			this.game.inning_section = 'top';
			this.game.batting = this.game.away;
			this.game.inning++;
		}
		this.clearRunners();
		this.clearCount();
		this.game.outs = 0;
		this.notify();
	};

	updateInningSection(inning_section) {
		this.game.inning_section = inning_section;
		if(this.game.inning_section == 'top' || this.game.inning_section == 'end') {
			this.game.batting = this.game.away;
		} else {
			this.game.batting = this.game.home;
		}
		this.notify();
	}

	homeRun() {
		if(!this.game.batting) {
			return;
		}
		this.game.batting.runs++;
		this.game.batting.hits++;
		if(this.game.runners.first) {
			this.game.batting.runs++;
		}
		if(this.game.runners.second) {
			this.game.batting.runs++;
		}
		if(this.game.runners.third) {
			this.game.batting.runs++;
		}
		this.clearRunners();
		this.clearCount();
		this.notify();
	};

	finishGame() {
		this.game.finished = true;
		this.game.inning_section = 'end';
		this.clearRunners();
		this.clearCount();
		this.notify();
	};

	newGame() {
		this.game = new Game();
		this.notify();
	}
}
