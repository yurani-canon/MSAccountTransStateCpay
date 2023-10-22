import { Module } from '@nestjs/common';
import { MsaccountTransStateCpayService } from './msaccount-trans-state-cpay/msaccount-trans-state-cpay.service';
import { MsaccountTransStateCpayController } from './msaccount-trans-state-cpay/msaccount-trans-state-cpay.controller';
import { MsaccountTransStateCpayModule } from './msaccount-trans-state-cpay/msaccount-trans-state-cpay.module';

@Module({
  imports: [MsaccountTransStateCpayModule],
  controllers: [MsaccountTransStateCpayController],
  providers: [MsaccountTransStateCpayService],
})
export class AppModule {}
