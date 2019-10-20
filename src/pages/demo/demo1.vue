<template>
    <div>
        <el-upload
            action="http://122.51.25.152:3000/admin/film/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="uploadSuccess"
            :file-list="imgArr"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: 'http://lc-ttxw25v5.cn-n1.lcfile.com/f5176e2c82e3e8639628.jfif',
        dialogVisible: false,
        imgArr:[
                    {
                    name: "111.jpg",
                    url: "http://lc-Yw2h5o9u.cn-n1.lcfile.com/942c934761f3a849eb08.jpg"
                    },
                    {
                    name: "222.jpg",
                    url: "http://lc-Yw2h5o9u.cn-n1.lcfile.com/dea2baec13d1a9648760.jpg"
                    }
                ]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      uploadSuccess(file, fileList){

      }
    }
  }
</script>