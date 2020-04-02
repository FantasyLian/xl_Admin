<template>
	<section class="box-wrap">
    <div class="login-box">
  		<h1>炫铃后台管理系统</h1>
      	<el-form
			:model="ruleForm"
			status-icon
			:rules="rules"
			ref="ruleForm"
			label-width="100px"
			class="demo-ruleForm"
      	>
		<el-form-item label="用户名" prop="userName">
        	<el-input v-model.number="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          	<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="checkPass">
          	<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item> -->
        
        <el-form-item>
          	<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
	</section>
</template>
<script>
export default {
	data() {
		const checkuserName = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("年龄不能为空"));
			}
			setTimeout(() => {
				if (value.length > 10) {
					callback(new Error("用户名太长了"));
				} else {
					if (value.length < 2) {
						callback(new Error("请输入正确的用户名"));
					} else {
						callback();
					}
				}
		}, 100);
		};
		const validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"));
			} else {
				if (this.ruleForm.checkPass !== "") {
					this.$refs.ruleForm.validateField("checkPass");
				}
				callback();
			}
		};
		// const validatePass2 = (rule, value, callback) => {
		// 	if (value === "") {
		// 		callback(new Error("请再次输入密码"));
		// 	} else if (value !== this.ruleForm.pass) {
		// 		callback(new Error("两次输入密码不一致!"));
		// 	} else {
		// 		callback();
		// 	}
		// };
		return {
			ruleForm: {
				userName: "",
				pass: "",
				checkPass: "",
			},
			rules: {
				userName: [{ validator: checkuserName, trigger: "blur" }],
				pass: [{ validator: validatePass, trigger: "blur" }]
				// checkPass: [{ validator: validatePass2, trigger: "blur" }]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let userName = this.ruleForm.userName;
					let password = this.ruleForm.pass;
					this.handleLogin(userName, password);
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		handleLogin(name, pass) {
			this.$http.post('/management/api/login', {
				account: name,
				password: pass
			}).then(response => {
				if(response.status === 200) {
					this.$router.push({
						path: '/Index'
					})
				} else {
					alert(response.data.msg)
				}
			}).catch(error => {
				console.log(error);
			})
		}
	}
};
</script>
<style>
.box-wrap {
  position: relative;
  left: 0;
  top: 0;
  padding: 10% 0;
  min-height: 100%;
  box-sizing: border-box;
}
.box-wrap h1 {
  margin: 10px 0 30px;
  font-weight: 300;
  font-size: 30px;
  color: #000;
  text-align: center;
}
.login-box {
  width: 350px;
  height: auto;
  margin: 0 auto;
  padding: 40px 50px 20px;
  box-shadow: 0 0 30px #0d957a;
  border-radius: 5px;
}
</style>