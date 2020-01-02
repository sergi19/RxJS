import { fromEvent } from 'rxjs';
import { tap, map, mergeMap, pluck, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitButton = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitButton.innerText = 'Submit';
form.append(inputEmail, inputPassword, submitButton);
document.querySelector('body').append(form);

const loginRequest = (requestObject: any) => 
    ajax.post('https://reqres.in/api/login?delay=1', requestObject)
        .pipe(
            pluck('response', 'token')
        )

const click$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(event => event.preventDefault()),
        map(event => ({
            email: event.target[0].value,
            password: event.target[1].value
        })),
        // mergeMap(loginRequest)
        // switchMap(loginRequest)
        exhaustMap(loginRequest)
    );

click$.subscribe(console.log)
