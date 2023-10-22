import {IsNotEmpty, IsNumberString, Length, NotEquals } from "class-validator"

export class validationInfo {
    @IsNumberString()
    @Length(1, 5)
    @IsNotEmpty()
    extIdTrx: string;

}
