import { Routes } from '@angular/router';
import { ControllerComponent } from './pages/controller/controller.component';
import { OutputComponent } from './pages/output/output.component';


export const rootRouterConfig: Routes = [
//   { path: '', component: HomeComponent },
  { path: 'controller', component: ControllerComponent },
  { path: 'output', component: OutputComponent },

  // Fallback
	// { path: '**', component: PageNotFoundComponent }
];

