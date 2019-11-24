import {InjectionToken} from "@angular/core";
import {environment} from "../environments/environment";

export const GymHunterEndpointUrl = new InjectionToken<string>('gymHunter-endpoint-url');
export const GymHunterEndpointUrlEnv = { provide: GymHunterEndpointUrl, useValue: environment.gymHunterEndpointUrl };
