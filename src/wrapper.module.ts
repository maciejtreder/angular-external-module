import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: '', loadChildren: './externalComponent/external.module#ExternalModule'}
        ])
    ],
    declarations: [ WrapperComponent ],
    exports: [ WrapperComponent ],
})
export class WrapperModule {
}
