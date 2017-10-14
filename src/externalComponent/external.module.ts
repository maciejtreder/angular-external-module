import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExternalComponent } from './external.component';

@NgModule({
  declarations: [ExternalComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: ExternalComponent, pathMatch: 'full'}
    ])
  ]
})
export class ExternalModule {}
