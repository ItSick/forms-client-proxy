import { MathService } from './math.service';
export declare class AppController {
    private readonly mathService;
    private logger;
    constructor(mathService: MathService);
    accumulate(data: number[]): Promise<import("rxjs").Subscription>;
}
