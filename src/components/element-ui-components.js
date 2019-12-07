import Vue from 'vue'

import {
  Button,
  Loading,
  MessageBox,
  Notification,
  Message,
} from 'element-ui';

Vue.use(Button);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
