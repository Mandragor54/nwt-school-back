import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { PEOPLE } from 'src/data/people';

@Controller('people')
export class PeopleController {

    @Get()
    findAll() : Observable<any> {
        return of(PEOPLE);
    }
}
