import { IsNotEmpty, IsString, Length} from "class-validator";

export class PostDto{
    /*
        -userId
        -File
    */

    @IsNotEmpty()
    @IsString()
    userId: string
    
    @IsNotEmpty()
    @IsString()
    @Length(4,30)
    title:string
}