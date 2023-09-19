import { Injectable } from '@nestjs/common';

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
}
