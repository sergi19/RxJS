import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [next]: ', value),
    error: value => console.log('error [error]: hubo un error'),
    complete: () => console.info('Complete!!!')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    //const a = undefined;
    //a.loquesea = 'Nose';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});


obs$.subscribe(observer);
// obs$.subscribe(
//     value => console.log(value),
//     error => console.warn(error),
//     () => console.log('Completed!!')
// );