import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe(resp => {
    console.log(resp);
    resp === true ?
        body.append(loadingDiv) :
        document.querySelector('.loading').remove();
});

