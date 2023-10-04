import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('hello')
export class HelloController {
  /**
   * Handler to answer to /hello route
   */
  @Get()
  sayHello(): Observable<string> {
    return of('world');
  }
}

// retourner grace à un observable 
// changer le type de la reponse de la methode
