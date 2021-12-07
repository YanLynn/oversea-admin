<template>
    <div class="user-main p-0">  
        <div class="d-flex align-items-end">
        <h5 class="main-header mb-0">企業プロフィール詳細<span style="color:red;">{{ recruiter_info.record_status == 3 ? '退会' : '' }}</span></h5> 
        <span @click="$router.go(-1)" class="ml-auto btn back-btn">一覧へ戻る </span> 
        </div>
        <div class="tab-list">
            <div class="col-12 tab-content">
                <dl class="detail-list ">
                    <dt class="detail-head detail-group-topline mt-0">企業の登記地</dt>
                    <dd class="detail-data detail-group-topline mt-0">{{ recruiter_info.registered_place_type == 'oversea' ? '海外企業' : '国内企業' }}</dd>
                    <dt class="detail-head">企業会員番号</dt>
                    <dd class="detail-data">{{ recruiter_info.recruiter_number }}</dd>
                    <dt class="detail-head">企業名</dt>
                    <dd class="detail-data">{{ recruiter_info.recruiter_name }}</dd>
                    <dt class="detail-head detail-group-topline">設立年月</dt>
                    <dd class="detail-data detail-group-topline">
                        <span v-if="recruiter_info.establishment_date != '' && recruiter_info.establishment_date != null">
                            {{ recruiter_info.establishment_date }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">代表者名</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.representative_name != '' && recruiter_info.representative_name != null">
                            {{ recruiter_info.representative_name }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">従業員数</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.num_of_employees != '' && recruiter_info.num_of_employees != null">
                            {{ recruiter_info.num_of_employees }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">事業内容</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.business_description != '' && recruiter_info.business_description != null">
                            {{ recruiter_info.business_description }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">所在地</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.address != '' && recruiter_info.address != null">
                            {{ recruiter_info.address }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">電話番号 1</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.phone1 != '' && recruiter_info.phone1 != null">
                            {{ recruiter_info.phone1 }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">電話番号 2</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.phone2 != '' && recruiter_info.phone2 != null">
                            {{ recruiter_info.phone2 }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">ご担当者様メールアドレス</dt>
                    <dd class="detail-data">
                        {{ recruiter_info.email }}
                    </dd>
                    <dt class="detail-head">WEB サイト URL</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.website != '' && recruiter_info.website != null">
                            <a :href="recruiter_info.website" target="_blank">{{ recruiter_info.website }}</a>
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head detail-group-topline">ご担当者名</dt>
                    <dd class="detail-data detail-group-topline">
                        <span v-if="recruiter_info.incharge_name != '' && recruiter_info.incharge_name != null">
                            {{ recruiter_info.incharge_name }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">担当者名(フリガナ)</dt>
                    <dd class="detail-data">
                        <span v-if="recruiter_info.incharge_name_furigana != '' && recruiter_info.incharge_name_furigana != null">
                            {{ recruiter_info.incharge_name_furigana }}
                        </span>
                        <span v-else>未入力</span>
                    </dd>
                    <dt class="detail-head">秘密の質問</dt>
                    <dd class="detail-data">{{ recruiter_info.question }}</dd>
                    <dt class="detail-head">秘密の質問の答え</dt>
                    <dd class="detail-data">{{ recruiter_info.answer }}</dd> 
                </dl>
                <div class="row col-xs-12 p-0">
                    <div class="col-md-6 col-sm-6">
                        <h6 class="text-label-color">会社ロゴ</h6>
                            <div class="img-block">
                                <img :src="recruiter_info.logo_url" class="img-fluid img-contain"  alt="Recruiter Logo" />
                            </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <h6 class="text-label-color">担当者顔写真（スカウトした人材のみ閲覧可）</h6>   
                            <div class="profile-box-l">
                                <img :src="recruiter_info.incharge_photo_url" class="img-fluid img-contain"  alt="Recruiter Incharge Photo"/>
                            </div>        
                    </div>
                </div>
                <div class="row col-xs-12 p-0">
                    <div class="col-sm-6 col-md-6">
                        <h6 class="text-label-color">関連画像</h6>
                        <div class="row col-md-12 p-0 m-0" v-if="recruiter_info.related_images">
                            <div v-for="(image,index) in recruiter_info.related_images" :key="image.id" class="col-sm-6 mb-3 related-block img-cursor" @click="imagePopup(image.file_url)">
                                <img v-if="hasRelatedImage(index) " :src="image.file_url" class="img-fluid img-contain" :alt="'Recruiter related image'+(index+1)" />                                  
                            </div>
                            <div class="col-sm-6 mb-3 related-block" v-for="n in 4 - recruiter_info.related_images.length" :key="n.id">
                                <img :src="defaultImageUrl" class="img-fluid img-contain" alt="Recruiter related image 4" />								
                            </div>
                        </div>
                            <!-- popup images-->                                
                            <transition name="fade">
                                <div class="img-modal-wrapper" v-if="showModal">
                                <div class="img-modal-block">
                                    <div class="img-modal-container">
                                        <button class="cross-btn" @click="showModal = false">
                                                <i class="fa fa-times pr-1"></i>閉じる</button>                                            
                                        <img :src="this.imgUrl" class="img-popup"/>                                        
                                    </div>
                                </div>
                            </div>
                        </transition>                                
                        <!--end popup images-->
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <h6 class="text-label-color">関連画像</h6>    
                            <div v-if="!recruiter_info.video" class="movie-wrapper">
                                <p class="no-video movie-link">
                                <!-- <i class="fa fa-exclamation-circle" aria-hidden="true"></i> 動画は利用できません -->
                                    <img src="/images/youtube.png" alt="動画なし" class="img-fluid">  
                                </p>
                            </div>
                        
                            <div v-else class="movie-wrapper">
                                    <iframe class="movie-link" :src="recruiter_info.video_url" frameBorder="0" width="530" height="315"></iframe>
                            </div>
                    </div>
                </div>
                
                <h6 class="text-label-color row col-xs-12">会社 PR 等</h6>
                <div class="row p-0 about-row mt-0">
                    <div class="col-md-12">                           
                        <pre>{{ recruiter_info.company_pr }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            recruiter_info : '',
            showModal:false,
            defaultImageUrl:'',
        }
    },

    created() {
        let loading = this.$loading.show();

        this.$store.dispatch('user_image');	
        this.$api.get('/default-image')
        .then(r => { this.defaultImageUrl = r.data.data; });
        
        this.$api.get("/recruiter/recruiters/" + `${this.$route.params.id}` + "/edit").then(r => {
            console.log("recruiter_info",r.data);
            this.recruiter_info = r.data.data;
            loading.hide()
        })
        .catch((e) => {     
            console.log("errors",e);
        })
        .finally(() => loading.hide());
    },
    methods:{
        hasRelatedImage(index) {
			return this.recruiter_info.related_images && this.recruiter_info.related_images[index];
        },
        imagePopup(url) {
            if(url.includes('images/default.png' || url.includes('images/no_public.png'))){
                return false;
            }
            else{
                this.showModal =  true;
                this.imgUrl = url;
            }
          
        },
    }
}
</script>

<style scoped>
/*.recruiter-profile-detail {
    min-height: 650px;
 }*/
 .tab-list{
    margin: 20px 0;
    padding: 0;
    background: #fff;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: 1px solid #f3efef;
}
 .tab-content {
    padding: 50px 30px;
    background: #fff;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 5px !important;
    border: 1px solid #f3efef;
}
.detail-group-topline {
    border-top: 1px solid #0062ff !important;
    margin-top: 30px;
}
.detail-list {
     /*padding: 10px 20px 20px 20px;*/
    padding:0px;
    overflow: hidden;
}
.detail-head,
.detail-data {
  padding: 10px 0 15px 0;
  border-top: 1px solid #ddd;
  line-height: 1.7;
}
.detail-head {
  display: flex;
  float: left;
  width: 34%;
  margin-right: 3%;
  align-items: flex-start;
  font-weight: normal;
}
.detail-data {
  float: left;
  width: 63%;
  background-color: #fff;
  min-height: 50px;
}
.back-btn {
    margin-left: 20px;
}

.related-block {
    display: flex;
    align-items: center;
    max-width: 47%;
    height: 155px;
    margin: 0 3% 3% 0;
        margin-bottom: 3%;
    padding: 10px;
    border: 1px solid #dee2e6 !important;
    border-radius: 0.25rem;
}

.img-contain {
    width: 100%;
    height: 100% !important;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}
.img-block {
    width: 200px;
    height: 150px;
    border: 1px solid #ddd;
    text-align: center;
    padding: 10px;
}
.profile-box-l .img-contain {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
}

.profile-box-l {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 240px;
    padding: 10px;
    border: 1px solid #ddd;
}
.movie-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    padding-top: 0px;
    overflow: hidden;
}
.movie-link {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    border: none;
}
.movie-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.img-modal-wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    z-index: 10001;
}

.img-modal-wrapper .img-modal-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 950px;
    height: 80vh;
    transition: all 0.3s ease;
    text-align: center;
}

.img-popup {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}

.img-modal-wrapper .img-modal-container {
    height: 100%;
}

.img-modal-wrapper .cross-btn {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 16px;
    background: #999;
    padding: 4px 10px;
    border-radius: 50px;
    color: #fff;
    border: 1px solid;
}

.no-video-wrapper{
    display: flex;
    background: #000;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 20px;
    color: #fff;
}
.no-video {
    display: flex;
    background: #f0f0f0;
    justify-content: center;
    align-items: center;    
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.no-video .fa {
    font-size: 25px;
    margin-right: 10px;
}
</style>