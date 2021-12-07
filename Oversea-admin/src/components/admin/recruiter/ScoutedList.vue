<template>
    <div>
        <div class="row">
            <div class="col-sm-12 searchform-one">
                <!--advanced search-->
                <h5 class="m-b-10 main-header">{{ $t('scouted_list.title') }}</h5>
                <div class="content-row m-0">
                <div class="inner-wrapper">
                    <div class="row">
						<div class="col-md-3">
                            <label for="管理番号">{{ $t('common.management_no') }}</label>
                            <input type="text" placeholder="管理番号" class="form-control" v-model.trim="filteredData.management_number">
                        </div> 
                        <div class="col-md-3">
                            <label for="企業会員番号">{{ $t('common.recruiter_id') }}</label>
                            <input type="text" placeholder="企業会員番号" class="form-control" v-model.trim="filteredData.recruiter_id">
                        </div>
                        <div class="col-md-3">
                            <label for="企業名">{{ $t('common.recruiter_name') }}</label>
                            <input type="text" placeholder="企業名" class="form-control" v-model.trim="filteredData.recruiter_name">
                        </div>
						
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <label for="求人番号">{{ $t('common.job_number') }}</label>
                            <input type="text" placeholder="求人番号" class="form-control" v-model.trim="filteredData.job_number">
                        </div>
                        <div class="col-md-3">
                            <label for="求人タイトル">{{ $t('common.job_title') }}</label>
                            <input type="text" placeholder="求人タイトル" class="form-control" v-model.trim="filteredData.job_title">
                        </div>
						<div class="col-md-3">
                            <label for="求職者会員番号">{{ $t('common.jobseeker_number') }}</label>
                            <input type="text" placeholder="求職者会員番号" class="form-control" v-model.trim="filteredData.jobseeker_number">
                        </div>
                        <div class="col-md-3">
                            <label for="求職者氏名">{{ $t('common.jobseeker_name') }}</label>
                            <input type="text" placeholder="求職者氏名" class="form-control" v-model.trim="filteredData.jobseeker_name">
                        </div>
                    </div>
                    <div class="row mb-0">                       
                        <div class="col-md-6"> <label for="スカウト日時">{{ $t('scouted_list.scout_date') }}</label></div>                        
                    </div>
                    <div class="row">
                    <div class="date-row">
                        <div class="col-md-3 datepicker-wrapper">                            
                            <date-picker v-model="filteredData.from_date" valueType="format" class="datepicker" :lang="lang" placeholder="年 - 月 - 日"></date-picker>
                        </div>						             
                        <div class="col-md-3 datepicker-wrapper similarto position-relative">                         
                            <date-picker v-model="filteredData.to_date" valueType="format" class="datepicker" :lang="lang"  placeholder="年 - 月 - 日"></date-picker>
                        </div>
                   
                        <div class="col-md-6 text-right">
                            <button class="btn searchbtn" @click="getData();searchClick()">{{ $t('common.search') }}</button>
                        </div>
                    </div>
                    </div>
                </div>
                    <!-- Search by Status -->
                    <label for="ステータス">{{ $t('common.status') }}</label>
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
                        <tr><td class="w-105">興味あり</td><td>求職者会員がスカウトに興味を示した状態。</td></tr>
                        <tr><td class="w-105">不採用/辞退</td><td>企業会員からの不採用又は求職者会員の辞退。</td></tr>
                        <tr><td class="w-105">内定済未請求</td><td>企業会員からの内定の連絡があったが、手数料を未請求。</td></tr>
                        <tr><td class="w-105">請求済</td><td>企業会員に手数料を請求済。</td></tr>
                        <tr><td class="w-105">入金確認済</td><td>企業会員からの手数料の入金を確認済。</td></tr>
                     </tbody>
                     </table>
                     </span>                    
                    <!-- end status click -->
                    <div class="status-row">                        
                        <div class="" v-for="status in arr_status" v-bind:key="status.id">
                        <label class="custom-control-label custom-checkbox-label" v-if="status.id != '期限切れ'">
                            <input type="checkbox" name="scout-status" class="custom-control-input custom-checkbox" :value="status.id" :checked="status.checked" v-model="filteredData.scout_status" @change="getData()">
                            <span class="custom-check-label-post" style="margin-right:20px;">{{status.id}}</span>
                        </label>
                        </div>                        
                    </div>

					<div class="status-row" style="margin-bottom: 15px;">
						<div class="status-col tooltip-box">
                            <label for="status_stop" class="custom-control-label custom-checkbox-label">
								<input
									type="checkbox"
									class="custom-control-input custom-checkbox"
									name="recruiter_status_stop"
									id="status_stop"
									v-model="filteredData.recruiter_status_stop"
									@change="getData()"
									value="停止"
								/>
								<span class="custom-check-label-post">停止した会員のデータも表示</span>
							</label>
							
							  <!--<span class="tooltiptext">退会した会員のデータも表示</span>-->
						</div>
					</div>
					<div class="status-row">
						<div class="status-col tooltip-box">
							<label for="status_deactivate" class="custom-control-label custom-checkbox-label">
								<input
									type="checkbox"
									class="custom-control-input custom-checkbox"
									name="recruiter_status_deactivate"
									id="status_deactivate"
									v-model="filteredData.recruiter_status_deactivate"
									@change="getData()"
									value="退会"
								/>
								<span class="custom-check-label-post">退会した会員のデータも表示</span>
							</label>
							
							  <!--<span class="tooltiptext">退会した会員のデータも表示</span>-->
						</div>
					</div>
                </div>
                <!--end advanced search-->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-12 select text-left">
                        <span>{{ $t('common.total_results') }}: {{ $tc('common.item', totalScouts, { n:totalScouts }) }}</span><br>
                        <span>1 {{ $t('common.displayed_page') }}&nbsp;</span>
                        <select v-model="tableData.length" @change="getData()">
                            <option v-for="(records, index) in perPage" :key="index" :value="records">
                                {{records}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="tbl-wrap">
                <DataTable ref="datatable" :columns="$t('scouted_list.columns')" :sortKey="sortKey" :showCheckbox="false" :sortOrders="sortOrders" @sort="sortBy" :totalLength="projects.total">
                    <tbody ref="loadingRef">
                        <tr v-for="(project, index) in projects.data" :key="project.id">
                            <!-- <td class="tbl-w100">{{project.management_number}}</td> -->
                            <td class="tbl-w100">
								<router-link :to="{ name: 'scout-job', params: {id: project.job_id}}">
									{{project.management_number}}
								</router-link>
							</td>
                            <td class="tbl-date"><p class="tbl-80 m-auto">{{project.scouted_date}}</p></td>                           
                            <!-- <td><router-link :to="{ path: '/admin/recruiter-list/recruiter/'+ project.recruiter_id +'/detail'}">{{project.recruiter_number}}</router-link></td>
                            <td><router-link :to="{ path: '/admin/recruiter-list/recruiter/'+ project.recruiter_id +'/detail'}">{{project.recruiter_name}}</router-link></td> -->
                            <td class="text-left wxl-num-txt-wrap tbl-wxl">
                             <router-link class="d-flex" :to="{ path: '/admin/recruiter-list/recruiter/'+ project.recruiter_id +'/detail'}">
                                {{project.recruiter_number}} 
                                <span class="ml-2 txt-vertical-ellipsis-1 w-100">{{project.recruiter_name}}</span>
                            </router-link>                           
                            </td>                            
                            <!-- <td><router-link :to="{ path: '/job-list/'+ project.job_id +'/detail'}">{{project.job_number}}</router-link></td>
                            <td><router-link :to="{ path: '/job-list/'+ project.job_id +'/detail'}">{{project.title}}</router-link></td> -->
                            <!-- <td class="tbl-w110"><router-link :to="{ path: '/job-list/'+ project.job_id +'/detail'}">{{project.job_number}}</router-link></td> -->
							<td class="text-left wxl-num-txt-wrap tbl-wxl">
                                <router-link class="d-flex" :to="{ path: '/job-list/'+ project.job_id +'/detail'}">
									{{project.job_number}}
									<!-- <span class="txt-vertical-ellipsis-2">{{ project.title }}</span> -->
									<span class="ml-2 txt-vertical-ellipsis-1 w-100">{{project.title}}</span>
								</router-link>
                            </td>                            
                            <td class="text-left wxl-num-txt-wrap tbl-wxl">
                            <router-link class="d-flex" :to="{ path: '/admin/jobseeker-list/jobseeker/'+ project.jobseeker_id +'/detail'}">
                                {{project.jobseeker_number}}
                                <span class="ml-2 txt-vertical-ellipsis-1 w-100">{{project.jobseeker_name}}</span>
                            </router-link>
                            </td>
                            <td class="tbl-scout p-realtive">
                                <div class="scout-box">
                                    <p class="scout-txt">{{project.scout_status}} </p>
                                     <p class="btn btn-common" v-if="project.scout_status != '入金確認済'" v-on:click="showToggle(index)">
                                        {{$t('common.edit')}}
                                        <span class="down-icon">&#9662;</span>
                                    </p>
                                    <div v-if="project.scout_status != '入金確認済'" class="scout-toggle"  :id="'scout-status'+index" v-bind:class="{'scout-expand': (current === index) && (status == true)}">
                                        <p class="custom-radio-group mr-3"  v-for="status in arr_status" v-bind:key="status.id">
                                            <input type="radio" :id="status.id+index" v-model="project.scout_status" class="custion-radio"
												@change="onStatusChange(index, $event, project.recruiter_id, project.registered_place_type)" :value="status.id" v-if="status.id != '期限切れ'">
                                            <label :for="status.id+index" class="custom-radio-lable status-lable" @click="hideToggle" v-if="status.id != '期限切れ'">{{ status.id }}</label>
                                        </p>
                                    </div>

                                </div>
                            </td>
                            <td class="tbl-btn">
                                <span class="btn btn-default mb-1" @click="startChat(project)" v-if="allowChat(project.scout_status)">{{$t('common.chat')}}</span>
                                <!-- <span class="btn btn-default mb-1" @click="confirmPayment(project.id, index)" v-if="allowPaymentConfirm(project.scout_status)">{{$t('common.payment_confirm')}}</span> -->
                                <span class="btn btn-default mb-1" @click="generateBill(project.id, index)" v-if="allowBilling(project.scout_status) && project.registered_place_type == 'local'">{{$t('common.invoice_generate')}}</span>
								<span class="btn btn-default" @click="credit(project.id, index)" v-if="allowBilling(project.scout_status) && project.registered_place_type == 'oversea'">{{$t('common.credit')}}</span>
                                <!-- <div class="toggle" v-if="project.recordstatus != 0">
                                    <span class="checkbox">
                                        <input
                                            type="checkbox"
                                            :id="project.id"
                                            v-if="project.recordstatus == 1"
                                            @click="changeStatus(project.id,project.recordstatus)"
                                            checked
                                        />
                                        <input
                                            type="checkbox"
                                            :id="project.id"
                                            v-if="project.recordstatus == 2"
                                            @click="changeStatus(project.id,project.recordstatus)"
                                        />
                                        <label for="checkbox"></label>
                                        <span v-if="project.recordstatus == 1" class="on">有効</span>
                                        <span v-if="project.recordstatus == 2" class="on">無効</span>
                                    </span>
                                </div> -->
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
                <pagination v-if="projects.length != 0" :data="projects" @pagination-change-page="getData" :limit="limitpc">
                    <span slot="prev-nav">
                        <i class="fa fa-angle-left"></i> 前へ
                    </span>
                    <span slot="next-nav">
                        次へ <i class="fa fa-angle-right"></i>
                    </span>
                </pagination>

            </div>
        </div>

		<modal v-if="showModal" @close="showModal = false">	
        	<!-- <div>{{invoiceForm}}</div> -->
                <div slot="header" class="model-form text-center">
                <h3>クレジットカード請求</h3>                  
                </div>
				<div slot="body" class="model-form"> 
                    <div class="scout-block">      
					<h4>{{$t('credit.scouts')}}</h4>					
                        <dl class="col-md-12">
                            <dt class="col-md-4 text-right"><label >{{$t('credit.control_number')}}</label></dt>
                            <dd class="col-md-8"><span>{{ invoiceForm.management_number }}</span></dd>
                        </dl>
                        <dl class="col-md-12">
                            <dt class="col-md-4 text-right"><label >{{$t('credit.title')}}</label></dt>
                            <dd class="col-md-8"><span class="txt-vertical-ellipsis-2 text-break">{{ invoiceForm.title }}</span></dd>
                        </dl>
                    </div>         

                    <div class="scout-block">  
					<h4>{{$t('credit.billing_company')}}</h4>
                    
                    <dl class="col-md-12">
                        <dt class="col-md-4 text-right"><label >{{$t('credit.membership_number')}}</label></dt>
                        <dd class="col-md-8"><span>{{invoiceForm.recruiter_number}}</span></dd>
                    </dl>
                    <dl class="col-md-12">
                        <dt class="col-md-4 text-right"><label >{{$t('credit.company_name')}}</label></dt>
                        <dd class="col-md-8"><span class="txt-vertical-ellipsis-2 text-break">{{invoiceForm.recruiter_name}}</span></dd>
                    </dl>	
                    </div>

                    <div class="scout-block mb-0">
					<h4>{{$t('credit.billing_amount')}}</h4>
                    <dl class="col-md-12">
                        <dt class="col-md-4 text-right"><label class="currency-label">仲介手数料</label></dt>                        
                        <dt class="col-md-7">                            
                            <input type="text" :class="['form-control text-right', $v.invoiceForm.default_amount.$error ? 'is-invalid' :'']" v-model="$v.invoiceForm.default_amount.$model">
                        </dt>
                        <dd class="col-md-1 p-0"><span class="currency-label">円</span></dd>
                    </dl>	

                    <dl class="col-md-12">
                        <dt class="col-md-4 text-right"> {{ $t('common.tax') }}</dt>
                        <dt class="col-md-7"> 
                            <p class="text-right p-r-10">{{ Number(invoiceForm.tax).toLocaleString() }} </p>
                        </dt>
                        <dd class="col-md-1 p-0">円</dd>
                    </dl>	

                    <dl class="col-md-12"  style="color:#0062ff;">
                        <dt class="col-md-4 text-right"> {{ $t('common.invoice_amount') }} </dt>
                        <dt class="col-md-7">                        
                          <p class="text-right p-r-10">{{ Number(invoiceForm.invoice_amount).toLocaleString() }} </p>                                                     
                        </dt>
                        <dd class="col-md-1 p-0">円</dd>
                    </dl>	
                    </div>					
                    <div class="invalid-feedback">
                        <div class="error" v-if="!$v.invoiceForm.default_amount.required">金額は必須です</div>
                        <div class="error" v-if="!$v.invoiceForm.default_amount.numeric">半角数字で入力してください</div>
                    </div>
				</div>
				<div slot="footer">
                    <div class="footer-btn-right">
                        <button class="btn searchbtn btn-sm" @click="creditRequest">{{$t('credit.claim')}}</button>
                    </div>
                    <div class="footer-btn-left">
                        <button class="btn back-btn btn-sm" @click="showModal = false">{{$t('credit.cancel')}}</button>
                    </div>
				</div>
		</modal>

		<!-- Modal content -->
		<div id="myModal" :class="['modal',requireInvoiceForm ? 'modal-open' : 'modal-close' ]">
			<div class="modal-content">
				<!-- <span class="close" @click="closeInvoiceModal">&times;</span> -->
				<!-- <p class="close-ico" @click="closeInvoiceModal">
					<span class="glyphicon glyphicon-remove"></span>
				</p> -->
				<div class="container-fluid vld-parent" ref="invoicePreviewContainer">
					<div class="row">
						<div class="col-sm-6 invoice-data">
							<div class="border">
								<h4>{{ $t('common.job') }}</h4>
								<dl class="row mb-4">
									<dt class="col-sm-5 scouted-list">{{ $t('scouted_list.columns.0.name') }}</dt>
									<dd class="col-sm-7">{{ invoiceForm.management_number }}</dd>
									<dt class="col-sm-5 scouted-list">求人タイトル</dt>
									<dd class="col-sm-7">{{ invoiceForm.title }}</dd>
								</dl>
								<h4>{{ $t('common.billing_recruiter') }}</h4>
								<dl class="row">
									<dt class="col-sm-5 scouted-list">会員番号</dt>
									<dd class="col-sm-7">{{ invoiceForm.recruiter_number }}</dd>
									<dt class="col-sm-5 scouted-list">企業名</dt>
									<dd class="col-sm-7">{{ invoiceForm.recruiter_name }}</dd>
								</dl>
							</div>		
							<div class="border mt-5">
								<dl class="row email-box">									
									<dt class="col-sm-5"><h4 class="m-0">{{ $t('common.billing_mail') }}</h4></dt>
									<dd class="col-sm-7">{{ invoiceForm.email }}</dd>
								</dl>
							</div>
							<div class="border mt-5">
								<h4>{{ $t('common.brokerage_fee') }}</h4>
								<div class="form-group row">
									<div class="col-sm-5"></div>
									<div class="col-sm-6">
										<input type="text" :class="['form-control text-right', $v.invoiceForm.default_amount.$error ? 'is-invalid' :'']" v-model="$v.invoiceForm.default_amount.$model">
										<div class="invalid-feedback">
											<div class="error" v-if="!$v.invoiceForm.default_amount.required">金額は必須です</div>
											<div class="error" v-if="!$v.invoiceForm.default_amount.numeric">半角数字で入力してください</div>
										</div>
									</div>
									<label class="pl-1 pt-2">円</label>
								</div>
								<dl class="row">
									<dt class="col-sm-5 text-right">{{ $t('common.tax') }}</dt>
									<dd class="col-sm-6 text-right p-r-25">{{ Number(invoiceForm.tax).toLocaleString() }}</dd>
									<label class="pl-1">円</label>
								</dl>
								<dl class="row">
									<dt class="col-sm-5 text-right txt-total">{{ $t('common.invoice_amount') }}</dt>
									<dd class="col-sm-6 text-right txt-total p-r-25">{{ Number(invoiceForm.invoice_amount).toLocaleString() }}</dd>
									<label class="pl-1 txt-total">円</label>
								</dl>
								<div class="form-group row">
									<label class="col-sm-5 text-right">{{ $t('common.remark') }}</label>
									<div class="col-sm-7">
										<textarea rows="5" class="form-control" v-model="invoiceForm.remark"></textarea>
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-12 text-right">
										<button class="btn searchbtn btn-sm" style="width:140px;" @click="loadInvoicePreview">{{ $t('common.invoice_preview') }}</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6 invoice-preview">
							<h5 class="main-header">{{ $t('common.invoice_preview') }}</h5>
							<div class="invoice-preview-area"  v-if="invoicePreview">
								<iframe :src="invoicePreview" frameborder="1" class="invoice-frame"></iframe>
							</div>
							<!-- <h4 style="margin-top:0px;"><span class="header">{{ $t('common.invoice_preview') }}</span>
								<span class="glyphicon glyphicon-remove" style="float:right;cursor:pointer;" @click="closeInvoiceModal"></span>
							</h4>
							<div class="invoice-preview-area" v-if="invoicePreview">
								<iframe v-bind:srcdoc="invoicePreview" class="invoice-frame"></iframe>
							</div> -->
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<!-- <button class="btn btn-second mr-2 w-100"  @click="closeInvoicePreview">{{ $t('common.back') }}</button> -->
							<button class="btn back-btn btn-sm" @click="closeInvoiceModal">{{ $t('common.close') }}</button>
						</div>
						<div class="col-sm-6 text-right">
							<button class="btn searchbtn btn-sm" style="width:180px;" @click="sendInvoiceMail" v-show="invoicePreview">{{ $t('common.send_invoice') }}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Modal Content -->

    </div>
</template>

<script>
import DataTableServices from "../../DataTable/DataTableServices";
import { required, numeric } from "vuelidate/lib/validators";

/**
 * @component Admin scouted list
 * @author Lal Hmachhuani @ 2020/08/04
 * @last_maintained Myo Ko Ko @ 2020/08/04
 */
export default {
	mixins: [DataTableServices],
	data(){
		let sortOrders = {};
		let columns = [];
		columns.forEach(column => {
			sortOrders[column.name] = -1;
		});
		return {
            search_status: null,
            percent:null,
			showModal:false,
			requireInvoiceForm: false,
			invoicePreview: '',
			old_index:'',
			status:false,
			current: null,
			base_url: "/admin/scout-list",
			columns: columns,
			sortOrders: sortOrders,
			filteredData:{
				recruiter_id: '',
				title: '',
				recruiter_name: '',
				from_date: '',
				to_date:'',
				job_number: '',
				job_title: '',
				jobseeker_name: '',
				jobseeker_number:'',
				scout_status: [],
				management_number:'',
				recruiter_status_deactivate : false,
				recruiter_status_stop : false,
			},

			arr_status: [
				{ id: this.$configs.scouts.interested, checked: false },
				{ id: this.$configs.scouts.expired, checked: false },
				{ id: this.$configs.scouts.declined, checked: false },
				{ id: this.$configs.scouts.unclaimed, checked: false },
				{ id: this.$configs.scouts.billed, checked: false },
				{ id: this.$configs.scouts.payment_confirmed, checked: false }
			],
			lang:{
				days: ['日', '月', '火', '水', '木', '金', '土'],
				months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				placeholder: {
					date: '年 - 月 - 日',
				}
			},
			invoiceForm: {
				transaction_id: 0,
				management_number: 0,
				title: '',
				recruiter_number: '',
				recruiter_name: '',
				email: '',
				tax: 0,
				default_amount: 0,
				invoice_amount: 0,
				remark: '',
			},
			isToggle : false ,
            visible:false
		}
	},
	created(){        
        // this.$swal({
        //             allowOutsideClick: false,		
        //             icon: "warning",
        //             width: 350,
        //             title: null,
        //             html: 'すでに課金済みです。<br>決済サービス会社の管理画面を確認してください。<br><br> <strong>Epsilon注文番号: S20201126000101<strong>',
        //             // text: message,
        //             confirmButtonText: "閉じる",
        //             confirmButtonColor: "#ff5733",
        //             customClass: {
        //                 confirmButton: 'border-style',
        //                 cancelButton: 'cancelbtn border-style'
        //             },
        //         });
		this.getTaxes();
	},

	methods: {
        searchClick() {
            this.search_status = 'filter';
        },
		allowChat(status) {
			return status == this.$configs.scouts.interested ||
				status == this.$configs.scouts.unclaimed ||
				status == this.$configs.scouts.billed;
		},
		allowBilling(status) {
			return status == this.$configs.scouts.unclaimed;
		},
		allowPaymentConfirm(status) {
			return status == this.$configs.scouts.billed;
		},

		startChat(scout) {
			const payload = {
				recruiter_id: scout.recruiter_id,
				jobseeker_id: scout.jobseeker_id,
				scoutid_or_applyid: scout.id,
				type: 'scout',
			};
			this.$emit('chatStarted', payload);
		},
		onStatusChange(index, e, recruiter_id, reg_place) {
			this.$alertService.showConfirmDialog(null, this.$tc('alertMessage.change_confirm_message', e.target.value, { n:e.target.value }), this.$t('common.yes'), this.$t('common.no'))
            .then((dialogResult) => {
                if(dialogResult.value){
					let loading = this.$loading.show();
                    const scout = this.$data.projects.data[index];
                    var changeAble = false;
                    
                    // For credit card
                    if(reg_place == 'oversea' && (e.target.value == this.$configs.scouts.billed || e.target.value == this.$configs.scouts.payment_confirmed)){                        
                        let checkData = {
                            transaction_id: scout.id,
                            recruiter_number: scout.recruiter_number,
                        };

                        this.$api.post('admin/checkPay/scout', checkData).then(res => {
                            console.log("checkPay",res)
                            if(res.data.state == 1 || res.data.state == 5) {
                                changeAble = true;
                            }
                            else{
                                changeAble = false;
                            } 
                            
                            this.$api.post('/admin/scout-list/change-status', {
                                scout_id: scout.id,
                                recruiter_id: recruiter_id,
                                status: e.target.value,
                                reg_place: reg_place,
                                changeAble: changeAble,
                            }).then(() => {
                                loading.hide();
                                this.$data.projects.data[index].scout_status = e.target.value;
                            })
                            .catch((r) => {
                                loading.hide();
                                const data = r.response.data;
                                if(data.error.status != 406){
                                    this.$alertService.showErrorDialog(null,data.error.message);
                                }						
                                // --Rebind original status
                                this.getData(this.projects.current_page);
                            })
                        })
                    }
                    else { //Invoice
                        this.$api.post('/admin/scout-list/change-status', {
                            scout_id: scout.id,
                            status: e.target.value,
                            reg_place: reg_place,
                            changeAble: changeAble,
                        }).then(() => {
                            loading.hide();
                            this.$data.projects.data[index].scout_status = e.target.value;
                        })
                        .catch((r) => {
                            loading.hide();
                            const data = r.response.data;
                            if(data.error.status != 406){
                                this.$alertService.showErrorDialog(null,data.error.message);
                            }						
                            // --Rebind original status
                            this.getData(this.projects.current_page);
                        })
                    }
                    // End                    					
				}
				else{
			  	   this.getData(this.projects.current_page);
				}
			});


		},
		credit(scoutId, index){
            let loader = this.$loading.show();
			this.$v.invoiceForm.$touch();
			if (this.$v.invoiceForm.$invalid) {
				return;
            }           
            
            // this.showModal = true;
			let scout = this.$data.projects.data[index];

			this.invoiceForm.transaction_id = scout.id;
			this.invoiceForm.title = scout.title;
			this.invoiceForm.management_number = scout.management_number;
			this.invoiceForm.recruiter_number = scout.recruiter_number;
			this.invoiceForm.recruiter_name = scout.recruiter_name;
            this.invoiceForm.default_amount = 200000;
            this.getTaxes();
      		// this.invoiceForm.invoice_amount = Math.round(200000 * this.percent) + 200000;

            this.$api.post('admin/checkPay/scout', this.invoiceForm).then(res => {
                loader.hide();
                console.log("checkPay",res)
                if(res.data.state == 1 || res.data.state == 5) {
                    this.$swal({
                        allowOutsideClick: false,		
                        icon: "warning",
                        width: 350,
                        title: null,
                        html: 'すでに課金済みです。<br>決済サービス会社の管理画面を確認してください。<br><br> <strong>Epsilon注文番号: '+ res.data.invoice_number +'<strong>',
                        // text: message,
                        confirmButtonText: "閉じる",
                        confirmButtonColor: "#ff5733",
                        customClass: {
                            confirmButton: 'border-style',
                            cancelButton: 'cancelbtn border-style'
                        },
                    });
                    // this.$alertService.showInfoDialog(null,"すでに課金済みです。決済サービス会社の管理画面を確認してください。\n Epsilon注文番号: 20000",this.$t('common.close'))
                }
                else{
                    loader.hide();
                    this.showModal = true;
                }
                
            })
			// this.invoiceForm.tax = null;
			// this.invoiceForm.invoice_amount = '';
			// this.requireInvoiceForm = true;
		},
		creditRequest(){
			this.$v.invoiceForm.$touch();
			if (this.$v.invoiceForm.$invalid) {
				return;
            }
			let loading = this.$loading.show();
			// let loading = this.$loading.show({ container: this.$refs.loadingRef, isFullPage: false });
			this.$api.post('admin/billMail/scout', this.invoiceForm).then(res => {
                if(res.data.status == 'redirect'){
                    window.open(res.data.link);
                    window.location.href = res.data.link;
                }
                else{
                    this.getData();
                    loading.hide();
                }
                this.showModal = false;
			})
		},
		generateBill(scoutId, index) {
			// --Set form default value
			let scout = this.$data.projects.data[index];
			this.invoiceForm.transaction_id = scout.id;
			this.invoiceForm.title = scout.title;
			this.invoiceForm.management_number = scout.management_number;
			this.invoiceForm.recruiter_number = scout.recruiter_number;
			this.invoiceForm.recruiter_name = scout.recruiter_name;
			this.invoiceForm.email = scout.recruiter_email;
			this.invoiceForm.default_amount = 200000;
			this.invoiceForm.tax_id = this.tax.id;
			this.requireInvoiceForm = true;
		},
		closeInvoiceModal() {
			// --close any preview
			this.closeInvoicePreview();
			// --reset invoice form data
			this.invoiceForm = {
				transaction_id: 0,
				management_number: 0,
				title: '',
				recruiter_number: '',
				recruiter_name: '',
				email: '',
				tax: 0,
				default_amount: 0,
				invoice_amount: 0,
				remark: '',
				tax_id: this.tax.id,
			};
			// --close modal
            this.requireInvoiceForm = false;
            this.getTaxes();
		},
		loadInvoicePreview() {
			this.$v.invoiceForm.$touch();
			if (this.$v.invoiceForm.$invalid) {
				return;
			}
			this.$api.post('/admin/scout-list/generate-invoice', this.invoiceForm)
			.then((response) => {
				// let html = r.data;
				// this.invoicePreview = html;
				var enURL = encodeURI(response.data.data.pdf);
                this.invoicePreview = `data:application/pdf;base64, ${enURL}`;
			})
			.catch(() => {

			})
		},
		closeInvoicePreview() {
			this.invoicePreview = null;
		},
		sendInvoiceMail() {
			this.$v.invoiceForm.$touch();
			if (this.$v.invoiceForm.$invalid) {
				return;
			}
			let loading = this.$loading.show({
                isFullPage: true
			});
			this.$api.post('/admin/scout-list/send-invoice-mail', this.invoiceForm)
			.then((r) => {
				loading.hide();
				const scout = r.data.data;
				this.projects.data
					.filter(x => x.id == scout.id)
					.forEach(x => x.scout_status = this.$configs.scouts.billed);
				this.$alertService.showSuccessDialog(null, this.$t('common.mail_is_sent'), this.$t('common.close'));
				this.requireInvoiceForm = false;
				this.closeInvoiceModal();
			})
			.catch(() => {
				loading.hide();
			})
		},
		confirmPayment(scoutId, index) {
			this.$alertService
			.showConfirmDialog(null, this.$t('common.payment_confirmed_question'), this.$t('common.yes'), this.$t('common.no'))
			.then((dialogResult) => {
				if (dialogResult.value) {
					this.$api.post('/admin/scout-list/confirm-payment', { scout_id: scoutId })
					.then(() => {
						this.$data.projects.data[index].scout_status = this.$configs.scouts.payment_confirmed;
					})
					.catch(() => {
					})
				}
			});
		},
		showToggle(index) {
			this.current = index;
			if(this.status == true) {
				if(this.current == this.old_index) this.status = false;
			} else {
				this.status = true;
			}
			this.old_index = index;
		},
		hideToggle() {
			this.status = false;
		},
        textEllipsis(event){
            if(event.target.className == "txt-vertical-ellipsis") {
                event.target.className = "";
            } 
            else if(event.target.className == "") {
                event.target.className = "txt-vertical-ellipsis";
            }
        },
		getTaxes(){
			this.$api.get('/tax/current')
			.then(r => {
				this.tax = r.data.data;
				const percent = this.tax.percent;
				this.percent = (percent ?? 0) / 100
				this.invoiceForm.tax = this.percent * this.invoiceForm.default_amount;
				this.invoiceForm.tax = Math.round(this.invoiceForm.tax);
			})
			.catch(() => {
				console.log("There was  an error when fetching tax percentage.");
				this.tax = { percent: 10 };
			})
		}
	},
  
	computed: {
		currentUser() {
			return this.$store.getters.currentUser;
		},
		totalScouts: function() {
			return this.$data.projects.total;
		}
	},
		
	watch: {
		'invoiceForm.default_amount': function() {

			let amount = Number(this.invoiceForm.default_amount);
			if (!isNaN(amount)) {
        		this.invoiceForm.tax = this.percent * amount;
        		this.invoiceForm.tax = Math.round(this.invoiceForm.tax);
				this.invoiceForm.invoice_amount = amount + Number(this.invoiceForm.tax);
			} else {
				this.invoiceForm.invoice_amount = 0;
			}

		}
	},
	validations: {
		invoiceForm: {
			default_amount: { required, numeric }
		}
	}
}
</script>
<style lang="scss" scoped>

.mt-5 {
    margin-top: 5px!important;
}
.date-row {
	display: flex;
	align-items: flex-end;
}
.border {
	padding: 0px 20px 0px 20px;
    background: #eee;
    border: 1px dashed #7c7c7c;
    border-radius: 5px;
    h4{
        color: #4772bf;
        font-size: 16px;
    }
}
.email-box {
	padding-top: 15px;
}
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-open {
	display: block;
}
.modal-close {
	display: none;
}
/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 70px auto; /* 15% from the top and centered */
  padding: 30px 20px 10px 20px;
  border: 1px solid #888;
  width: 95%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
textarea {
	resize: vertical;
}
.content-row .row, dl {
	margin-bottom: 10px;
}
.form-control.is-invalid, .was-validated .form-control:invalid {
    border-color: #dc3545;
}
.invalid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
}
.is-invalid~.invalid-feedback, .is-invalid~.invalid-tooltip, .was-validated :invalid~.invalid-feedback, .was-validated :invalid~.invalid-tooltip {
    display: block;
}
.txt-vertical-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* modal box */
.invoice-data{
    width: 55% !important;
}
.invoice-preview{
    width: 45% !important;
    .header{
        color: #0062ff;
        font-size: 18px;
    }
}
.invoice-preview-area {
	border: 10px solid #ccc;
    border: 10px solid #ccc;
    max-width: 500px;
    height: 604px;
    margin-left: auto;
    margin-right: auto;
    overflow: auto;
}
.invoice-frame {
	width: 480px;
	height: 567px;
	border: none;
}
.scouted-list {
	/*padding-left: 90px;*/
    text-align: right;
}
.pr-8{
	padding-right: 8px!important;
}
.scout-block{
    display: inline-block;
    background: #eee;
    border:1px dashed #7c7c7c;
    padding: 0px 0.5rem;
    margin-bottom: 1rem;
	width: 100%;
}
.scout-block h4{
    color:#4772bf;
    padding-left: 15px;
    font-size: 18px;
    
}
.scout-block dl{
    margin-bottom: 0px !important;
}
.currency-label{
    padding: 10px 0px;    
    display: block;
}
.txt-total{
    color: #0062ff;
}
// @media (max-width:1280px){   
//     .wxl-num-txt-wrap{
//         max-width: 140px;
//     }
//     .num-txt-wrap{
//         max-width: 80px;
//     }
//     .tbl-w100{
//         width: 50px;
//     }
// }

.tbl-wxl{
    width: 400px;
}
.tbl-date{
    width: 90px;
}
.tbl-80{
    width: 80px;
}
.tbl-btn{
    width: 118px;
}
.wxl-num-txt-wrap {
    max-width: 200px;
}
@media (max-width: 1440px) {
    .tbl-wxl{
        width: 200px;
    }
    .wxl-num-txt-wrap {
       max-width: 220px;
    }
}
@media (max-width: 1280px){
    .tbl-wxl {
        width: 200px !important;
    }
    .wxl-num-txt-wrap {
       max-width: 170px;
    }
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
