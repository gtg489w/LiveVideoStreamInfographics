//******************* Settings *******************//

export class Infographic {
	content: string = '';
	fontPercentage: number = 100;
	title: string = '';
	canned = [{
		title: 'Batting Rules',
		content: '<ul class="spaced"><li>No Stealing</li><li>No Bunting</li><li>No Leading off Base</li><li>Runner is out if struck by thrown ball below the head</li></ul>',
		fontPercentage: 100
	}, {
		title: 'Pitching Rules',
		content: '<ul class="spaced"><li>No Excessive Speed</li><li>Below 35 MPH<ul><li>Umpire\'s Judgement</li><li>Speed Guns are Available</li></ul></li><li>"Ball" Awarded to Batter</li></ul>',
		fontPercentage: 100
	}, {
		title: 'Appeals',
		content: '<ul class="spaced"><li>Requires $50 Donation</li><li>Umpire Can View Video Replay or Consult with Field Manager / Staff</li><li>Non-Refundable!!</li></ul>',
		fontPercentage: 100
	}]
}

export class ScoreboardSettings {
	showScoreboard: boolean = true;
	showTournamentTitle: boolean = false;
	showSummary: boolean = true;
	showCount: boolean = true;
	showOuts: boolean = true;
	showInfographic: boolean = true;
	showSponsors: boolean = true;
}

export class Settings {
	alphaColor: string = 'rgb(51, 255, 0)';
	scoreboard: ScoreboardSettings = new ScoreboardSettings();
	infographic: Infographic = new Infographic();
	sponsors = ['jetblue.jpg', 'polandspring.jpg', 'newenglandfederalcreditunion.jpg', 'boltonvalley.jpg', 'peoplesunitedbank.jpg', 'dunkindonuts.jpg', 'vermonttent.jpg', 'naturallawns.gif', 'ekso.jpg', 'packnetwork.jpg', 'windjammer.jpg', 'nestle.jpg', 'mountaintransit.jpg', 'firstrepublic.jpg', 'clubwyndham.jpg', 'walldoctor.png', 'shorepoint.png', 'newbalance.png', 'theessex.jpeg'];
}

//******************* Game *******************//

export class Runners {
	first: boolean = false;
	second: boolean = false;
	third: boolean = false;
}

export class Team {
	team: string = '';
	runs: number = 0;
	hits: number = 0;
	errors: number = 0;
}

export class Game {
	title: string = '';

	finished: boolean = false;
	home: Team = new Team();
	away: Team = new Team();
	batting: Team;
	runners: Runners = new Runners();

	balls: number = 0;
	strikes: number = 0;
	outs: number = 0;

	inning: number = 1;
	inning_section: string = '';
}

//******************* Data *******************//

export class Data {
	settings: Settings = new Settings();
	game: Game = new Game();
}
