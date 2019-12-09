<template>
  <div class="todo-form-container">
    <h1 class="h1" v-if="type === 'show'">详情</h1>
    <h1 class="h1" v-else-if="type === 'edit'">编辑</h1>
    <h1 class="h1" v-else-if="type === 'create'">创建</h1>
    <el-form :model="formField" :rules="rules" ref="formField" label-width="80px" class="form-area">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formField.title" :disabled="type === 'show'"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="formField.description" :disabled="type === 'show'" class="desc"></el-input>
      </el-form-item>
      <el-form-item>
        <router-link v-if="type === 'show'" :to="{ name: 'todo-edit', params: {id: `${objectId}`}}">
          <el-button type="primary">编辑</el-button>
        </router-link>
        <el-button v-else type="primary" @click="submitForm('formField')">
          <template v-if="type === 'create'">立即创建</template>
          <template v-else>确定提交</template>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const optType = {
  'todo-create': 'create',
  'todo-show': 'show',
  'todo-edit': 'edit',
}
export default {
  name: 'TodoCreate',
  data() {
    return {
      objectId: null,
      formField: {
        title: '',
        description: '',
      },
      rules: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {
    type() {
      return optType[this.$route.name]
    }
  },
  created() {
    if (this.type !== 'create') this.objectId = this.$route.params.id
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.objectID) {
            // edit
          } else {
            // create
          }
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style lang="scss">
.todo-form-container{
  .h1 {
    font-size: 40px;
    margin: 0;
  }

  .form-area {
    width: 500px;
    margin-top: 30px;

    .desc .el-textarea__inner {
      height: 100px;
    }
  }
}
</style>