import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { PEOPLE } from '../data/people';
import { Person } from './people.types';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService){}
  /**
   * Handler to answer to /people route
   *
   * @returns Observable<Person[]>
   */
  @Get()
  findAll(): Observable<Person[]> {
    return of(this.peopleService.findAll());
  }
}
