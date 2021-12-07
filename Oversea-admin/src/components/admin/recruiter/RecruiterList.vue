<template>
<div>
    <div class="row">
        <div class="col-sm-6 searchform-one">
            <h5 class="m-b-10 main-header">{{ $t('recruiterlist.recruiter_member_list') }}</h5>
            <div class="form-group col-md-12 p-0">                
                <div class="input-group">
                    <!-- <input type="text" class="form-control"
                        placeholder="会社名、企業コードを⼊⼒してください……" id="inputGroup"/> -->
                    <input type="text" class="form-control" :placeholder="[[$t('recruiterlist.recruiterno') ]]" id="inputGroup" v-model="filteredData.freeword" />
                    <span class="input-group-addon bg-color searchicon-btn" @click="getData();searchClick()">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
            </div>               
            <div class="form-group col-md-12 p-0 mb-0">
                <label for="ステータス">{{ $t('recruiterlist.status') }}</label>    
                <!--status click-->                    
                        <span @click="visible = !visible" ref="tooltip-box" style="cursor:pointer">                   
                            <svg x="0px" y="0px" viewBox="0 0 512 512" style="width: 15px; height: 15px; opacity: 1;"><g>
                            <path class="st0" d="M256,0C114.616,0,0,114.612,0,256s114.616,256,256,256s256-114.612,256-256S397.385,0,256,0z M207.678,378.794
                            c0-17.612,14.281-31.893,31.893-31.893c17.599,0,31.88,14.281,31.88,31.893c0,17.595-14.281,31.884-31.88,31.884
                            C221.959,410.678,207.678,396.389,207.678,378.794z M343.625,218.852c-3.596,9.793-8.802,18.289-14.695,25.356
                            c-11.847,14.148-25.888,22.718-37.442,29.041c-7.719,4.174-14.533,7.389-18.769,9.769c-2.905,1.604-4.479,2.95-5.256,3.826
                            c-0.768,0.926-1.029,1.306-1.496,2.826c-0.273,1.009-0.558,2.612-0.558,5.091c0,6.868,0,12.512,0,12.512
                            c0,6.472-5.248,11.728-11.723,11.728h-28.252c-6.475,0-11.732-5.256-11.732-11.728c0,0,0-5.645,0-12.512
                            c0-6.438,0.752-12.744,2.405-18.777c1.636-6.008,4.215-11.718,7.508-16.694c6.599-10.083,15.542-16.802,23.984-21.48
                            c7.401-4.074,14.723-7.455,21.516-11.281c6.789-3.793,12.843-7.91,17.302-12.372c2.988-2.975,5.31-6.05,7.087-9.52
                            c2.335-4.628,3.955-10.067,3.992-18.389c0.012-2.463-0.698-5.702-2.632-9.405c-1.926-3.686-5.066-7.694-9.264-11.29
                            c-8.45-7.248-20.843-12.545-35.054-12.521c-16.285,0.058-27.186,3.876-35.587,8.62c-8.36,4.776-11.029,9.595-11.029,9.595
                            c-4.268,3.718-10.603,3.85-15.025,0.314l-21.71-17.397c-2.719-2.173-4.322-5.438-4.396-8.926c-0.063-3.479,1.425-6.81,4.061-9.099
                            c0,0,6.765-10.43,22.451-19.38c15.62-8.992,36.322-15.488,61.236-15.429c20.215,0,38.839,5.562,54.268,14.661
                            c15.434,9.148,27.897,21.744,35.851,36.876c5.281,10.074,8.525,21.43,8.533,33.38C349.211,198.042,347.248,209.058,343.625,218.852
                            z" style="fill: rgb(145 145 145);"></path>
                            </g>
                            </svg>                  
                        </span>
                        <span class="bg" v-if="visible" @click="visible=!visible"></span>
                        <span class="tooltip-box" v-if="visible">
                        <table class="tooltiptext">
                            <thead>
                                <tr><th colspan="2" class="tooltip-head">ステータスの説明</th></tr>
                            </thead>
                            <tbody>
                                <tr><td class="w-105">有効</td><td>有効な会員</td></tr>
                                <tr><td class="w-105">停止</td><td>一時的にアカウントの利用を停止している会員</td></tr>
                                <tr><td class="w-105">退会</td><td>退会した会員</td></tr>
                            </tbody>
                        </table>
                     </span>                    
                    <!-- end status click -->  
                <div class="status-row">      
                    <div class="status-col">
                        <label for="有効" class="custom-control-label custom-checkbox-label">
                            <input type="checkbox" class="custom-control-input custom-checkbox" value="1" v-model="filteredData.recruiter_recordstatus" @change="getData()" id="有効" />
                            <span class="custom-check-label-post"> {{ $t('recruiterlist.public') }} </span>
                        </label>
                    </div>
                    <div class="status-col">
                        <label for="停止" class="custom-control-label custom-checkbox-label" >
                            <input type="checkbox" class="custom-control-input custom-checkbox" value="2" v-model="filteredData.recruiter_recordstatus" @change="getData()" id="停止" />
                            <span class="custom-check-label-post"> {{ $t('recruiterlist.stop') }} </span>
                        </label>
                    </div>
                    <div class="status-col">
                        <label for="退会" class="custom-control-label custom-checkbox-label" >
                            <input type="checkbox" class="custom-control-input custom-checkbox" value="3" v-model="filteredData.recruiter_recordstatus" @change="getData()" id="退会" />
                            <span class="custom-check-label-post"> {{ $t('recruiterlist.withdrawal') }} </span>
                        </label>
                    </div>       
                </div>            
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="row d-flex align-items-end">
              <div class="col-sm-6">
                    <span>検索結果表示件数 : {{ totalApply }} 件</span><br>
                    <span>1ページ表示数&nbsp;</span>
                    <select v-model="tableData.length" @change="getData()">
                        <option
                            v-for="(records, index) in perPage"
                            :key="index"
                            :value="records"
                        >{{records}}</option>
                    </select>
              </div>
                <!-- <div class="col-sm-6 select text-right">
                  <span class="btn custom-btn"
                   @click="deleteData()"
                  :disabled="isDisabled">{{ $t('common.delete') }}</span>                   
                </div> -->
            </div>
            <div class="vld-parent w-100" ref="loadingRef">
                <DataTable ref="datatable" :columns="$t('recruiterlist.columns')" :sortKey="sortKey" :sortOrders="sortOrders" @check-all="selectAll" @sort="sortBy" :showCheckbox="false" :totalLength="projects.total">
                    <tbody>
                        <tr v-for="(project, index) in projects.data" :key="project.id">
                            <!-- <td class="text-center">
                                <label class="form-checkbox">
                                    <span v-for="undelete_id in delete_ids_transactions" :key="undelete_id.id">
                                        {{ undelete_id == project.id ? 'Cannot' : ''}}
                                    </span>
                                    <input type="checkbox" :value="project.id" v-model="selected"/>                                    
                                </label>
                            </td> -->
                            <td class="tbl-wm"><router-link :to="{ name: 'recruiter-detail', params: { id: project.id }}">
                                <span>
                                    {{project.recruiter_number}}
                                </span> 
                            </router-link></td>
                            <td class="text-left wxl-num-txt-wrap"><router-link :to="{ name: 'recruiter-detail', params: { id: project.id }}"><span>{{project.recruiter_name}} <span v-if="project.login_locked" class="still-lock-label" >ロック中</span></span></router-link></td>
                            <!-- <td class="text-left wxl-num-txt-wrap"><router-link :to="{ name: 'recruiter-detail', params: { id: project.id }}">{{project.recruiter_nick_name}}</router-link></td> -->
                            <td class="tbl-wm">
                                <router-link :to="{ name: 'recruiter-detail', params: { id: project.id }}">
                                    <span>
                                        {{project.email}}
                                    </span> 
                                </router-link>
                            </td>
                            <td class="tbl-scout">
                                <div class="scout-box">
                                    <p class="scout-txt" >
                                    <span v-for="status in arr_status" :key="status.id.id">
                                            {{project.record_status == status.id.value ? status.id.display : ''}}
                                    </span>
                                    </p>
                                    <p class="btn btn-common" v-on:click="showToggle(index)"  v-if="project.record_status != 3">
                                        {{$t('common.change')}}
                                        <span class="down-icon">&#9662;</span>
                                    </p>
                                    <div class="scout-toggle" :id="'scout-status'+index" v-bind:class="{'scout-expand': (current === index) && (status == true)}">
                                        <p class="custom-radio-group mr-3" v-for="status in arr_status" :key="status.id.id">
                                            <input type="radio" :id="status.id.display+index" v-model="project.record_status" class="custion-radio"
												@change="changeStatus(project.id, status.id.value)" :value="status.id.value">
                                            <label :for="status.id.display+index" class="custom-radio-lable status-lable" @click="hideToggle">{{ status.id.display }}</label>
                                        </p>
                                    </div>
                                </div>
                            </td>                            
                            <td class="tbl-btn">
                                <span v-if="project.record_status != 3" class="mw-60px">
                                    <span class="btn btn-default" @click="edit(project.id)">{{ $t('common.edit')}}</span>
                                    <!-- <router-link :to="'/admin/recruiter-list/' + project.id + '/edit'"  class="btn btn-default">{{ $t('common.edit')}}</router-link> -->
                                </span>
                                
                            </td>
                        </tr>
                       
                    </tbody>
                    
                </DataTable>
                <!-- <div v-if="projects.length === 0" class="no-data-txt-border">
                    <h5 class="main-header text-center">{{ $t('common.no_data_found')}}</h5>
                </div> -->
                <div v-if="projects.data">
                    <div v-if="projects.data.length == 0 && search_status == 'filter'" class="no-data-txt-border">
                        <h5 class="main-header text-center">{{ $t('common.no_data_found')}}</h5>
                    </div>
                    <div v-if="projects.data.length == 0 && search_status == null" class="no-data-txt-border">
                        <h5 class="main-header text-center">{{ $t('common.no_data_found_message')}}</h5>
                    </div>
                </div>
            </div>
            <pagination v-if="projects.length != 0" :data="projects" @pagination-change-page="getData" :limit="limitpc" >
                <span slot="prev-nav">
                    <i class="fa fa-angle-left"></i> 前へ
                </span>
                <span slot="next-nav">
                    次へ
                    <i class="fa fa-angle-right"></i>
                </span>
            </pagination>
        </div>
    </div>
