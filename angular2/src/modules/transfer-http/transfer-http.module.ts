// From https://github.com/FrozenPandaz/ng-universal-demo
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TransferHttp } from './transfer-http';

@NgModule({
  providers: [
    TransferHttp
  ],
  imports: [
    HttpModule
  ]
})
export class TransferHttpModule {}
