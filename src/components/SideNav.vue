<template>
  	<nav>
		<el-menu @open="handleOpen" @close="handleClose">
      		<el-submenu index="1">
				<template slot="title">
					<span>铃声管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">炫铃列表</el-menu-item>
					<el-menu-item index="1-2">炫铃类型</el-menu-item>
					<el-menu-item index="1-3">审核理由</el-menu-item>
					<el-menu-item index="1-4">铃声数量</el-menu-item>
					<el-menu-item index="1-5">标签管理</el-menu-item>
					<el-menu-item index="1-6">段子管理</el-menu-item>
				</el-menu-item-group>
      		</el-submenu>
      		<el-submenu index="2">
        		<template slot="title">
          			<span>用户管理</span>
        		</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">用户列表</el-menu-item>
					<el-menu-item index="1-2">系统用户</el-menu-item>
					<el-menu-item index="1-3">用户投诉</el-menu-item>
					<el-menu-item index="1-4">聊天记录</el-menu-item>
					<el-menu-item index="1-5">流水账单</el-menu-item>
					<el-menu-item index="1-6">问题用户</el-menu-item>
					<el-menu-item index="1-7">历史用户</el-menu-item>
					<el-menu-item index="1-8">自建用户</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<span>朋友圈管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">动态管理</el-menu-item>
					<el-menu-item index="1-2">用户反馈</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<span>开发者管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">通知类型</el-menu-item>
					<el-menu-item index="1-2">短信通知</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<span>统计管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">用户数据</el-menu-item>
					<el-menu-item index="1-2">铃声数据</el-menu-item>
					<el-menu-item index="1-3">财务统计</el-menu-item>
                    <el-menu-item index="1-4">铃声类型</el-menu-item>
					<el-menu-item index="1-5">红包发放金额</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
    	</el-menu>
  	</nav>
</template>
<script>
export default {
	name: "xl-sidenav",
	data() {
		return {};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
<style lang="css">
nav {
	width: 250px;
	position: fixed;
	bottom: 0;
	top: 60px;
	background-color: #393d49;
}
nav > ul.el-menu {
	border-right: 0;
	margin-top: 15px;
}
nav ul li {
  	background-color: #393d49;
}
nav .el-submenu__title {
	color: rgba(255, 255, 255, 0.7);
	line-height: 45px;
	height: 45px;
}
nav .el-menu-item-group > ul {
  	background-color: rgba(0, 0, 0, 0.3);
}
nav .el-submenu__title:hover {
  	background-color: #4e5465;
}
nav .el-submenu .el-menu-item {
	height: 40px;
	line-height: 40px;
	color: rgba(255, 255, 255, 1);
}
nav .el-submenu .el-menu-item.is-active {
	color: #409eff;
	background-color: #fff;
}
nav .el-submenu .el-menu-item:hover {
	background-color: rgba(0, 0, 0, 0.3);
	color: rgba(255, 255, 255, 0.7);
}
</style>