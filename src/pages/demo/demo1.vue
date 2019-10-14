<template>
    <div class="block">
        <el-cascader v-model="value" 
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
        },{
            value: 'zhinan',
            label: '指南',
            children: [{ value: 'shejiyuanze', label: '设计原则2' }]
        }
        ]
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>