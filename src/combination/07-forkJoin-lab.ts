import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

/**
 * The most common use of forkJoin is make simultaneous requests
 */
const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith';

forkJoin({
    users: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/sadsdrepos`)
    //It catch any error over specific observable and doesn't 
    //block the flow and the catchError of whole forkJoin won't be executed
    //so users and gists will have a response
        .pipe(
            catchError(err => of([]))
        ),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
})
//It catch all errors inside forkJoin and block the whole flow
.pipe(
    catchError(err => of(err))
).subscribe(console.log);
