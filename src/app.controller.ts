import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {

  private logger = new Logger('Client Proxy AppController');


  constructor(private readonly mathService: MathService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    //this.logger.log('Adding '+ data.toString());
    return this.mathService.accumulate(data);
  }
}
