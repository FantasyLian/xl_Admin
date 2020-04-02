<template>
    <header>
        <div class="logo">绚铃后台管理系统</div>
        <div class="nav-info">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{ user }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="pswd">修改密码</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <a href="javascript:;" class="logout" @click="handleLogout">退出登录</a>
        </div>
		<el-dialog title="修改密码" width="25%" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="新密码" :label-width="formLabelWidth">
					<el-input type="password" v-model="form.pswd1" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认新密码" :label-width="formLabelWidth">
					<el-input type="password" v-model="form.pswd2" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
    </header>
</template>
<script>
export default {
    name: 'xl-header',
    data() {
        return {
			user: '连军',
			dialogFormVisible: false,
			form: {
				pswd1: '',
				pswd2: ''
			},
			formLabelWidth: '120px'
        }
    },
    methods: {
        handleLogout() {
            this.$router.push({
				path: '/login'
			})
		},
		handleCommand(command) {
			if(command === 'pswd') {
				this.dialogFormVisible = true
			}
		}
    }
}
</script>
<style lang="css">
header {
    height: 60px;
    background-color: #fff;
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
    height: 20px;
    line-height: 20px;
    right: 40px;
    top: 20px;
}
.logout {
    font-size: 14px;
    color: #4a4a4a;
    text-decoration: none;
    margin-left: 20px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #4a4a4a;
}
.el-icon-arrow-down {
    font-size: 14px;
}
</style>