import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const errorHandler = (resp: AjaxError) => {
    console.warn('error in errorHandler:', resp.message);
    return of({
        ok: false,
        users: []
    });
}

/**
 * The difference between ajax() and ajax.getJSON() is that
 * the getJSON method, gives you only the specific response instead of
 * the complete response that the ajax method gives
 */
const obs$ = ajax.getJSON(url)
.pipe(
    catchError(errorHandler)
);

const obs2$ = ajax(url)
.pipe(
    catchError(errorHandler)
);

/**
  * With catchError run the next, complete and errorHandler but not the error of the partial observer
  * Without catchError run only the error and not the next and complete
  */
obs$.subscribe({
    next: val => console.log('next: ', val),
    error: err => console.log('error: ', err),
    complete: () => console.log('complete!!')
});
// obs2$.subscribe(data => console.log('data: ', data));