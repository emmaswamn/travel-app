<template>
    <div>
        <div class="header-abs" v-show="showAbs">
            <router-link to="/" >
                <div class="iconfont header-abs-back">&#xe624;</div>
            </router-link>
        </div>
        <div class="header-fixed"
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, reactive} from 'vue'
const showAbs = ref(true);
const opacityStyle = reactive({opacity: 1});

const handleScroll = () => {
    // console.log('scroll');
    const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 :opacity;
        opacityStyle.opacity = opacity;
        showAbs.value = false;
    } else {
        showAbs.value = true;
    }
}

onMounted(() => {
   window.addEventListener('scroll', handleScroll);
} );

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})

</script>

<style lang="stylus" scoped>
    @import '@/assets/styles/varibles.styl'
    .header-abs
        position: absolute
        left: 0.2rem
        top: 0.2rem
        width: 0.8rem
        height: 0.8rem
        line-height: 0.8rem
        border-radius: 0.4rem
        text-align: center
        background: rgba(0,0,0,0.8)
        .header-abs-back
            color:#fff
            font-size: 0.4rem
    .header-fixed
        z-index:2
        position: fixed
        top:0
        left:0
        right: 0
        height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 0.32rem
        padding: 0.35rem
        .header-fixed-back
            position: absolute
            top: 0.3rem
            left: 0
            width: 0.64rem
            text-align: center
            font-size: 0.4rem
            color:#fff
</style>