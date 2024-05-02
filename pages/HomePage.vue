<!-- Tasks.vue -->

<template>

    <Body class=" bg-secondary md:overflow-hidden">
        <Navbar />
        <div
            class=" px-4 xl:px-0 h-[90vh]  max-w-custom mx-auto flex flex-col md:flex-row  items-center justify-between gap-8 w-full">
            <div class="flex flex-col w-full md:w-5/12 justify-center lg:items-start ">
                <h1
                    class="my-4 text-xl md:text-3xl lg:text-4xl text-gray-200 opacity-75 font-bold leading-tight text-center md:text-left">
                    Simplify Your Tasks With
                    <span
                        class="text-2xl md:text-4xl lg:text-5xl bg-clip-text animate-pulse italic text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500">
                        Intuitive
                    </span>
                    To-Do List App!
                </h1>

                <div class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <p class=" text-center md:text-start block text-blue-300 py-2 font-bold mb-2"
                            for="emailaddress">
                            Streamline Your Productivity and stay on top of your tasks with our simple To-Do app!
                        </p>

                    </div>

                    <div class="flex items-center justify-center pt-4">
                        <NuxtLink to="Task-board"
                            class="bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-500 text-gray-100 font-bold text-lg py-3 px-6 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            type="button">
                            Get Started
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-6/12 ">
                <video class="h-[30rem] w-full rounded-lg border-4 border-gray-300" controls loop muted preload="auto"
                    poster="/images/demo-video-text.png">
                    <source src="/videos/Demo-video-todo-project.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    </Body>
</template>
<script setup>
useHead(({
    title: 'TaskMaster - Get started'
}))
</script>