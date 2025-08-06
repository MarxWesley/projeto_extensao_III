import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateBannerDto {
    @IsBoolean({message: "campo status deve ser booleano"})
    readonly status: boolean;
}
