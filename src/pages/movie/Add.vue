<template>
   <el-card>
        <div slot="header">
            电影{{isAdd?"添加":"编辑"}}   
        </div>   
        <div>
            <el-form ref="form" :model="movieData" label-width="80px"  class="main-content">
                <div class="filmInfo">
                    <el-form-item label="电影名称">
                        <el-input v-model="movieData.name" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="电影ID" v-if="!isAdd">
                        <el-input v-model="movieData.filmId" placeholder="" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="内容分类">
                        <el-input v-model="movieData.category" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="导演">
                        <el-input v-model="movieData.director" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="上映时间">
                        <el-date-picker v-model="movieData.premiereAt" type="date" placeholder="选择日期" class="timePicker"> </el-date-picker>
                    </el-form-item>
                    <el-form-item label="评分">
                        <el-input v-model="movieData.grade" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="语言">
                        <el-input v-model="movieData.language" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="时长">
                        <el-input v-model="movieData.runtime" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="产地">
                        <el-input v-model="movieData.nation" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="电影类型">
                        <el-input v-model="movieData.filmType" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="movieData.synopsis" resize="none"> </el-input>
                    </el-form-item>
                    <div class="switchButton">
                        <el-form-item label="在售"  class="onSale">
                            <el-switch v-model="movieData.isSale" :active-text="movieData.isSale?'是':'否'" @change="isSaleState"></el-switch>
                        </el-form-item>
                        <el-form-item label="预售" class="preSell">
                            <el-switch v-model="movieData.isPresale" :active-text="movieData.isPresale?'是':'否'" @change="isPresaleState"></el-switch>
                        </el-form-item>
                    </div>
                    <el-form-item label="海报">

                        <!-- <el-upload
                            class="avatar-uploader"
                            action="http://122.51.25.152:3000/admin/film/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload> -->

                        <Poster @sonData="getChildData" @imgUplLoadState="imgUpload"></Poster>
                    </el-form-item>
                    <el-form-item label="剧照">
                        <el-upload
                            action="http://122.51.25.152:3000/admin/film/upload" list-type="picture-card"
                            :on-preview="handlePreviewPhoto"
                            :on-success="photoUpload"
                            :on-remove="handleRemovePhoto">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                </div>
                <el-form-item class="add-submit">
                    <el-button type="primary" @click="onSubmit" :loading="loading" :disabled="!isAdd?false:imgUpdateState">立即{{isAdd?"添加":"编辑"}}</el-button>
                    <el-button @click.native="clearAll">取消</el-button>
                </el-form-item>
            </el-form>
        </div>    
   </el-card>
</template>

<script>
import Poster from "./components/Poster"
export default {
    components:{
        Poster
    },
    data(){
        return {
            imageUrl:"",
            imgUpdateState:true,
            loading:false,
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            movieData:{
                category: "凄凄切切群",
                director: "啊啊啊啊啊啊啊啊",
                premiereAt: "1310572800000",
                name: "111111",
                update: "08-13 20:30:08",
                photos: [
                    // {
                    //     url: "http://lc-TtxW25v5.cn-n1.lcfile.com/c0b3ee4fbabc278da43b.PNG",
                    //     name: "00000.PNG",
                    //     imgId: "5d527886a91c93006980890e",
                    //     uid: 1565685895672,
                    //     status: "success"
                    // }
                ],
                actors: [
                    {
                        name: "算得上是",
                        role: " 是s",
                        avatarAddress: "",
                        key: 1565685916282
                    }
                ],
                poster: "",
                grade: "1",
                language: " 少时诵诗书",
                filmId: "5d517927eaa375006cdbdc6b",
                runtime: "asdfg",
                filmType: "2D",
                isPresale: false,
                timeType: "",
                isSale: true,
                synopsis: "s",
                nation: " 2222"
            }
        }
    },
    created(){
        if( this.isAdd ){
            return false
        }
        this.$route.params.filmId
        console.log( this.$route.params.filmId )
        console.log( this.$route.path.includes("add") )
        this.getFilmDetail( this.$route.params.filmId )
    },
    methods: {
        // 进入时根据电影ID获取详情
        getFilmDetail( filmId ){
            let url = "/film/getDetail?filmId="+filmId;
            this.$axios.get(url).then(res => {
                console.log( res )
                this.movieData = res.film
                // 将 poster 的 url 给vuex
                // debugger
                this.$store.commit( "posterToChild",this.movieData.poster )
                console.log( this.movieData.poster )
            }).catch(err => {
                console.log( err )
            })
        },
        // 图片上传成功时的状态
        imgUpload(res){
            this.imgUpdateState = res
        },
        // 剧照删除
        handleRemovePhoto(file, fileList) {
            console.log(file, fileList);
        },
        // 剧照预览
        handlePreviewPhoto(file) {
            console.log( file )
        },
         // 剧照图片上传成功回调函数
        photoUpload(response, file, fileList){
            // 获取数组中的url等信息
            this.movieData.photos.push(
                {
                    url: file.response.image.url,
                    name: file.name,
                    imgId: file.response.image.imgId,
                    uid: file.uid,
                    status: file.status
                }
            )
        },
        // 获取子元素【海报】传过来的数据
        getChildData(res){
            this.movieData.poster = res
        },
        // 在售回调函数
        isSaleState( data ){
            this.movieData.isPresale = !this.movieData.isSale
        },
        // 预售回调函数
        isPresaleState( data ){
            this.movieData.isSale = !this.movieData.isPresale
        },
        // 提交
        onSubmit() {
            this.loading = true
            // 添加时间
            let url = `${this.isAdd?"/film/add":"/film/edit"}`
            let data = this.movieData
            console.log(data)
            this.$axios.post(url,data).then(res => {
                this.$message.success(`电影${this.isAdd?"添加":"修改"}成功！`);
                this.loading = false
                if( !this.isAdd ){
                    this.$router.push("/movie/list")
                }
            }).catch(err => {
                this.$message.error( err );
                this.loading = false
            })
        },
        clearAll(){
            // 清空当前
            this.movieData = {}
            if( !this.isAdd ){
                this.$router.push( "/movie/list" )
            }
        }
    },
    computed:{
        isAdd(){
            return this.$route.path.includes("add")
        }
    },
    watch:{
        $route:{
            handler(newRoute,oldRoute){
                console.log( newRoute )
                if( newRoute.path == "/movie/add" ){
                    this.movieData = {}
                    // 如果是添加页面，就将 vuex 里面的 posterDefault 清空
                    this.$store.commit( "posterToChild","" )
                }
            },
            deep:true,
            immediate:true
        }
    }
}
</script>

<style scoped>
/* 海报上传样式 */
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
.switchButton {
    width: 600px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
.filmInfo {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.el-form-item {
    width: 600px;
    padding-left: 100px;
}
.el-form-item.add-submit {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 0;
}
/* 时间选择器样式 */
.timePicker {
    width: 100%;
}
/* 调试是否按钮 */
.preSell {
    padding-left: 0;
}
</style>