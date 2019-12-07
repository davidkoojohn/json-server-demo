<template>
  <el-container class="app-container">
    <el-header class="header">
      <div class="logo"><i class="el-icon-toilet-paper"></i> Api admin</div>
    </el-header>
    <el-container class="content">
      <el-aside width="200px" class="side-bar">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-s-data"></i>TodoList</template>
            <el-menu-item index="1-1">TodoList管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="dataList" stripe border>
          <el-table-column prop="id" label="#" width="100"/>
          <el-table-column prop="title" label="标题" width="200"/>
          <el-table-column prop="description" label="描述"/>
          <el-table-column prop="status" label="状态" width="120"/>
          <el-table-column label="操作" width="180">
            <template slot="header" slot-scope="scope">
              <div class="opt">
                <span>操作</span>
                <el-button
                  type="primary"
                  size="small"
                  class="create"
                  @click="createData"
                >
                  新建 <i class="el-icon-plus"></i>
                </el-button>
              </div>
            </template>
            <template slot-scope="scope">
              <el-button icon="el-icon-view" circle @click="handleClick(scope.row)"></el-button>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters('todoModule', ['page', 'dataList'])
  },
  async beforeMount() {
    await this.getTodo()
    console.log(this.dataList)
  },
  methods: {
    ...mapActions('todoModule', ['createTodo', 'getTodo']),
    handleClick(row) {
      console.log(row)
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

<style lang="scss">
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
</style>

<style lang="scss" scoped>
.app-container {
  .header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    height: 60px;

    .logo {
      font-size: 1.7em;
    }
  }

  .content {
    height: calc(100vh - 60px);
  }

  .side-bar {
    background-color: rgb(238, 241, 246);
    color: #333;
  }

  .opt {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .create {
      padding: .5em 3em;
    }
  }
}
</style>
