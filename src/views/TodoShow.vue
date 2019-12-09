<template>
  <div class="todo-show-container">
    <h1>{{objectId}}</h1>
    show
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoShow',
  data() {
    return {
      objectId: null,
    }
  },
  computed: {},
  created() {
    this.objectId = this.$route.params.id
    console.log(this.$route.params.id)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.todo-show-container{

}
</style>