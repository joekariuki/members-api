import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  // GET /members
  @Get()
  getMembers(@Query('sport') sport: 'boxing' | 'pilates') {
    // const service = new MembersService();
    return this.membersService.getMembers(sport);
  }
  // GET /members/:id
  @Get(':id')
  getMember(@Param('id') id: string) {
    return {
      id,
    };
  }
  // POST /members
  @Post()
  createMember(@Body() createMemberDto: CreateMemberDto) {
    return {
      name: createMemberDto.name,
    };
  }
  // PUT /members/:id
  @Put(':id')
  updateMember(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return {
      id,
      name: updateMemberDto.name,
    };
  }
  // DELETE /members/:id
  @Delete(':id')
  removeMember(@Param('id') id: string) {
    return {
      id,
    };
  }
}
