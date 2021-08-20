<template>
    <div>
        <div class="px-4 py-4 border-black border-2 w-full rounded-md flex flex-col items-center mt-3">
            <div class="text-9xl font-bold font-quicksand">
                <slot name="question"></slot>
            </div>
        </div>

        <div class="flex flex-wrap mt-3">
            <div class="px-4 py-4 w-1/2 mb-3" v-for="option in options" :key="option">
                <div class="p-4 border-black border-2 w-full text-center text-9xl rounded-md hover:border-white hover:text-white hover:bg-black cursor-pointer" @click="answer(option)">
                    {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            
        }
    },

    methods: {
        answer(option) {
            this.$emit('answer', option);
        }
    }
}
</script>