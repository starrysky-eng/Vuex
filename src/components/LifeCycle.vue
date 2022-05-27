<template>
<div>
    <h1>{{msg}}</h1>
</div>
</template>

<script>
export default {
    data() {
        return{
            msg:""
        }
    },
    methods:{
        show() {
            this.msg="OK"
            console.log(this.msg)
        }
    },
    beforecreate() {
        this.msg="OK"
        console.log(this.msg)
        this.show()
    }
}
</script>
