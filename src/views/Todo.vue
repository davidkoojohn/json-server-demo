<template>
  <div class="todo-container">
    <el-table :data="dataList" stripe border>
      <el-table-column prop="id" label="#" width="100"/>
      <el-table-column prop="title" label="标题" width="200"/>
      <el-table-column prop="description" label="描述"/>
      <el-table-column prop="status" label="状态" width="120"/>
      <el-table-column label="操作" width="150">
        <template slot="header" slot-scope="scope">
          <div class="opt">
            <span>操作</span>
            <router-link :to="{name: 'todo-create'}">
              <el-button
                type="primary"
                size="small"
                class="create"
              >
                新建 <i class="el-icon-plus"></i>
              </el-button>
            </router-link>
          </div>
        </template>
        <template slot-scope="scope">
          <el-button
            icon="el-icon-view"
            circle
            size="small"
            @click="handleClick(scope.row, 'show')"
          />
          <el-button
            icon="el-icon-edit"
            circle
            size="small"
            type="primary"
            @click="handleClick(scope.row, 'edit')"
          />
          <el-button
            icon="el-icon-delete"
            circle
            size="small"
            type="danger"
            @click="handleClick(scope.row, 'delete')"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todo',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('todoModule', ['page', 'dataList'])
  },
  async beforeMount() {
    await this.getTodo()
  },
  methods: {
    ...mapActions('todoModule', ['createTodo', 'getTodo']),
    handleClick({id}, type) {
      switch (type) {
        case 'show':
          this.$router.push({
            name: 'todo-show',
            params: {id},
          })
          break
        case 'edit':
          this.$router.push({
            name: 'todo-edit',
            params: {id}
          })
          break
      }
    },
    async createData() {
      await this.createTodo({
        data: {
          "title": "a title",
          "description": "this is description",
          "status": 0
        },
      })
      await this.getTodo()
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-container{
  .opt {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>