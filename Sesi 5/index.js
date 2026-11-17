const os = require('os');
const url = require('url');
const datediff = require('./datedif')

console.log(`Hostname ${os.hostname()}`);
console.log(`Plattform ${os.platform()}`);
console.log(`Arch ${os.arch()}`);

const parseURL = url.parse('https://chatgpt.com/c/6ae14e00-c824-83ec-af0a-b7053565d503');

const host = parseURL.hostname;
console.log(host);

const path = parseURL.pathname;
console.log(path);

const slugs = path.split("/");
const last_slug = slugs[slugs.length-1];
console.log(last_slug);

  holidays = [
        '2026-03-18',
        '2026-03-19',
        '2026-03-20',
        '2026-03-21',
        '2026-03-22',
        '2026-03-23',
        '2026-03-24',
        '2026-04-03',
        '2026-04-05',
        '2026-05-01',
        '2026-05-14',
        '2026-05-15',
        '2026-05-27',
        '2026-05-28',
        '2026-05-31',
        '2026-06-01'
        
    ];

//Jika yang di export multi func, cara panggilnya datediff.nameFunction
const diff =  datediff('2026-02-03', '2026-06-11',holidays);
console.log = ('Total hari kerja $ {diff}');