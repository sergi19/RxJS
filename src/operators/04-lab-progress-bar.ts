import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis blandit lectus, id ullamcorper diam feugiat vel. Suspendisse imperdiet libero sed magna pellentesque, sit amet fermentum ligula dictum. Integer augue ligula, semper tincidunt posuere ac, sagittis at dolor. Nullam at sem vehicula, ullamcorper nisi ut, mattis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris purus enim, convallis in aliquet sit amet, ullamcorper eu sapien. Vivamus venenatis imperdiet tristique. Aenean nec nisi tristique diam tempor faucibus. Mauris vel placerat justo, ut fringilla libero. Fusce malesuada urna nulla, et pretium massa dapibus a.
<br><br>
Nam eget ipsum massa. Aliquam diam metus, fermentum id odio eu, condimentum semper diam. Mauris maximus enim sem, in pharetra neque vehicula nec. Nulla porta, enim quis varius interdum, lacus augue convallis sapien, ut hendrerit ex nulla eu lectus. Proin mattis, lectus non faucibus vehicula, augue justo euismod sem, nec dapibus tellus arcu et justo. Donec eget purus dignissim, convallis nisi vel, congue nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce placerat ipsum at tristique aliquam. Phasellus lacinia justo et lacus consectetur venenatis.
<br><br>
Vestibulum nec purus quis sapien egestas volutpat. Proin suscipit commodo leo at iaculis. Sed pretium sodales gravida. Suspendisse rhoncus magna quis lacus fringilla, vitae dictum purus pellentesque. Phasellus ultricies, tortor eget efficitur blandit, ante nisl finibus ex, ut euismod massa odio eget felis. Sed ac mollis justo. Nulla imperdiet tortor eu eros lacinia fringilla. Vivamus id eleifend est. Aliquam vel mi eu urna suscipit lobortis.
<br><br>
Quisque ultrices mauris et ultrices lobortis. Morbi imperdiet lacinia sapien eget sodales. Phasellus enim risus, mollis quis blandit sed, mattis non erat. Nulla dui felis, mollis ac enim et, euismod scelerisque sapien. Mauris sodales, elit eu mollis tempus, nisl est semper nunc, in scelerisque enim quam vitae turpis. Donec venenatis urna et elit sollicitudin gravida. Etiam mattis lectus sit amet lorem lobortis varius. Ut dignissim, nisl ac consequat dictum, justo ante vestibulum purus, et blandit felis arcu nec nibh. Aenean varius luctus risus, et porttitor ipsum auctor a. Nunc imperdiet iaculis elit at iaculis. Donec lobortis augue quis velit dignissim, quis vestibulum eros maximus. Proin euismod est et dui ultricies blandit. Aliquam cursus accumsan sem, interdum rutrum risus bibendum a. Quisque laoreet egestas ante, vitae maximus dolor efficitur eget.
<br><br>
Fusce quis risus semper, convallis quam et, mollis leo. Praesent ut viverra urna. Aenean nec pretium leo. Curabitur in imperdiet risus. Integer aliquam sollicitudin arcu, sit amet euismod nunc mollis vel. Integer id nibh quis nisi elementum condimentum vel id ligula. Curabitur in tortor et erat feugiat imperdiet ut eu risus. Maecenas egestas vel ligula a aliquet. Mauris sed libero pretium turpis sollicitudin mattis porttitor eu purus. Phasellus quis leo vitae tellus venenatis vulputate sed eget tortor. In iaculis purus eros, volutpat consequat est egestas a. Suspendisse elementum laoreet luctus
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calculateScrollPercent = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scrollEvent$ = fromEvent(document, 'scroll');
scrollEvent$.pipe(
    map(calculateScrollPercent),
    tap(console.log)
).subscribe(percent => {
    progressBar.style.width = `${ percent }%`;
});

