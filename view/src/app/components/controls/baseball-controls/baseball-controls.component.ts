import { Component, OnInit, Input, Output } from '@angular/core';
import { BaseballService } from '../../../services/baseball.service';

@Component({
  selector: 'baseball-controls',
  templateUrl: './baseball-controls.component.html',
  styleUrls: ['./baseball-controls.component.scss']
})
export class BaseballControlsComponent implements OnInit {

	constructor(public baseball: BaseballService) { }

	ngOnInit() {}
}
