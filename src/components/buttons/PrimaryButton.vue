<template>
    <button :class="['font-quicksand font-semibold border-2 border-black rounded-full hover:bg-black hover:text-white transition duration-100', {
        'py-1 px-2 text-xs': isExtraSmall(),
        'py-2 px-4 text-sm': isSmall(),
        'py-3 px-6 text-xl': isMedium(),
        'py-6 px-10 text-xl': isLarge(),
        'py-8 px-14 text-2xl': isExtraLarge(),
        'w-full': isFullWidth()
    }]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'sm'
        },
        width: {
            type: String,
            default: 'auto'
        }
    },
    data() {
        return {
            
        }
    },

    methods: {
        isExtraSmall() {
            return this.size == 'xs';
        },

        isSmall() {
            return this.size == 'sm';
        },

        isMedium() {
            return this.size == 'md';
        },

        isLarge() {
            return this.size == 'lg';
        },

        isExtraLarge() {
            return this.size == 'xl';
        },

        isFullWidth() {
            return this.width == 'full';
        }
    }
}
</script>