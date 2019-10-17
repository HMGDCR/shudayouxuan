<template>
    <el-upload
        class="avatar-uploader"
        action="http://132.232.87.95:3000/admin/film/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: ''
        }
    },
    mounted(){
        
        // this.$store.commit( "posterClear","" )
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = res.image.url
            // 上传成功后，将该状态给到父组件 
            this.$emit( "imgUplLoadState",false )
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    watch:{
        imageUrl( newValue,oldValue ){
            // 将子元素的 url 给到父组件
            this.$emit( "sonData",newValue )
            this.imageUrl = newValue
        },
        // 监听 vuex 里面 newValue 的值得变化
        "$store.state.posterDefault"( newValue,oldValue ){
            this.imageUrl =newValue
        }
    }
}
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>