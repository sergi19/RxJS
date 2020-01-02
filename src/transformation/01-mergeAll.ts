import { fromEvent, Observable } from 'rxjs';
import { debounceTime, pluck, map, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

// Reference
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';
    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'View page';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

/** There is a problem here because we have to handle one observable inside another observable
 * (subscribe within another subscribe), so it's a bad practice and for this reason we have 
 * to use flattening operators
*/ 

// Streams
// const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
// input$.pipe(
//     debounceTime(500),
//     pluck('target', 'value'),
//     map(text => ajax.getJSON(`https://api.github.com/users/${text}`))
// ).subscribe(resp => {
//     resp.pipe(
//         pluck('url')
//     ).subscribe(console.log)
// });

/* Solution mergeAll */
const input2$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
input2$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResp>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll(),
    pluck<GithubUsersResp, GithubUser[]>('items')// or pluck('items') only
).subscribe(showUsers);

