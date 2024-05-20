import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'login'
});

//Comando docker para Mysql: docker run --name mymysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=login -p 3306:3306 -d mysql