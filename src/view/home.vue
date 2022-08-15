<template>
  <div class="home">
    <!-- TODO:toolbar -->
    <div class="main">
      <div class="left"></div>
      <div class="center">
        <div 
          class="content" 
          @dragover="handleDragOver"
          @drop="handleDrop"
          @mousedown="handleMouseDown"
          @mouseup="deselectCurComponent"
        >
          <Editor />
        </div>
      </div>
      <div class="right"></div>
    </div>

  </div>
</template>


<script>
  import Editor from '@/components/Editor/index'
  import ComponentList from '@/components/ComponentList' 
  export default {
    name:'Home',
    components:[Editor,ComponentList],
    methods:{
      // 
      handleDrop(e) {
        e.preventDefault()
        e.stopPropagation()
        const index = e.dataTransfer.getData('index')
      },
      // 进入目标区域触发dragover事件
      handleDragOver(e){
        // 取消dragover的默认事件dragleave
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
      }
    }
  }
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100vh;
    background: #fff;
    .main {
      top: 48px;
      height: calc(100% - 48px);
      position: relative;
      .left{
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 100%;
        & > div {
          overflow: auto;
          &:first-child{
            border-bottom: 1px solid #ddd;
          }
        }
      }
      .right {
        position: absolute;
        right: 0;
        top: 0;
        width: 288px;
        height: 100%;
      }
      .center {
        margin-left: 200px;
        margin-right: 288px;
        background-color: #f5f5f5;
        height: 100%;
        overflow: auto;
        padding: 20px;
        .content {
          width: 100%;
          height: 100%;
          overflow: auto;
        }
      }
    }
}
</style>