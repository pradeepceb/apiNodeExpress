import * as mysql from 'mysql';

export const DB=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'invds'
});
