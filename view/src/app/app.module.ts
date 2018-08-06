import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { NgxEditorModule } from 'ngx-editor';
import { ScoreboardComponent } from './components/output/baseball/scoreboard/scoreboard.component';
import { SummaryComponent } from './components/output/baseball/summary/summary.component';
import { TextInfographicComponent } from './components/output/infographics/text-infographic/text-infographic.component';
import { BaseballControlsComponent } from './components/controls/baseball-controls/baseball-controls.component';
import { BaseballLiveKeyboardComponent } from './components/controls/baseball-live-keyboard/baseball-live-keyboard.component';
import { BaseballSettingsComponent } from './components/controls/baseball-settings/baseball-settings.component';
import { BaseballService } from './services/baseball.service';
import { CommunicationService } from './services/communication.service';
import { SettingsService } from './services/settings.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { rootRouterConfig } from './app.routes';
import { ControllerComponent } from './pages/controller/controller.component';
import { OutputComponent } from './pages/output/output.component';
import { TextInfographicControlsComponent } from './components/controls/text-infographic-controls/text-infographic-controls.component';
import { SponsorsComponent } from './components/output/infographics/sponsors/sponsors.component';

@NgModule({
	declarations: [
		AppComponent,
		ScoreboardComponent,
		SummaryComponent,
		TextInfographicComponent,
		BaseballControlsComponent,
		BaseballLiveKeyboardComponent,
		BaseballSettingsComponent,
		ControllerComponent,
		OutputComponent,
		TextInfographicControlsComponent,
		SponsorsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
    	HttpClientModule,
		NgxElectronModule,
		NgxEditorModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: false })
	],
	providers: [
		BaseballService,
		SettingsService,
		CommunicationService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
