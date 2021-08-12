<template>
    <div class="flex justify-center items-center h-screen flex-col">
        <router-link :to="{name: 'tictacmath'}">
            <button class="group font-quicksand font-semibold border-2 border-black rounded-full py-5 px-10 hover:bg-black hover:text-white transition duration-100 text-xl">
                <fa-icon icon="infinity" size="lg"/> <span class="border-l-2 border-black h-full group-hover:border-white mx-2"></span> Tic Tac Math
            </button>
        </router-link>
    </div>
</template>