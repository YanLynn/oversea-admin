<template>
    <div class="row">
        <!-- Password confirmation form -->
        <div class="col-sm-12 searchform-one">
            <h5 class="m-b-10 main-header">パスワード変更</h5>
            <form class="col-md-4 p-0" role="form" v-show="!passwordAuthenticated" @submit.prevent="authenticate" >
                <div class="form-group">
                    <label for="password">{{ $t('admin_password_setting.enter_current_password') }}</label>                
                        <!-- hide password-->
                        <input class="form-control input_pass m-l1" type="password" placeholder="パスワード" id="password" v-model.trim="$v.formLogin.password.$model" v-show="!showPass" @keyup="clearSuccess" :class="{'input-error': $v.formLogin.password.$error}" />
                        <!-- show password-->
                        <input
                            class="form-control input_pass"
                            type="text"
                            placeholder="パスワード"
                            v-model.trim="$v.formLogin.password.$model"
                            v-show="showPass"
                            @keyup="clearSuccess"
                            :class="{'input-error': $v.formLogin.password.$error}"
                        />
                        <p v-if="formLogin.password != ''" class="form-content b-none">
                        <span class="showpwd" @click="showPass = !showPass">
                            <span v-show="!showPass" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            <span v-show="showPass" class="fa fa-fw fa-eye-slash"></span>
                        </span>
                        </p>
                        <div class="form-group has-error has-feedback" v-if="$v.formLogin.password.$error">
                            <label for="inputError2" class="control-label" v-if="!$v.formLogin.password.required">{{ $t('admin_password_setting.password_required') }}</label>
                        </div>
                
                </div>
                 <div class="form-group has-error has-feedback" v-if="errors">
                    <label for="inputError2" class="control-label">{{ errors }}</label>
                </div>
                <div class="form-group has-success has-feedback" v-if="success">
                    <label for="inputError2" class="control-label">{{ success }}</label>
                </div>
                <div class="fomr-group text-left m-t-30">
                    <button class="btn loginbtn" type="submit">次へ</button>
                </div>
            </form>

            <!-- Password change form -->
            <form class="col-md-4 p-0" role="form" v-show="passwordAuthenticated" @submit.prevent>
                <div class="form-group">
                    <label for="password">{{ $t('admin_password_setting.enter_new_password') }}</label>                
                        <!-- hide password-->
                        <input
                            class="form-control input_pass m-l1"
                            type="password"
                            placeholder="パスワード"
                            v-model.trim="$v.formChangePassword.newPassword.$model"
                            v-show="!formChangePassword.showNewPass"
                            :class="{'input-error': $v.formChangePassword.newPassword.$error}"
                        />
                        <!-- show password-->
                        <input
                            class="form-control input_pass"
                            type="text"
                            placeholder="パスワード"
                            v-model.trim="$v.formChangePassword.newPassword.$model"
                            v-show="formChangePassword.showNewPass"
                            :class="{'input-error': $v.formChangePassword.newPassword.$error}"
                        />
                        
                        <p v-if="formChangePassword.newPassword != ''" class="form-content b-none">
                        <span class="showpwd" @click="formChangePassword.showNewPass = !formChangePassword.showNewPass">
                            <span v-show="!formChangePassword.showNewPass" class="fa fa-fw fa-eye field-icon toggle-password"> </span>
                            <span v-show="formChangePassword.showNewPass" class="fa fa-fw fa-eye-slash"> </span>
                        </span>
                        </p>
                       
                        <div class="form-group has-error has-feedback" v-if="$v.formChangePassword.newPassword.$error">
                            <label for="inputError2" class="control-label" v-if="!$v.formLogin.password.required">{{ $t('admin_password_setting.password_required') }}</label>
                            <label for="inputError2" class="control-label" v-if="!$v.formLogin.password.minLength">{{ $t('admin_password_setting.password_minlength') }}</label>
                        </div>                
                </div>
                <div class="form-group">
                    <label for="password">{{ $t('admin_password_setting.enter_password_again') }}</label>               
                        <!-- hide password-->
                        <input
                            class="form-control input_pass m-l1"
                            type="password"
                            placeholder="パスワード"
                            v-model.trim="$v.formChangePassword.retypePassword.$model"
                            v-show="!formChangePassword.showRetypePass"
                            :class="{'input-error': $v.formChangePassword.retypePassword.$error}"
                        />
                        <!-- show password-->
                        <input
                            class="form-control input_pass"
                            type="text"
                            placeholder="パスワード"
                            v-model.trim="$v.formChangePassword.retypePassword.$model"
                            v-show="formChangePassword.showRetypePass"
                            :class="{'input-error': $v.formChangePassword.retypePassword.$error}"
                        />
                        <p v-if="formChangePassword.retypePassword != ''" class="form-content b-none">
                        <span class="showRetypePass" @click="formChangePassword.showRetypePass = !formChangePassword.showRetypePass">
                            <span v-show="!formChangePassword.showRetypePass" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            <span v-show="formChangePassword.showRetypePass" class="fa fa-fw fa-eye-slash"></span>
                        </span>
                        </p>
                       
                        <div class="form-group has-error has-feedback" v-if="$v.formChangePassword.retypePassword.$error">
                            <label for="inputError2" class="control-label" v-if="!$v.formLogin.password.sameAsNewPassword">{{ $t('admin_password_setting.password_match') }}</label>
                        </div>               
                </div>
                <div class="fomr-group text-left m-t-30">
                    <button
                        class="btn loginbtn cancelbtn"
                        type="button"
                        @click="cancelChange"
                    >戻る</button>
                    <button
                        class="btn loginbtn"
                        type="submit"
                        :disabled="$v.formChangePassword.$invalid"
                        @click="changePassword"
                    >変更</button>
                    
                </div>
            </form>            
        </div>     
    </div>
