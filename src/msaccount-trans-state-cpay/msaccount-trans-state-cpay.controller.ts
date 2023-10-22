import { Controller, Param, Get, Query, Post, Body, UseFilters, ForbiddenException, UsePipes, ValidationPipe } from '@nestjs/common';
import {MsaccountTransStateCpayService} from './msaccount-trans-state-cpay.service';
import {HttpExceptionFilter} from '../filters/http-exception.filter'
import { validationInfo } from 'src/dto/validation.dto';


@Controller('v1/account/transStateCpay')
@UsePipes(new ValidationPipe())
export class MsaccountTransStateCpayController {
    constructor (private maccountTransStateCpayService: MsaccountTransStateCpayService){}

    @Get()
    @UseFilters(new HttpExceptionFilter())
    getAllInformation(@Query() param:validationInfo){
        try{
            console.log(param);
             return this.maccountTransStateCpayService.getAllInformation();
         }
        catch(e){
            throw new ForbiddenException();
            } 
    }
}
