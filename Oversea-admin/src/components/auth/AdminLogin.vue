<template>
  <div class="login row justify-content-center dsp-con">
    <div class="col-md-12">
      <!-- <div
        v-if="registeredUser"
        class="text-success"
      >Thank you {{registeredUser.name}}.You can now login</div> -->
     <div class="login-card-body row">
        <div class="col-12 input-w">
        <!-- <img src="https://dsp-conoverseas-jobs.management-partners.co.jp/oversea-admin/images/logo.svg" class="img-responsive img-center logo" alt="jobseeker-logo" /> -->
        <img src="/images/borderless-Adminlogo.png" class="img-responsive img-center" alt="jobseeker-logo" />
         <form class="form-signin" role="form" @submit.prevent="authenticate">
       
          <h3 class="form-signin-heading text-center">運営管理者ログイン</h3>         

          <div class="form-group">
          <label for="email">メール</label>
            <div class="input-group">              
              <input type="email" class="form-control" name="メールアドレス" id="email" placeholder="メールアドレス" autocomplete="off" v-model="formLogin.email"/>
            </div>
          </div>

          <div class="form-group">
          <label for="password">パスワード</label>
            <div class="input-group">               
              <!-- hide password-->
              <input class="form-control input_pass m-l1" type="password" placeholder="パスワード" id="password" v-model="formLogin.password" v-show="!showPass" />
              <!-- show password-->
              <input class="form-control input_pass" type="text" placeholder="パスワード" v-model="formLogin.password" v-show="showPass"/>
            <p v-if="formLogin.password != ''" class="">
              <span class="showpwd" @click="showPass = !showPass">
              <span v-show="!showPass"  class="fa fa-fw fa-eye field-icon toggle-password"></span>
              <span v-show="showPass" class="fa fa-fw fa-eye-slash"></span>
              </span>
            </p>
             
            </div>
          </div>
          <div class="form-group has-error has-feedback" v-if="authError">
            <label for="inputError2" class="control-label">{{authError}}</label>           
          </div>
        <!--
          <div class="form-group">
            <input type="checkbox" class="custom-control-input custom-checkbox" id="customCheck1">
            <label class="custom-control-label custom-checkbox-label" for="customCheck1">パスワードを記憶して⾃動ログインする
            </label>
          </div>
        -->

          <div class="fomr-group text-center m-t-30">
           <button class="btn loginbtn" type="submit">ログイン</button>
           <!-- <button class="btn searchbtn cancelbtn" type="submit">閉じる</button> -->
           </div>
        </form>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../partials/auth";
export default {
  data() {
    return {     
      formLogin: {
        email: "",
        password: ""
      },
      error: null,  
       showPass: false,    
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("login");
      login(this.$data.formLogin)
        .then(res => {
          this.$store.commit("loginSuccess", res);          
          this.$router.push({ path: "/admin" });
        })
        .catch(() => {          
            this.$store.commit("loginFailed", { error: "メールアドレスまたはパスワードが正しくありません" });
        });
    }
  },
  computed: {
    
    authError() { 
      return this.$store.getters.authError;
    },
    registeredUser() {
      return this.$store.getters.registeredUser;
    }
  },
  
    
};
</script>

<style scoped lang="scss">
/*zkm*/
@media only screen and (max-width: 812px) and (orientation : landscape){
  .input-w{
    width: 90%;
    margin-left: 15px;
  }
  .img-center {
    display: block;
    margin: 0 auto;
    margin-bottom: 19px;
    margin-top: 12px;
}
.form-signin-heading {
    color: #0062ff;
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 23px;
}
  .login-card-body{
        background: #fff;
        height: 100%;
        .form-signin{  
            width:100%;                             
            margin-bottom: 0px;
            background: none;
            border: none;
            box-shadow: none;
        }
    }
}
@media (max-width: 767px) and (orientation : portrait)
{
  .loginbtn{
    margin-left: 12px;
  }
  .dsp-con{
    display: contents;
  }
  .input-w{
    width: 100%;
    // margin-left: 15px;
  }
  .img-center {
    display: block;
    margin: 0 auto;
    margin-bottom: 19px;
}
.form-signin-heading {
    color: #0062ff;
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 23px;
}
  .login-card-body{
    height: 100vh;
    position: absolute;
    width: 100%;
        background: #fff;    
        .form-signin{  
            width:100%;                             
            margin-bottom: 0px;
            background: none;
            border: none;
            box-shadow: none;
        }
    }
}
/*zkm*/
.error {
  text-align: center;
  color: red;
}
.loginbtn{
      background-color: #0062ff;
      color: #fff;
      width: 120px;
      padding: 10px 0;
      border-radius: 20px;
      margin-right: 20px;
}
.searchbtn {
      background-color: #0062ff;
      color: #fff;
      width: 120px;
      padding: 10px 0;
      border-radius: 20px;
}
.showpwd {
    position: absolute;
    top: 10px;
    z-index: 1000;
    right: 10px;
}
</style>