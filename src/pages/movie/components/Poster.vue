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
        this.imageUrl =this.$store.state.posterDefault
        this.$store.commit( "posterClear","" )
    },
    methods: {
        handleAvatarSuccess(res, file) {
            console.log( res )
            console.log( file )
            this.imageUrl = res.image.url
            console.log( this.imageUrl )
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
            console.log( newValue )
            this.$emit( "sonData",newValue )
            this.imageUrl = newValue
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