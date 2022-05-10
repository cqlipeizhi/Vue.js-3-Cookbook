<template>
    <a-layout-sider v-model="drawer" collapsible>
        <a-menu
        :default-selected-keys="['1']"
        theme="dark"
        mode="inline">
        <a-menu-item v-for="(item,index) in menu" :key="index">
            <Icon :displayName="item.icon" />
            <span>{{item.name}}</span>
        </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import Icon from '@ant-design/icons-vue';

export default{
    name:'Drawer',
    components:{Icon},
    data:()=>({
        drawer:false,
        menu:[{
            name:'Home',
            icon:'home'
        },
        {
            name:'Ant Design Vue',
            icon:'ant-design'
        },
        {
            name:'Contact',
            icon:'mail'
        }]
    })
}
</script>