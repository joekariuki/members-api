import { IsEnum, MinLength } from 'class-validator';

export class CreateMemberDto {
  @MinLength(3)
  name: string;

  @IsEnum(['boxing', 'pilates'], { message: 'Add correct sport!' })
  sport: 'boxing' | 'pilates';
}
