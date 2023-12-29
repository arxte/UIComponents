import type {RouteRecordRaw} from "vue-router";

export async function loadLayoutMiddleware(route: any) {
    try {
        let layout = route?.meta?.layout as string || 'Default'
        let layoutComponent = await import(`@/layout/${layout}.vue`)
        if(route.meta)
            route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e)
        console.log('Mounted default layout Default')
        // @ts-ignore
        let layoutComponent = await import('@/layout/Default.vue')
        if(route.meta)
            route.meta.layoutComponent = layoutComponent.default
    }
}