</template>
<script>
import { login } from "../../partials/auth";
import { mapGetters } from "vuex";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
    mounted() {},
    data() {
        return {
            formLogin: {
                password: ""
            },
            formChangePassword: {
                newPassword: "",
                showNewPass: false,
                retypePassword: "",
                showRetypePass: false
            },
            showPass: false,
            passwordAuthenticated: false,
            errors: null,
            success: null
        };
    },
    validations: {
        formLogin: {
            password: {
                required,                
            }
		},
		formChangePassword: {
			newPassword: {
				required,
				minLength: minLength(8),
			},
			retypePassword: {
				sameAsNewPassword: sameAs('newPassword')
			}
		}
    },
    computed: {
        ...mapGetters(["currentUser","authError"]),
        // authError() {
        //     return this.$store.getters.authError;
        // }
    },
    methods: {
        authenticate: function() {
			const loginForm = this.$v.formLogin;
			loginForm.$touch();			
            if (!loginForm.$invalid) {
                login({
                    email: this.currentUser.email,
                    password: this.$data.formLogin.password
                })
				.then(() => {
					this.passwordAuthenticated = true;
					this.errors = null;
				})
				.catch(() => {
					this.errors = this.$t(
						"admin_password_setting.password_wrong"
					);
				});
            }
        },
        changePassword: function() {
			const formChangePassword = this.$v.formChangePassword;
			formChangePassword.$touch();
			if (!formChangePassword.$invalid) {
                let loader = this.$loading.show();
				this.$api.post("/admin/password-change", { password: this.$data.formChangePassword.newPassword })
				.then(() => {
                    this.$alertService.showSuccessDialog(null, this.$t('admin_password_setting.password_changed'), this.$t('common.close'));
					// this.success = this.$t(
					// 	"admin_password_setting.password_changed"
					// );
                    this.cancelChange();
                    loader.hide();
                    this.$store.commit('logout');
                    this.$router.push('/');
				})
				.catch(err => {
                    loader.hide();
					let errObj = err.response.data.error.message;
					for (let key in errObj) {
						this.errors += errObj[key];
					}
				});
			}            
        },
        cancelChange: function() {
            this.formChangePassword.newPassword = "";
			this.formChangePassword.retypePassword = "";
			this.$v.formChangePassword.$reset();
            this.formLogin.password = "";
			this.passwordAuthenticated = false;
			this.$v.formLogin.$reset();
            this.errors = null;
        },
        clearSuccess: function() {
            this.success = null;
        }
    }
};
</script>
<style scoped>
.loginbtn {
    background-color: #0062ff;
    color: #fff;
    width: 120px;
    padding: 10px 0;
    border-radius: 20px;
    margin-right: 20px;
}
.has-success .control-label {
    color: #5da017;
}
.input-error {
    border: 1px solid #da4453;
}
.showRetypePass{
    position: absolute;
    top: 116px;
    z-index: 1000;
    right: 22px;
}
</style>