</div>
</template>
<script>
import DataTableServices from "../../DataTable/DataTableServices";

export default {
    mixins: [DataTableServices],
    data() {
        let sortOrders = {};
        // let columns = [
        //     // {label: "求職者会員番号", name: "recruiter_number" },
        //     // {label: "求職者名", name: "recruiter_name" },
        //     // {label: "会社名(愛称)", name: "recruiter_nick_name"},
        //     // {label: "ステータス", name: "recruiter_recordstatus" },
        //     // {label: "", name: "status_button" }
        // ];
        let columns = this.$i18n.messages.English.recruiterlist.columns;
        columns.forEach((column) => {
            sortOrders[column.label] = -1;
        });
        let filteredData = {
            freeword: "",
            recruiter_recordstatus: [],
        };
        return { 
            visible:false,
            search_status: null,
            confirm:'',
            data:'test',
            base_url: "/admin/recruiter-list",
            columns: columns,
            sortOrders: sortOrders,
            filteredData: filteredData,
            current: null,
            old_index:'',
            status:false,
            arr_status: [
                { id: this.$configs.recruiter.public, checked: false },
                { id: this.$configs.recruiter.private, checked: false },
                { id: this.$configs.recruiter.stopped, checked: false },
            ],
            paginate:{
                pageCount:1,
                pageName:'',
            }
        };
    },
    mounted(){
        if (!window.socket.connected) {
			window.socket.connect()
        }
        let page = this.$store.getters.page.pageCount
        if(page){
            this.getData(page)
        }

    },
    computed:{
        isDisabled() {
            //if dont select any row, set disable delete button
            return this.selected.length > 0 ? false : true;
        },
        totalApply: function() {
                return this.$data.projects.total;
        },        
    },

    methods: {
        edit(id){
            let getpage = this.projects.to > this.projects.from ? this.projects.current_page : 1;
            this.paginate.pageCount = getpage
            this.paginate.pageName = 'RecruiterEdit'
            this.$store.commit('page',this.paginate)
            this.$router.push({path:'/admin/recruiter-list/'+id+'/edit'})
            
        },
        searchClick() {
            this.search_status = 'filter';
        },
        changeStatus(id, status) {
            let statusVal = (status == 1? '有効': (status == 2 ? '停止' : '退会'));
            this.$alertService.showConfirmDialog(null, this.$tc('alertMessage.change_confirm_message', statusVal, { n:statusVal }), this.$t('common.yes'), this.$t('common.no'))
            .then((dialogResult) => {
                if(dialogResult.value){
                    let statusData = {};
                    this.$set(statusData, "id", id);
                    this.$set(statusData, "status", status);
                    this.$api.post(this.base_url + `/change-status`, statusData)
                    .then(response => {
                            console.log("changeStatus", response.data);
                            let getpage = this.projects.to > this.projects.from ? this.projects.current_page : 1;
                            this.getData(getpage);
                            window.socket.emit("deactived", [id,'recruiter']);
                        })
                        .catch(errors => {
                            console.log(errors);
                        });
                }else{

                    this.getData(this.projects.current_page);
                }
            });
        },

        showToggle(index) {
            this.current = index;
			if(this.status == true) {
                if(this.current == this.old_index)
                    this.status = false;
			} else {
				this.status = true;
			}
			this.old_index = index;
        },

		hideToggle() {
			this.status = false;
		},
    },
   
};
</script>
<style lang="scss" scoped>
.mw-60px {
	display: inline-block;
	min-width: 60px;
}
.table-check >thead:last-child>th:last-child>th{
    min-width: 60px;
}
.scout-toggle {
    top: auto;
}
.content-row .row{
    margin-bottom: 10px;
}
.text-red{
    color:red;
}


.tooltip {
    width: 500px;
    background-color: #5cb1ab;
    color: #fff;   
    border-radius: 6px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
}
.tooltip-box .tooltiptext {     
    visibility: visible;
    background-color: rgba(94,94,99,1);
    color: #fff;
    text-align: center;
    word-break: break-word;
    border: 1px solid #363030ee;
    border-radius: 5px;
    padding: 20px;
    position: absolute;
    z-index: 33;
    bottom: 110%;
    opacity: 0.9;
    min-width: 517px;
    text-align: left;
    margin-left: 0px;
}
.tooltip-box .tooltiptext::after{
    display: none;
}
.tooltip-box table{
    border-collapse: initial !important;
}
.tooltip-box table tr{
    vertical-align: top;
    background: none !important;
}
.tooltip-head{
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
}

.w-105{
    width: 105px;
}
.bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  transition: .3s;
}

</style>