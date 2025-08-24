import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Convert from '@/views/Convert.vue'
import Compress from '@/views/Compress.vue'
import Resize from '@/views/Resize.vue'
import Crop from '@/views/Crop.vue'
import Watermark from '@/views/Watermark.vue'
import About from '@/views/About.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/convert', component: Convert},
    {path: '/compress', component: Compress},
    {path: '/resize', component: Resize},
    {path: '/crop', component: Crop},
    {path: '/watermark', component: Watermark},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router