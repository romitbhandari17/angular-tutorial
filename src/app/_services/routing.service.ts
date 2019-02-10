import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable()
export class RoutingService {

    constructor(
        private router: Router) {
    }

    private breadCrumbConfig = {
    }

    // Route Component views
    public showView(view: string, param?: any, id?: any, tab?: string, dynamicBreadcrumb?:any) {
        //alert(view)
        switch (view) {
           
            case 'user-details':
                this.router.navigate(['/users/details', id]);
                break;

            case 'user-listing':
                this.router.navigate(['/users']);
                break;
            case 'user-edit':
                this.router.navigate(['/users/edit', id]);
                break;
            case 'user-create':
                this.router.navigate(['/users/create']);
                break;
            default:
                break;
        }
    }
}