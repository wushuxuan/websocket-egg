import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzLayoutModule,NzMenuModule, NzFormModule, NzInputModule, NzSelectModule, NzButtonModule,NzGridModule, NzListModule } from 'ng-zorro-antd'


@NgModule({
  imports: [WelcomeRoutingModule,CommonModule,FormsModule,ReactiveFormsModule ,NzFormModule,NzInputModule,NzGridModule ,NzSelectModule,NzButtonModule,NzListModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
