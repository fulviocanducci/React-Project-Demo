import { RequestGet } from '../apis/index'

export default function DollarRequestGet() {
    const url = 'https://economia.awesomeapi.com.br/all/';
    return RequestGet(url);
        
}


//@dataInicial='08-01-2019'&@dataFinalCotacao='08-21-2019'
//&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao