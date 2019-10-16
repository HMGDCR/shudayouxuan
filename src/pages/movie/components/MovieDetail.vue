<template>
    <el-card>
        <div slot="header" class="movie-tetail-title">
            <div class="top-title">
                <span >
                    电影详情
                </span>
                <el-button type="primary" @click.native="goBack">返回</el-button>
            </div>
        </div> 
        <div class="maiDetails">
            <el-form ref="form" :model="movieData" label-width="80px"  class="main-content">
                <div class="filmInfo">
                    <el-form-item label="电影名称">
                        <el-input v-model="movieData.name" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="电影ID">
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
                            <el-switch v-model="movieData.isSale" :active-text="movieData.isSale?'是':'否'"></el-switch>
                        </el-form-item>
                        <el-form-item label="预售" class="preSell">
                            <el-switch v-model="movieData.isPresale" :active-text="movieData.isPresale?'是':'否'"></el-switch>
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
            </el-form>
        </div>
    </el-card>
</template>
<script>
  export default {
    data() {
        return {
            loading:false,
            movieData:{}
        }
    },
    created(){
        console.log( this.$route.query.filmId )
        this.getFilmDetail( this.$route.query.filmId )
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
            console.log( file.url )
        },
        // 下载
        handleDownload(file) {
            console.log(file);
        },
        // 成功
        handleAvatarSuccess(response, file, fileList){
            console.log( response )
        },
        onSubmit() {
            
        },
        goBack(){
            this.$router.push("/movie/list")
        }
    }
  }
</script>

<style scoped lang="less">
.maiDetails {
    width: 600px;
    padding-left: 100px;
}
.movie-tetail-title {
    position: fixed;
    width: 100%;
    top: 63px;
    background: #ffffff;
    z-index: 9;
    .top-title {
        width: 82%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
/* 时间选择器样式 */
.timePicker {
    width: 100%;
}
</style>