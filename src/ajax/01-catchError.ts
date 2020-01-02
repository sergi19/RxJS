import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const errorHandlerAjax = (error: AjaxError) => {
    console.warn('error: ', error.message);
    return of([]);
}

const errorHandlerPromise = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response;
}
const fecthPromise = fetch(url);

// fecthPromise
//     .then(errorHandlerPromise)
//     .then(resp => resp.json())
//     .then(console.log)
//     .catch(error => console.warn('Ups an error has occurred!', error));

ajax(url).pipe(
    pluck('response'),
    catchError(errorHandlerAjax)
).subscribe(console.log)