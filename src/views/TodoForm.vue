<template>
  <div class="todo-show-container">
    <h1 class="h1">{{ objectId ? '编辑' : '创建' }}</h1>
    <el-form :model="formField" :rules="rules" ref="formField" label-width="80px" class="form-area">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formField.title"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="formField.description" class="desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formField')">{{ objectId ? '确定提交' : '立即创建' }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
  computed: {},
  created() {
    const { name } = this.$route
    switch (name) {
      case 'todo-create':
        break
      case 'todo-edit':
        this.objectId = this.$route.params.id
        break
    }
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
.todo-show-container{
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