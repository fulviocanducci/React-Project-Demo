import moment from "moment";
//import momentTimezone from 'moment-timezone';

import 'moment/locale/pt-br';

export function dateCalculate(seconds) {
    const d = new Date(0);
    d.setUTCSeconds(seconds);
    return d;
}

export function dateToString() {
    moment.locale('pt-BR');
    return moment().tz("America/Sao_Paulo").format();
    //return moment().format("DD/MM/YYYY HH:mm:ss");
}