<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 10:56:49
 * @LastEditiors: Rain
 * @LastEditTime: 2021-12-01 15:17:21
-->
<!--  -->
<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    acions="http://127.0.0.1:3001/"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">点击或拖曳文件到此区域上传</p>
    <p class="ant-upload-hint">支持单个或批量上传</p>
  </a-upload-dragger>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { message } from "ant-design-vue";
export default {
  name: '',
  setup() {

    const handleChange = (info) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file upload suceess`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }

    return {
      handleChange
    }

  }
};
</script>
<style >
body {
  background: beige;
}
.ant-upload.ant-upload-drag {
  width: 50%;
  height: 350px;
  margin: 0 auto;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(0, 0, 0, 0.2);
}
</style>