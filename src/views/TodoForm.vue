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
        <!--<el-input type="textarea" v-model="formField.description" :disabled="type === 'show'" class="desc"></el-input>-->
        <div v-if="type === 'show'" class="desc">
          <span v-html="formField.description"></span>
        </div>
        <quill-editor v-else v-model="formField.description" class="editor"/>
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
import api from '../tools/api'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

const optType = {
  'todo-create': 'create',
  'todo-show': 'show',
  'todo-edit': 'edit',
}
export default {
  name: 'TodoCreate',
  components: {
    quillEditor
  },
  data() {
    return {
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
    },
    objectId() {
      return this.$route.params.id
    }
  },
  async created() {
    if (this.type !== 'create') {
      try {
        this.formField = await api.todo.getItem({id: this.objectId})
      } catch (e) {
        console.log(e)
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          if (this.type === 'create') {
            try {
              await api.todo.create({
                data: {
                  ...this.formField,
                  status: 1,
                }
              })
              this.$router.push({
                name: 'todo'
              })
            } catch (e) {
              console.log(e)
            }
          } else {
            try {
              await api.todo.edit({
                id: this.formField.id,
                data: {
                  ...this.formField,
                  status: 1,
                },
              })
              this.$router.push({
                name: 'todo-show',
                params: {
                  id: this.formField.id
                }
              })
            } catch (e) {
              console.log(e)
            }
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
    margin-top: 30px;

    .desc {
      border-radius: 4px;
      border: 1px solid #DCDFE6;

      .el-textarea__inner {
        height: 100px;
      }
    }
  }

  .editor {
    .ql-container.ql-snow {
      height: 200px;
    }
  }
}
</style>