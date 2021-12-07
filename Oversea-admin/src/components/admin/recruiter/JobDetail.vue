<template>
    <div class="user-main p-0">
        <div class="d-flex align-items-end">
            <h5 class="mb-0 main-header ">{{ recruiter_job.job_number }} <span style="padding-left:5px;">{{ recruiter_job.title }}</span></h5>
            <span @click="$router.go(-1)" class="ml-auto btn back-btn"> 一覧へ戻る </span>
        </div>
       <div class="tab-list">
        <div class="col-12 tab-content">
        <label class="mb-3" v-if="$route.name == 'scout-job'">より、以下の条件で求職者会員をスカウトしました。</label>
        <h5 style="color: rgb(0, 98, 255); font-weight: bold;" v-if="recruiter_job.created != recruiter_job.updated && $route.name != 'scout-job'">{{recruiter_job.updated}}に求人詳細が修正されています</h5>
        <dl class="detail-list">
            <dt class="detail-head" v-if="$route.name == 'scout-job'">募集ポジション</dt>
            <dt class="detail-head" v-else>職種</dt>
            <dd class="detail-data">
                <pre v-if="$route.name != 'scout-job' && recruiter_job.occupation_description != '' && recruiter_job.occupation_description != null">{{ recruiter_job.occupation_description }}</pre>
                <pre v-if="$route.name == 'scout-job' && recruiter_job.scout_occupation_description != '' &&  recruiter_job.scout_occupation_description != null">{{ recruiter_job.scout_occupation_description }}</pre>
                <pre v-if=" (recruiter_job.occupation_description == '' || recruiter_job.occupation_description == null) && $route.name != 'scout-job'"> - </pre>
				<pre v-if=" $route.name == 'scout-job' && (recruiter_job.scout_occupation_description == '' || recruiter_job.scout_occupation_description == null)">  - </pre>
            </dd>
            <dt class="detail-head">雇用形態</dt>
            <dd class="detail-data">
                <div v-for="(result, index) in employment_types" :key="result.id">
                    <input v-if="$route.name != 'scout-job'" type="checkbox" v-bind:value="result.employment_type_name" v-bind:id="result.employment_type_name" class="custom-control-input custom-checkbox"  v-model="recruiter_job.employment_types" disabled />
                    <input v-if="$route.name == 'scout-job'" type="checkbox" v-bind:value="result.employment_type_name" v-bind:id="result.employment_type_name" class="custom-control-input custom-checkbox"  v-model="recruiter_job.scout_employment_types" disabled />
                    <label :for="result.employment_type_name" class="custom-control-label custom-checkbox-label" >{{$t('jobcreate.employment_type['+ index+']')}}</label>
                </div>
            </dd>
            <dt class="detail-head">勤務地詳細</dt>
            <dd class="detail-data">
                <pre v-if="$route.name != 'scout-job' && recruiter_job.job_location != '' && recruiter_job.job_location != null">{{ recruiter_job.job_location }}</pre>
                <pre v-if="$route.name == 'scout-job'  && recruiter_job.scout_job_location != '' && recruiter_job.scout_job_location != null">{{ recruiter_job.scout_job_location }}</pre>
                
                <pre v-if=" (recruiter_job.job_location == '' || recruiter_job.job_location == null) && $route.name != 'scout-job'"> - </pre>
				<pre v-if=" $route.name == 'scout-job' && (recruiter_job.scout_job_location == '' || recruiter_job.scout_job_location == null)">  - </pre>
               
            </dd>
        </dl>
        <dl class="detail-list" v-if="$route.name != 'scout-job'">
            <dt class="detail-head">仕事内容</dt>
            <dd class="detail-data">
                <pre v-if="recruiter_job.job_description != '' && recruiter_job.job_description != null">{{ recruiter_job.job_description }}</pre>
                <pre v-else>-</pre>
            </dd>
            <dt class="detail-head">応募資格</dt>
            <dd class="detail-data">
                <pre v-if="recruiter_job.qualification != '' && recruiter_job.qualification != null">{{ recruiter_job.qualification }}</pre>
                <pre v-else>-</pre>
            </dd>
            <dt class="detail-head">給与・待遇・ビザサポート</dt>
            <dd class="detail-data">
                <pre v-if="recruiter_job.allowance != '' && recruiter_job.allowance != null">{{ recruiter_job.allowance }}</pre>
                <pre v-else>-</pre>
            </dd>
            <dt class="detail-head">勤務開始日</dt>
            <dd class="detail-data" v-if="recruiter_job.job_start_date != '' && recruiter_job.job_start_date != null">{{ recruiter_job.job_start_date }}</dd>
            <dd class="detail-data" v-else>-</dd>
        </dl>
        
        <dl class="detail-list" v-if="$route.name != 'scout-job'">
            <dt class="detail-head">応募先アドレス</dt>
            <dd class="detail-data">
                <pre v-if="recruiter_job.application_address != '' && recruiter_job.application_address != null">{{ recruiter_job.application_address }}</pre>
                <pre v-else>-</pre>
            </dd>
            <dt class="detail-head">求職者へのメッセージ</dt>
            <dd class="detail-data">
                <pre v-if="recruiter_job.message != '' && recruiter_job.message != null">{{ recruiter_job.message }}</pre>
                <pre v-else>-</pre>
            </dd>
            <dt class="detail-head">勤務地 (検索用キーワード)</dt>
            <dd class="detail-data">
                <span v-for="country in countries" :key="country.id">
                    {{ recruiter_job.country_id == country.id ? country.country_name : ''}}
                </span>
            </dd>
            <dt class="detail-head">職種(検索用キーワード)</dt>
            <dd class="detail-data">
                <span v-for="occupation in occupations" :key="occupation.id">
                    {{ recruiter_job.occupation_id == occupation.id ? occupation.occupation_name : ''}}
                </span>
            </dd>
            <dt class="detail-head">その他キーワード (求人情報に表示されます)</dt>
            <dd class="detail-data">
                <div v-for="(keyword, index) in other_keywords" :key="index">
                    <input
                    type="checkbox"
                    :value="keyword"
                    :id="keyword"
                    class="custom-control-input custom-checkbox"
                    v-model="recruiter_job.other_keywords"
                    disabled
                    />
                    <label
                    :for="keyword"
                    class="custom-control-label custom-checkbox-label"
                    >{{ $t('jobcreate.other_keywords['+ index+']') }}</label>
                </div>
            </dd>
            <dt class="detail-head">掲載開始日</dt>
            <dd class="detail-data">{{ recruiter_job.job_post_date }}</dd>
        </dl>
        </div>
       </div>
        <!-- 
            <div class="row">
                <div class="col-md-4">募集ポジション(記入例)チーフディレクター</div>
                <div class="col-md-8">{{ recruiter_job.incharge_name }}</div>
            </div>
            <div class="row">
            <div class="col-md-4">雇用形態(記入例)正社員</div>
            <div class="col-md-8">
                <div v-for="(result, index) in employment_types" :key="result.id">
                    <input type="checkbox" v-bind:value="result.employment_type_name" v-bind:id="result.employment_type_name" class="custom-control-input custom-checkbox"              v-model="recruiter_job.employment_types" disabled />
                    <label
                    :for="result.employment_type_name"
                    class="custom-control-label custom-checkbox-label"
                    >{{$t('jobcreate.employment_type['+ index+']')}}</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">勤務地(記入例)ジャカルタ</div>
            <div class="col-md-8">{{ recruiter_job.job_location }}</div>
        </div>
        <div class="row">
            <div class="col-md-4">仕事の内容</div>
            <div class="col-md-8">{{ recruiter_job.job_description }}</div>
        </div>
        <div class="row">
            <div class="col-md-4">応募資格</div>
            <div class="col-md-8">{{ recruiter_job.qualification }}</div>
        </div>
        <div class="row">
            <div class="col-md-4">給与・待遇・ビザサポート</div>
            <div class="col-md-8">{{ recruiter_job.allowance }}</div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return{
            recruiter_job: {},
            employment_types: [],
            occupations: [],
            countries: [],
            other_keywords: [
                '新卒歓迎', '未経験歓迎', 'シニア歓迎', '本社採用', '語学不問'
            ],
        }
    },

    created() {
        this.getJobInfo();
        // let loading = this.$loading.show();
        // this.$api.get("/recruiter/jobs/" + `${this.$route.params.id}` + "/edit")
        // .then((res) => {
        //     this.recruiter_job = res.data.data;
        //     this.recruiter_job.employment_types = this.recruiter_job.employment_types.split(",");
        //     this.$api.get("/recruiter/getalldata")
        //     .then((response) => {
        //         this.employment_types = response.data.employment;
        //         loading.hide();
        //     })
        // });
    },
    methods : {
        async getJobInfo() {
       
            let loading = this.$loading.show();
            try {
                const response = await Promise.all([
                    this.$api.get("/recruiter/jobs/" + `${this.$route.params.id}` + "/edit"),
                    this.$api.get("/recruiter/getalldata")
                ]);
                
                this.recruiter_job      = response[0].data.data;
                this.employment_types   = response[1].data.employment;
                this.occupations        = response[1].data.occupation;
                this.countries          = response[1].data.country;
                this.recruiter_job.employment_types = this.recruiter_job.employment_types.split(",");
                this.recruiter_job.other_keywords   = this.recruiter_job.other_keywords.split(",");
            } catch (error) {
                console.log(error);
            }
            loading.hide();
        }
    }

    
}
</script>
<style scoped>
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
.detail-list {
    /*padding: 10px 20px 20px 20px;*/
    padding:0px;
    overflow: hidden;
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
.detail-head, 
.detail-data {
    padding: 10px 0 15px 0;
    border-top: 1px solid #ddd;
    line-height: 1.7;
}
.back-btn {
    margin-left: 20px;
}
.custom-checkbox-label{
    margin-left: 10px;
    vertical-align: bottom;
}  
dd pre {
    border: none;
    background: none;
    padding: 0px;
}
</style>