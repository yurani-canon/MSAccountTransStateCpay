import { Injectable } from '@nestjs/common';

@Injectable()
export class MsaccountTransStateCpayService {


    getAllInformation() {
        return {
                "code" : "00",
                "messages" : "Success",
                "dateTime" : new Date().toISOString(),
                "status" : 1
            }

        }
      
}

