<template>
    <div class="flex h-screen flex-col">
        <!-- Header -->
        <div class="flex p-3">
            <btn-primary @click="$router.push({name: 'belajar'})">Kembali</btn-primary>
        </div>

        <line-separator></line-separator>

        <div class="flex flex-wrap p-8 justify-center">
            <div class="px-4 py-4 border-black border-2 w-10/12 sm:w-52 rounded-md flex flex-col items-center">
                <div class="text-6xl font-bold font-quicksand">
                    8
                </div>

                <div class="text-center mt-4 mb-4">
                    <p class="font-bold font-quicksand">
                        Penjumlahan Satuan
                    </p>

                    <p class="font-quicksand text-xs">
                        Cocok bagi pelajar TK & kelas 1 SD
                    </p>
                </div>

                <btn-primary width="full" @click="toSoal('satuan')">
                    Mulai
                </btn-primary>
            </div>
            
            <div class="px-4 py-4 border-black border-2 w-52 rounded-md flex flex-col items-center sm:ml-4">
                <div class="text-6xl font-bold font-quicksand">
                    17
                </div>

                <div class="text-center mt-4 mb-4">
                    <p class="font-bold font-quicksand">
                        Penjumlahan Puluhan
                    </p>

                    <p class="font-quicksand text-xs">
                        Cocok bagi pelajar kelas 2 SD
                    </p>
                </div>

                <btn-primary width="full" @click="toSoal('puluhan')">
                    Mulai
                </btn-primary>
            </div>
            
            <div class="px-4 py-4 border-black border-2 w-52 rounded-md flex flex-col items-center ml-4">
                <div class="text-6xl font-bold font-quicksand">
                    432
                </div>

                <div class="text-center mt-4 mb-4">
                    <p class="font-bold font-quicksand">
                        Penjumlahan Ratusan
                    </p>

                    <p class="font-quicksand text-xs">
                        Cocok bagi pelajar kelas 3 SD
                    </p>
                </div>

                <btn-primary width="full" @click="toSoal('ratusan')">
                    Mulai
                </btn-primary>
            </div>
            
            <div class="px-4 py-4 border-black border-2 w-52 rounded-md flex flex-col items-center ml-4">
                <div class="text-6xl font-bold font-quicksand">
                    1965
                </div>

                <div class="text-center mt-4 mb-4">
                    <p class="font-bold font-quicksand">
                        Penjumlahan Ribuan
                    </p>

                    <p class="font-quicksand text-xs">
                        Cocok bagi pelajar kelas 4 SD
                    </p>
                </div>

                <btn-primary width="full" @click="toSoal('ribuan')">
                    Mulai
                </btn-primary>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            config: {
                satuan: {
                    jumlah_soal: 15,
                    number_min: 1,
                    number_max: 9
                },
                puluhan: {
                    jumlah_soal: 15,
                    number_min: 2,
                    number_max: 50
                },
                ratusan: {
                    jumlah_soal: 15,
                    number_min: 20,
                    number_max: 500
                },
                ribuan: {
                    jumlah_soal: 15,
                    number_min: 100,
                    number_max: 5000
                },
            }
        }
    },

    methods: {
        toSoal(config) {
            localStorage.setItem('config', JSON.stringify(this.config[config]));

            this.$router.push({
                name: 'penjumlahan.soal'
            });
        }
    }
}
</script>