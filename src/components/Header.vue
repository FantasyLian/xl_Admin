<template>
    <header>
        <div class="logo">绚铃后台管理系统</div>
        <ul class="nav-info">
            <li>
                
            </li>
            <li></li>
        </ul>
    </header>
</template>
<script>
export default {
    name: 'xl-header',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="css">
header {
    height: 60px;
    background-color: #ffffff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}
.logo {
    width: 250px;
    height: 100%;
    line-height: 60px;
    background-color: #4E5465;
    text-align: center;
	color: #fff;
	font-size: 20px;
	font-family: Myriad Pro, Helvetica Neue, Arial, Helvetica, sans-serif;
	font-weight: 600;
	overflow: hidden;
}
.nav-info {
    position: absolute;
    right: 0;
    top: 0;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>