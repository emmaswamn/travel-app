<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper
                :modules="modules"
                :pagination="{
                type: 'fraction',
                }"
                :navigation="true"
            >
                <swiper-slide
                    v-for="(item, index) in imgs"
                    :key="index"
                >
                    <img class="gallery-img" :src="item" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {defineProps, toRefs, defineEmits} from 'vue'
const props = defineProps({
    imgs: Array
});


const {imgs} = toRefs(props);
const modules= [ Pagination, Navigation ];

// console.log(letters, 'letters');
const emit = defineEmits(['close']);
const handleGallaryClick = (e) => {
    // console.log('in');
    emit('close');
};
</script>

<style lang="stylus"  scoped>
    .container >>> .swiper
        overflow: visible
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index:99
        position: fixed
        left:0
        right: 0
        top:0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallery-img
                width: 100%
            .swiper >>> .swiper-pagination  
                color: #fff
                bottom: -1rem

</style>