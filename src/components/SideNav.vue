<template>
	<nav>
		<el-menu @open="handleOpen" @close="handleClose" :default-active="onRoutes">
			<el-submenu :index="String(index)" :key="index" v-for="(item, index) in items">
				<template slot="title">
					<span>{{item.perName}}</span>
				</template>
				<el-menu-item-group>
					<el-menu-item :index="String(index)+String(idx)" v-for="(subs, idx) in item.subMenus" :key="idx">
						<router-link to="">{{ subs.perName }}</router-link>
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
  	</nav>
</template>
<script>
export default {
  	name: "xl-sidenav",
	data() {
		return {
			items: [{
				perId: 1,
				perName: "",
				subMenus: [{
					perId: 1,
					perName: ""
				}]
			}]
		};
	},
	computed: {
		onRoutes () {
			// 当前激活菜单的 index
			let index = this.$route.path.replace('/', '')
			let title = this.$route.meta.title
			// 改变浏览器title
			document.title = title
			return index
		}
	},
	mounted() {
		this.getMenuItem();
	},
	methods: {
		getMenuItem() {
			this.$http.get("static/api/menu.json").then(res => {
				const _data = res.data;
				if (_data.code === 200) {
					this.items = _data.result;
					console.log(this.items)
				}
			}).catch(err => {
				console.log(err);
			});
		},

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
nav .el-submenu .el-menu-item > a {
	height: 40px;
	line-height: 40px;
	color: rgba(255, 255, 255, 1);
	text-decoration: none;
}
nav .el-submenu .el-menu-item.is-active {
	color: #fff;
	background-color: rgba(0, 0, 0, 0.3);
}
nav .el-submenu .el-menu-item:hover {
	background-color: rgba(0, 0, 0, 0.3);
	color: rgba(255, 255, 255, 0.7);
}
</style>