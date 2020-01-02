import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.get(url).subscribe(console.log);
// ajax.post(url, {
//     id: 1,
//     name: 'Sergio'
// }, {
//     'my-token': 'ABC1234'
// }).subscribe(console.log);


/* To work more dinamiclly */
ajax({
    url: url, // or url only,
    method: 'PUT',
    headers: {
        'my-token': 'ABC1234'
    },
    body: {
        id: 1,
        name: 'Sergio'
    }
}).subscribe(console.log)