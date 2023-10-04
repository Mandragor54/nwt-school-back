import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
    @Get()
    sayHello(){
       return 'world!'; 
    }
}

// handler GET permet appeler une route path '/hello'
// methode sayHello()
// mot world devra s'afficher