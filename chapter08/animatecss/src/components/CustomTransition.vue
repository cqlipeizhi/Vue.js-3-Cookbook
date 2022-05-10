<template>
    <transition
    :appear="appear"
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutRight"
    >
    <slot />
    </transition>
</template>
