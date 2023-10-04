import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { PeopleModule } from './people/people.module';
import { PeopleService } from './people/people.service';
import { PeopleController } from './people/people.controller';

@Module({
  imports: [HelloModule, PeopleModule],
  //controllers: [PeopleController],
  providers: [PeopleService]
})
export class AppModule {}
