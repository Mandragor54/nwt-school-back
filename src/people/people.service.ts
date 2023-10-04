import { Injectable } from '@nestjs/common';
import { PEOPLE } from '../data/people';
import { Person } from './people.types';

@Injectable()
export class PeopleService {
    private readonly people: Person[] = PEOPLE;

    public findAll(): Person[] {

        return this.people;
    }
}
