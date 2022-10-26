<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script setup>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from './components/DetailList.vue'
import axios from 'axios'
import {useRoute} from 'vue-router'
import {onMounted, ref} from 'vue'

const route = useRoute();

const sightName = ref('');
const bannerImg = ref('');
const gallaryImgs = ref([]);
const list = ref([]);

const getDetailInfo = async() => {
    const {data} = await axios.get('/api/detail', {
        params:{
            id: route.params.id
        }
    });
    sightName.value = data.data.sightName;
    bannerImg.value = data.data.bannerImg;
    gallaryImgs.value = data.data.gallaryImgs;
    list.value = data.data.categoryList;

};

onMounted(() => {
    getDetailInfo();
});

</script>

<style  lang="stylus" scoped>
    .content
        height: 50rem
</style>