import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';

@Controller()
export class AppController {

  private logger = new Logger('Client Proxy AppController');


  constructor(private readonly formService: FormService) {}

  @Post('form')
  async insertForm(@Body('data') data: any) {
    this.logger.log('insertForm client controller '+ data);
    return this.formService.insertForm(data);
  }
}
