import { IsString, IsOptional } from 'class-validator';

export class UpdateModuleDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}