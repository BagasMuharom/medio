<template>
    <div class="flex justify-center items-center h-screen flex-col">
        <h1 class="font-quicksand font-light text-9xl mb-8 animate__animated animate__bounce">Medio</h1>

        <router-link to="/choose-game">
            <button class="font-quicksand font-semibold border-2 border-black rounded-full py-4 px-8 hover:bg-white hover:text-black bg-black text-white transition duration-100 text-xl">
                Yuk, Main Sambil Belajar!
            </button>
        </router-link>

        <router-link to="/belajar">
            <button class="font-quicksand font-semibold border-2 border-black rounded-full py-2 px-4 hover:bg-black hover:text-white transition duration-100 mt-4">
                Belajar Menyenangkan
            </button>
        </router-link>
    </div>
</template>