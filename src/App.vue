<template>
  <el-container class="app-container">
    <el-header class="header">
      <div class="logo"><i class="el-icon-toilet-paper"></i> Api admin</div>
    </el-header>
    <el-container class="content">
      <el-aside width="200px" class="side-bar">
        <el-menu :default-openeds="['todo']">
          <el-menu-item index="home">
            <router-link :to="{ name: 'home' }">
              <i class="el-icon-s-home"></i>主页
            </router-link>
          </el-menu-item>
          <el-menu-item index="todo">
            <router-link :to="{ name: 'todo' }">
              <i class="el-icon-s-data"></i>TodoList
            </router-link>
          </el-menu-item>
          <el-menu-item index="about">
            <router-link :to="{ name: 'about' }">
              <i class="el-icon-info"></i>关于我们
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

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
}
</style>
