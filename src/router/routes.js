import Home from '../pages/Home.vue';
import ChooseGame from '../pages/ChooseGame.vue';
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
        path: '/tictacmath',
        name: 'tictacmath',
        component: TicTacMath
    }
];

export default routes;