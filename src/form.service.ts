import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class FormService {
    private client: ClientProxy;

    constructor(){
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port:8877,
              },
        });
    }
    public insertForm(data: any) {
        console.log('insertForm client service request');
        return this.client.send<any,any>('form', data)
            .subscribe(res => {
                console.log('insertForm client service response');
                console.log('success')
                console.log('result is: '+ res);
            });
    }
}
