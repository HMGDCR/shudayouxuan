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
                        <el-upload action="http://122.51.25.152:3000/admin/film/upload" list-type="picture-card"
                        :auto-upload="true" :on-success="handleAvatarSuccess">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
                                <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)" > <i class="el-icon-zoom-in"></i> </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete" @change="handleDownload(file)" > <i class="el-icon-download"></i> </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete" @change="handleRemove(file)" > <i class="el-icon-delete"></i> </span>
                                </span>
                            </div>
                        </el-upload>
                    </el-form-item>
                </div>
                <el-form-item class="add-submit">
                    <el-button type="primary" @click="onSubmit" :loading="loading">立即{{isAdd?"添加":"编辑"}}</el-button>
                    <el-button @click.native="clearAll">取消</el-button>
                </el-form-item>
            </el-form>
        </div>    
   </el-card>
</template>

<script>
export default {
    data(){
        return {
            loading:false,
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            movieData:{
                // category: "凄凄切切群",
                // director: "啊啊啊啊啊啊啊啊",
                // premiereAt: "1310572800000",
                // name: "111111",
                // update: "08-13 20:30:08",
                // photos: [
                //     {
                //         url: "http://lc-TtxW25v5.cn-n1.lcfile.com/c0b3ee4fbabc278da43b.PNG",
                //         name: "00000.PNG",
                //         imgId: "5d527886a91c93006980890e",
                //         uid: 1565685895672,
                //         status: "success"
                //     }
                // ],
                // actors: [
                //     {
                //         name: "算得上是",
                //         role: " 是s",
                //         avatarAddress: "",
                //         key: 1565685916282
                //     }
                // ],
                // poster: "",
                // grade: "1",
                // language: " 少时诵诗书",
                // filmId: "5d517927eaa375006cdbdc6b",
                // runtime: "asdfg",
                // filmType: "2D",
                // isPresale: false,
                // timeType: "",
                // isSale: true,
                // synopsis: "s",
                // nation: " 2222"
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
            }).catch(err => {
                console.log( err )
            })
        },
        // 删除
        handleRemove(file) {
            console.log(file);
        },
        // 预览
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            console.log( file.url )
            this.movieData.poster = file.url
            console.log( this.movieData.poster )
        },
        // 下载
        handleDownload(file) {
            console.log(file);
        },
        // 成功的钩子函数
        handleAvatarSuccess(response, file, fileList){
            console.log( response )
            this.movieData.poster = response.image.url
            console.log( this.movieData.poster )
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
                    console.log( 222222222222222 )
                }
            }).catch(err => {
                this.$message.error('请输入完整信息！');
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
            console.log( 111111111 )
            return this.$route.path.includes("add")
        }
    }
}
</script>

<style scoped>
/* 图片上传样式 */
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