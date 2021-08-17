import Home from '../pages/Home.vue';
import ChooseGame from '../pages/ChooseGame.vue';
import Belajar from '../pages/Belajar.vue';
import PenjumlahanNavigation from '../pages/belajar/penjumlahan/PenjumlahanNavigation.vue';
import Penjumlahan from '../pages/belajar/penjumlahan/Penjumlahan.vue';
import TicTacMath from '../pages/games/TicTacMath.vue';

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/choose-game',
        name: 'choose.game',
        component: ChooseGame
    },
    {
        path: '/belajar',
        name: 'belajar',
        component: Belajar
    },
    {
        path: '/belajar/penjumlahan-navigation',
        name: 'penjumlahan.navigation',
        component: PenjumlahanNavigation
    },
    {
        path: '/belajar/penjumlahan',
        name: 'penjumlahan.soal',
        component: Penjumlahan
    },
    {
        path: '/tictacmath',
        name: 'tictacmath',
        component: TicTacMath
    }
];

export default routes;