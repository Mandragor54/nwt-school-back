import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AddPersonDTO, Person } from './people.types';
import { PeopleService } from './people.service';
import { HttpInterceptor } from '../interceptors/http.interceptor';

@Controller('people')
@UseInterceptors(HttpInterceptor)
export class PeopleController {
  /**
   * Class constructor
   * @param _peopleService
   */
  constructor(private readonly _peopleService: PeopleService) {}

  /**
   * Handler to answer to /people route
   *
   * @returns Observable<Person[] | void>
   */
  @Get()
  findAll(): Observable<Person[] | void> {
    return this._peopleService.findAll();
  }

  /**
   * Handler to answer to /people/random route
   *
   * @returns Observable<Person | void>
   */
  @Get('random')
  findRandom(): Observable<Person | void> {
    return this._peopleService.findRandom();
  }

  /**
   * Handler to answer to /people/:id route
   *
   * @returns Observable<Person>
   */
  @Get(':id')
  findOne(@Param('id') id: string): Observable<Person> {
    return this._peopleService.findOne(id);
  }

  @Post()
  create(@Body('person') person: AddPersonDTO) {
    return this._peopleService.create(person);
  }
}
