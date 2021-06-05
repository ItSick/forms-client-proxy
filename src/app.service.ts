import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientOptions, ClientProxy } from '@nestjs/microservices';
import {Logger } from '@nestjs/common';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options:{
            host:'127.0.0.1',
            port:8877,
           }
    });
  }

  setForm(form: any): Observable<string> {
    const pattern = {cmd : 'forms'};
    const data = form;
    console.log('client getHello service start...');
    return this.client.send(pattern,data);
  }

}


