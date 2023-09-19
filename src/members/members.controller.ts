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

@Controller('members')
export class MembersController {
  // GET /members
  @Get()
  getMembers(@Query('type') type: string) {
    return [{ type }];
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
  createMember(@Body() createMemberDto) {
    return {};
  }
  // PUT /members/:id
  @Put(':id')
  updateMember(@Param('id') id: string) {
    return {
      id,
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
