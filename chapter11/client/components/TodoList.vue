<template>
    <div class="box">
        <div class="content">
            <ol type="1">
                <li v-for="(task,i) in taskObject" :key="i">
                    {{task}}
                    <a-button danger @click="deleteTask(i)">Delete</a-button>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data: () => ({
        taskList:[]
    }),
    async beforeMount(){
        await this.getTasks()
    },
    computed:{
        taskObject(){
            return Object.fromEntries(new Map(this.taskList))
        }
    },
    methods:{
        async getTasks(){
            try{
                const { tasks } = await this.$axios.$get('http://localhost:5000')
                this.taskList=tasks
            }catch(err){
                console.error(err)
            }
        },
        async deleteTask(i){
            try{
                const { status } =await this.$axios.$delete(`http://localhost:5000/${i}`)
                if(status){
                    await this.getTasks()
                }
            }catch(err){
                console.error(err)
            }
        }
    }
}
</script>