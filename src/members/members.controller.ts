import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  NotFoundException,
  ParseIntPipe,
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
  getMember(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.membersService.getMember(id); // type cast string id into number
    } catch (err) {
      throw new NotFoundException();
    }
  }
  // POST /members
  @Post()
  createMember(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.createMember(createMemberDto);
  }
  // PUT /members/:id
  @Put(':id')
  updateMember(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.updateMember(+id, updateMemberDto);
  }
  // DELETE /members/:id
  @Delete(':id')
  removeMember(@Param('id') id: string) {
    this.membersService.removeMember(+id);
  }
}
