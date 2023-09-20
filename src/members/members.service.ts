import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MembersService {
  private members = [
    { id: 0, name: 'John Doe', sport: 'boxing' },
    { id: 1, name: 'Jill Doe', sport: 'pilates' },
  ];

  getMembers(sport?: 'boxing' | 'pilates') {
    if (sport) {
      return this.members.filter((member) => member.sport === sport);
    }
    return this.members;
  }

  getMember(id: number) {
    const member = this.members.find((member) => member.id === id);

    if (!member) {
      throw new Error('Member not found');
    }

    return member;
  }

  createMember(createMemberDto: CreateMemberDto) {
    const newMember = {
      ...createMemberDto,
      id: Date.now(),
    };
    this.members.push(newMember);

    return newMember;
  }
}
