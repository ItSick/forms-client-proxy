import { FormService } from './form.service';
export declare class AppController {
    private readonly formService;
    private logger;
    constructor(formService: FormService);
    insertForm(data: any): Promise<import("rxjs").Subscription>;
}
