<template>
    <div>
        <button class="py-2 px-4 text-white bg-gray-600 hover:bg-gray-500 rounded-lg text-xl" :class="buttonStyling">
            {{ buttonText }}
        </button>
    </div>
</template>

<script setup>
defineProps({
    buttonText: {
        type: String,
        default: '',
    },
    buttonStyling: {
        type: String,
        default: '',
    },
})

</script>

<style lang="scss" scoped></style>