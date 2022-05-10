<template>
    <a-row>
        <a-col :span="24" class="text-center">
            <!-- Icon -->
            <exception-outlined :style="{fontSize:'100px',color:'#08c'}" />
        </a-col>
        <a-col :span="24" class="text-center">
            <!-- Title -->
            <h1>Oops!</h1>
        </a-col>
        <a-col :span="24" class="text-center">
            <!--- Text -->
            <h3>The page you are looking for are not here anymore...</h3>
        </a-col>
        <a-col :span="24" class="text-center">
            <!-- Button -->
            <a-button  href="/">Back to Home...</a-button>
        </a-col>
    </a-row>
</template>

<script>
import { ExceptionOutlined } from '@ant-design/icons-vue'
export default {
  components: { ExceptionOutlined }
}
</script>

<style scoped>
.text-center{
    text-align:center;
    margin-bottom:20px;
}
</style>
