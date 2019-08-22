import Home from "../Home";
import Counter from "../Counter";
import Wheater from "../Wheater";
import Dollar from "../Dollar";

const Menus = [
    {link: '/', text: 'Home', component: Home}, 
    {link: '/counter', text: 'Counter', component: Counter},
    {link: '/wheater', text: 'Wheater', component: Wheater},
    {link: '/dollar', text: 'Dollar', component: Dollar}
];

export default Menus;