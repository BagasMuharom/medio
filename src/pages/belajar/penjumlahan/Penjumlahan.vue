<template>
    <div class="flex h-screen flex-col">
        <!-- Header -->
        <div class="flex p-3">
            <h2 class="text-xl font-quicksand">Penjumlahan</h2>
        </div>

        <line-separator></line-separator>

        <div class="flex flex-wrap p-8 justify-center" v-if="daftar_soal.length > 0">
            <div class="w-10/12">
                <p>Soal {{ index_soal + 1 }} dari {{ jumlah_soal }}</p>

                <div class="px-4 py-4 border-black border-2 w-full rounded-md flex flex-col items-center">
                    <div class="text-9xl font-bold font-quicksand">
                        {{ daftar_soal[index_soal].a }} + {{ daftar_soal[index_soal].b }}
                    </div>
                </div>

                <div class="flex flex-wrap mt-3">
                    <div class="px-4 py-4 w-1/2 mb-3" v-for="option in daftar_soal[index_soal].options_list" :key="option">
                        <div class="p-4 border-black border-2 w-full text-center text-9xl rounded-md hover:border-white hover:text-white hover:bg-black cursor-pointer" @click="answer()">
                            {{ option }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jumlah_soal: 10,
            number_min: 1,
            number_max: 9,
            daftar_soal: [],
            index_soal: 0
        }
    },

    mounted() {
        let config = JSON.parse(localStorage.getItem('config'));

        this.jumlah_soal = config.jumlah_soal;
        this.number_min = config.number_min;
        this.number_max = config.number_max;

        this.generateSoal();
    },

    methods: {
        generateSoal() {
            for (var i = 1; i <= this.jumlah_soal; i++) {
                let a = this.randomInt(this.number_min, this.number_max);
                let b = this.randomInt(this.number_min, this.number_max);
                let answer = a + b;

                let options_list = [];
                let options_length = 4;
                let options_answer_index = this.randomInt(0, options_length - 1);

                for (var j = 0; j < options_length; j++) {
                    if (j != options_answer_index) {
                        let option = this.randomInt(this.number_min + this.number_min, this.number_max + this.number_max);

                        while (option == answer || options_list.indexOf(option) > -1) {
                            option = this.randomInt(this.number_min + this.number_min, this.number_max + this.number_max);
                        }

                        options_list.push(option);
                    } else {
                        options_list.push(answer);
                    }
                }

                let soal = {
                    a, b, answer, options_list
                };

                this.daftar_soal.push(soal);
            }
        },

        randomInt(min, max) {
            var random = Math.floor(Math.random() * max) + min;

            return random;
        },

        answer() {
            this.index_soal++;
        }
    }
}
</script>