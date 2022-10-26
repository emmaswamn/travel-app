<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img :src="bannerImg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    {{bannerImgs?.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallery
                :imgs="bannerImgs"
                v-show="showGallery"
                @close="handleGallaryClose"
            >
            </common-gallery>
        </fade-animation>
    </div>
</template>

<script setup>
import CommonGallery from '@/utlites/CommonGallery.vue'
import FadeAnimation from '@/utlites/FadeAnimation.vue'
import {defineProps, toRefs, ref} from 'vue'
const props = defineProps({
    sightName: String,
    bannerImg: String,
    bannerImgs: Array,
});

const {sightName,bannerImg, bannerImgs} = toRefs(props);

const showGallery = ref(false);

const handleGallaryClose = () =>{
    showGallery.value = false;
};

const handleBannerClick = () =>{
    showGallery.value = true;
}

</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: 0.6rem
            color:#fff
            background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size: 0.32rem
                padding: 0 0.2rem
            .banner-number
                height: 0.32rem
                line-height: 0.32rem
                margin-top: 0.14rem
                padding: 0 0.4rem
                border-radius: 0.2rem
                background: rgba(0,0,0,0.8)
                font-size: 0.24rem
                .banner-icon
                    font-size:0.24rem

</style>