<template>
    <div class="box">
        <div class="field has-addons">
            <div>
                <input v-model="task" type="text" palceholder="ToDo Task" @keypress.enter="save" />
            </div>
        </div>
        <a-button type="primary" @click="save">Save Task</a-button>
        </div>
    </div>
</template>

<script>
export default{
    name:'TodoForm',
    data:() => ({
        task:''
    }),
    methods:{
        async save(){
            try{
                const { status } = await this.$axios.$post('http://localhost:5000',{
                    task: this.task
                })
                if(status){
                    this.$emit('new-task',this.task)
                    this.task=''
                }
            }catch(err){
                console.error(err)
            }
        }
    }
}
</script>