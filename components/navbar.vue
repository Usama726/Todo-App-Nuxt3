<template>
    <div class="w-full py-6 shadow-lg sticky bg-secondary top-[-0.2rem] px-4">
        <div class=" w-full mx-auto max-w-custom z-50 flex items-center justify-between">
            <NuxtLink to="/"
                class="text-xl relative  font-bold italic drop-shadow-xl text-blue-700 flex gap-1 items-center text-center">
                <img src="/images/TodoIcon.svg " class="h-7 w-7" /> <span class="animate-pulse">TaskMaster</span>
            </NuxtLink>
            <div>
                <NuxtLink v-for="(tab, index) in tabs" :key="index" :class="{
                    'border-b-4 border-gray-300 text-gray-300 text-lg font-semibold py-2 px-2  ml-2': activeTab === index,
                    ' text-gray-300 font-bold py-2 px-4 hover:text-gray-400  text-lg ml-2': activeTab !== index
                }" :to="tab.tabLink" @click="selectTab(index)">
                    {{ tab.tabName }}
                </NuxtLink>

            </div>
        </div>
    </div>
</template>

<script setup>
const tabs = ref([
    {
        tabName: 'Home',
        tabLink: '/'
    },
    {
        tabName: 'About',
        tabLink: '/About'
    },
    {
        tabName: 'Manage Tasks',
        tabLink: '/Task-board'
    }
])
const route = useRoute()
const activeTab = ref(route);

// Function to select tab
const selectTab = (index) => {
    activeTab.value = index;
};
onMounted(() => {
    tabs.value.forEach((tab, index) => {
        if (tab.tabLink === route.path) {
            activeTab.value = index;
        }
    });
});
</script>

<style lang="scss" scoped></style>