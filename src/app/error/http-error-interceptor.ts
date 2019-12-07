import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ErrorDialogService} from "./error-dialog/error-dialog.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorDialogService: ErrorDialogService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let data = {
          reason: error && error.error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        if (error.status !== 401) {
          this.errorDialogService.openDialog(data);
        }
        return throwError(error);
      }));
  } }

