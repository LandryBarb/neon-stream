import 'vue-router'
export {}

declare module 'vue-router'{
    interface RouteMeta{
        title: string //Every route must have a title
    }
}