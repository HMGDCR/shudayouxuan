<template>
    <div class="block">
        <el-cascader v-model="value" 
        placeholder="请选择城市区域"
        style="width:100%;"
        :options="options" 
        :props="{ expandTrigger: 'hover' }" 
        @change="handleChange">
        </el-cascader>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            value: [],
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{ value: 'shejiyuanze', label: '设计原则1' }]
            }],
            cityList:[],
            areaList:[]
        };
    },
    created(){
        this.getData()
    },
    methods: {
        // 获取城市、区域的数据
        getData(){
            let cityUrl = "/city/allCity"
            let areaUrl = "/area/allArea"
            let cityPromise = this.$axios.get( cityUrl )
            let areaPromise = this.$axios.get( areaUrl )
            // 同时获取城市、区域数据
            Promise.all([cityPromise,areaPromise]).then(res => {
                let cityList = res[0].cities
                this.cityList = cityList
                let areaList = res[1].areas
                this.areaList = res[1].areas
                // 获取城市列表
                this.options = cityList.map(city => {
                    // 获取城市对应的区域列表
                    let areaData = areaList.filter(area => {
                        return area.cityId == city.cityId;
                    })

                    areaData = areaData.map(area => {
                        return {
                            value:area.areaId,
                            label:area.name
                        }
                    })
                    return {
                        value:city.cityId,
                        label:city.name,
                        children:areaData
                    }
                })
                // 当子区域不存在时，城市不显示
                this.options = this.options.filter(items => {
                    return items.children.length > 0
                })

            }).catch(err => {
                this.$message.error(err);
                
            })
        },
        handleChange(value) {
            let cityItem = this.cityList.filter(items => {
                return items.cityId == value[0]
            })
            let areaItem = this.areaList.filter(ite => {
                return ite.areaId == value[1]
            })
            let childrenData = {
                cityId:value[0],
                areaId:value[1],
                cityName:cityItem[0].name,
                areaName:areaItem[0].name
            }
            this.$emit( "datas",childrenData )
        }
    },
    computed: {
        flag(){
            return this.$store.state.isClear
        }
    },
    watch: {
        flag(newValue){
            console.log(newValue)
            if( this.$store.state.isClear ){
                this.$store.commit( "clearCinemaAdd",false )
                this.value = []
                console.log( this.value )
            }
        }
    },
  };
</script>
