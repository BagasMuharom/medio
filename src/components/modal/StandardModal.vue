<template>
    <div :class="['fixed pin z-50 overflow-auto bg-smoke-dark flex w-screen h-screen', {'hidden': _hidden}]">
        <div class="relative bg-white w-2/4 max-w-xl m-auto rounded-md flex flex-col">
            <template v-if="!!$slots.title">
                <div class="flex flex-row justify-between align-top px-8 py-4">
                    <slot name="title"></slot>

                    <a title="Close" class="cursor-pointer" @click="close">
                        <fa-icon icon="times"></fa-icon>
                    </a>
                </div>
            </template>

            <template v-if="!!$slots.default">
                <div class="h-px bg-gray-300 w-full"></div>

                <div class="px-8 py-4">
                    <slot></slot>
                </div>
            </template>

            <template v-if="hasFooterSlot()">
                <div class="h-px bg-gray-300 w-full"></div>

                <div class="px-8 py-4">
                    <slot name="footer"></slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hidden: false
    },

    data() {
        return {
            _hidden: false
        }
    },

    mounted() {
        this._hidden = this.hidden;
    },

    methods: {
        close() {
            this._hidden = true;
        },

        hasFooterSlot() {
            return !!this.$slots.footer
        }
    }
}
</script>