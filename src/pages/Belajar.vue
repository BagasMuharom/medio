<template>
    <div class="flex h-screen flex-col">
        <!-- Header -->
		<div class="flex p-3">
			<btn-primary @click="$router.push({name: 'home'})">Kembali</btn-primary>
		</div>

		<div class="h-px bg-gray-300 w-full"></div>

        <div class="flex justify-center mt-4">
            <router-link :to="{name: 'penjumlahan.navigation'}">
                <btn-primary size="lg">
                    <fa-icon icon="infinity" size="lg"/> <span class="border-l-2 border-black h-full group-hover:border-white mx-2"></span> Penjumlahan
                </btn-primary>
            </router-link>
        </div>
    </div>
</template>