<template>
    <div class="user-main p-0">
        <div class="d-flex align-items-end">
            <h5 class="mb-0 main-header" v-if="$route.name == 'jobseeker-detail'">詳細情報</h5> 
            <h5 class="mb-0 main-header" v-if="$route.name == 'JobseekerEdit'">プロフィール編集</h5> 
             <span @click="backBtn()" class="ml-auto btn back-btn">一覧へ戻る</span>
        </div>      
            <div class="col-12 tab-list sticky-top" v-if="showHide" v-on:scroll="handleScroll">
                <ul class="tab-list-row">   
                    <li v-for="(item, index) in items" class="list-item" :key="index.id">                                          
                        <a  v-scroll-to="{el:'#'+(item,index),offset:-100}"                         
                        :class="{isActive: activeIndex === index ? 'active':''}"                       
                        class="list-link">{{ item.text }}</a> 
                    </li>
                </ul>  
            </div>    
        <JobseekerProfile  @menuShowHide="changeMenu"></JobseekerProfile>
    </div>
</template>
<script>
    import JobseekerProfile from "../jobseeker/JobSeekerProfile";
    function elementInViewport(el) {
        var top = el.offsetTop;
        var height = el.offsetHeight;
        var bottom = top + height;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
        }

        return (
            !(top < window.pageYOffset && bottom < window.pageYOffset) &&
            !(top > (window.pageYOffset + (window.innerHeight)) && bottom > window.pageYOffset + (window.innerHeight))
        );
    }
    export default {
        components: { JobseekerProfile },
        props: ['isActive'],
        data(){
             return{               
                  items: {
                     selfIntroEdit:{text:'自己紹介'},
                     basicInfoEdit:{text:'基本情報'},
                     careerEdit:{text:'経歴'},
                     expQualificationEdit:{text:'経験・資格'},
                     desiredConditionEdit:{text:'希望条件'},                             
                 },    
                 activeIndex: null,  
                 showHide: true
            }
        },
        created(){
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods:{
            backBtn(){
                 let paginate = {
                     pageCount: this.$store.getters.page.pageCount,
                     pageName : 'jobseekerList'
                 }
                 this.$store.commit('page',paginate)
                 this.$router.go(-1)
            },
              handleScroll () {           
                 let id = ['careerEdit','expQualificationEdit','desiredConditionEdit','selfIntroEdit','basicInfoEdit']
                 const elementsInViewArray = id.map(String => {
                 const el = document.getElementById(String);
                 if(elementInViewport(el)) {
                    return String;
                    }
                 });
                
                 this.activeIndex = elementsInViewArray.find(String => String) 
            },
            changeMenu(load){
                this.showHide = load;
            }  
        
          
        }
        
    }
</script>
<style scoped>
.tab-list-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;
}
.tab-list-row > .list-item:first-child {
    padding-left: 30px !important;
}
.isActive{
    color: #0062ff !important;
    font-weight: bold;
    border-bottom: 1px solid #0062ff; 
}
.tab-list {
    margin: 20px 0;
    padding: 0;
    background: #fff;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: 1px solid #f3efef;
}
.tab-list .list-item {
    padding: 20px 40px;
    list-style: none;
}
.list-link {
    color: #3377b2;
    cursor: pointer;
}
.sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 60px;
    width: 100%!important;
    z-index: 1020;
}
.tab-content {
    padding: 50px 20px;
    background: #fff;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 5px !important;
    border: 1px solid #f3efef;
}
.back-btn {
    border-color: #aab2bd;
    background-color: #aab2bd;
}
</style>
