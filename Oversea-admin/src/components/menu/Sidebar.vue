<template>
    <div> 
     <!--sidebar-->  
    <ul class="list-group panel">
        <li class="home"><router-link to="/admin" class="list-group-item list-group-child-item"><i class="fa fa-tachometer"></i>トップ</router-link></li>       
        <li>
            <a href="#demo1" class="list-group-item " data-toggle="collapse">
            <span class="glyphicon glyphicon-chevron-down" data-toggle="childcollapse1"></span>企業会員</a>
            <ul>
                <li class="collapse in" id="demo1">
                <router-link to="/admin/recruiter-list" class="list-group-item list-group-child-item">
                    <span class="fa fa-file-text-o"></span>会員情報⼀覧
                </router-link>
                <router-link to="/admin/job-list" class="list-group-item list-group-child-item">
                    <i class="fa fa-suitcase"></i>求⼈⼀覧
                    </router-link>
                <router-link to="/admin/jobapply-list" class="list-group-item list-group-child-item">
                 <span class="fa fa-users"></span>求人問合わせ/応募者一覧
                </router-link>
                <router-link to="/admin/scouted-list" class="list-group-item list-group-child-item">
                    <span class="fa fa-cog"></span>スカウト済み⼀覧
                </router-link>
                <router-link to="/admin/payment-management" class="list-group-item list-group-child-item">
                    <span class="fa fa-file"></span>⼿数料⼊⾦管理
                </router-link>               
            </li>
            </ul>
        </li>
        <li>     
            <a href="#demo2" class="list-group-item " data-toggle="collapse2"><span class="glyphicon glyphicon-chevron-down" data-toggle="childcollapse2"></span>求職者会員</a>
            <ul>
                <li class="collapse in" id="demo2">
                <router-link to="/admin/jobseeker-list" class="list-group-item list-group-child-item"><i class="glyphicon glyphicon-th-list"></i>会員情報⼀覧</router-link>                         
            </li>
            </ul>
        </li>
        <li class="home"><router-link to="/admin/admin-setting" class="list-group-item list-group-child-item"><i class="glyphicon glyphicon-cog"></i> 設定</router-link></li>  
        <li class="home"><router-link to="/admin/password-setting" class="list-group-item list-group-child-item"><i class="glyphicon glyphicon-lock"></i> パスワード変更</router-link></li>  
        <li class="home"><a to="/" class="list-group-item list-group-child-item" @click.prevent="logout" style="cursor:pointer;"><i class="glyphicon glyphicon-log-out"></i> {{$t('menu.logout')}}</a></li> 
        </ul>         
    <!--end sidebar-->
    </div>
</template>
<script>

export default {
    name: 'app-header',
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.push('/');
        }
    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        }
    }
}
</script>