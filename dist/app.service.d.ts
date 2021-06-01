import { Observable } from 'rxjs';
export declare class AppService {
    private client;
    constructor();
    getHello(name: string): Observable<string>;
}
