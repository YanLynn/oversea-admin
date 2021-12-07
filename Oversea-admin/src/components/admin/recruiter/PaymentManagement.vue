<template>
	<div>
		<div class="row">
			<div class="col-sm-12 searchform-one">
				<h5 class="m-b-10 main-header">{{ $t('payment_management.title') }}</h5>
				<div class="inner-wrapper">
					<div class="row mb-1">
						<div class="col-md-4">
							<label for="management_number">{{ $t('payment_management.management_number') }}</label>
							<input type="text" :placeholder="$t('payment_management.management_number')" class="form-control" 
								v-model.trim="filteredData.management_number">
						</div>
						<div class="col-md-8">
							<div class="col-md-12 p-0">
								<label>{{ $t('payment_management.payment_method') }}</label>
							</div>
							<div class="col-md-12 p-0">
                            <div class="status-row mb-0">
								<div class="status-col">
									<label class="custom-control-label custom-checkbox-label">
										<input type="checkbox" name="scout-status" class="custom-control-input custom-checkbox" 
										v-model="filteredData.payment_status" :value="$configs.payment_method.invoice" />
										<span class="custom-check-label-post">{{ $configs.payment_method.invoice }}</span>
									</label>
								</div>
								<div class="status-col">
									<label class="custom-control-label custom-checkbox-label">
										<input type="checkbox" name="scout-status" class="custom-control-input custom-checkbox" 
									v-model="filteredData.payment_status" :value="$configs.payment_method.credit" />
										<span class="custom-check-label-post">{{ $configs.payment_method.credit }}</span>
									</label>
								</div>
							</div>
                            </div>
						</div>
					</div>
					<div class="row mb-1">
						<div class="col-md-12">							
							<div class="row mb-0">
                            <div class="date-row">
								<div class="col-md-4 datepicker-wrapper">
                                <label for="入金期日">{{ $t('payment_management.invoice_date') }}</label>
									<date-picker v-model="filteredData.invoice_from_date" value-type="format" class="datepicker" :lang="lang" placeholder="年 - 月 - 日"></date-picker>
								</div>
								<div class="col-md-4 datepicker-wrapper similarto position-relative">
									<date-picker v-model="filteredData.invoice_to_date" value-type="format" class="datepicker" :lang="lang" placeholder="年 - 月 - 日"></date-picker>
								</div>
                             </div>
							</div>
						</div>
					</div>
                    <div class="row mb-0">
                        <div class="col-md-6"><label for="入金日">{{ $t('payment_management.payment_date') }}</label></div>
                    </div>
					<div class="row d-flex align-items-end">                       
						<div class="col-md-8 p-0">						
							<div class="date-row">                            
								<div class="col-md-6 datepicker-wrapper">                               
									<date-picker v-model="filteredData.payment_from_date" value-type="format" class="datepicker" :lang="lang" placeholder="年 - 月 - 日"></date-picker>
								</div>
								<div class="col-md-6 datepicker-wrapper similarto position-relative">
									<date-picker v-model="filteredData.payment_to_date" value-type="format" class="datepicker" :lang="lang" placeholder="年 - 月 - 日"></date-picker>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-right">
							<button class="btn searchbtn  mr-2" @click="getData();searchClick()">{{ $t('common.search') }}</button>
						</div>
					</div>
				</div>
				<label>{{ $t('payment_management.status') }}</label>
                  <!--status click-->                    
                    <span @click="visible = !visible" ref="tooltip-box-status" style="cursor:pointer">                   
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
                    <span class="tooltip-box-status" v-if="visible">
                    <table class="tooltiptext-status">
                    <thead>
                        <tr><th colspan="2" class="tooltip-head">ステータスの説明</th></tr>
                    </thead>
                     <tbody>
                        <tr><td class="w-105">内定済未請求</td><td>企業会員からの内定の連絡があったが、手数料を未請求。</td></tr>
                        <tr><td class="w-105">請求済</td><td>企業会員に手数料を請求済。</td></tr>
                        <tr><td class="w-105">入金確認済</td><td>企業会員からの手数料の入金を確認済。</td></tr>
                     </tbody>
                     </table>
                     </span>                    
                    <!-- end status click -->				
					<div class="status-row">
						<div class="status-col" v-for="(status, index) in record_status" :key="index">
							<label class="custom-control-label custom-checkbox-label">
								<input type="checkbox" class="custom-control-input custom-checkbox"
									:value="status.id" :checked="status.checked" v-model="filteredData.record_status" @change="getData()" />
								<span class="custom-check-label-post">{{ status.id }}</span>
							</label>
						</div>
					</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="row">
					<div class="col-sm-6 select">
						<span>{{ $t('common.total_results') }}: {{ $tc('common.item', totalRecords, { n:totalRecords }) }}</span><br>
						<span>1 {{ $t('common.displayed_page') }}&nbsp;</span>
						<select v-model="tableData.length" @change="getData()">
							<option v-for="(records, index) in perPage" :key="index" :value="records">
								{{records}}
							</option>
						</select>
					</div>
					<div class="col-sm-6">
						<button class="btn searchbtn btn_csv_download float-right" @click="downloadCSV">{{ $t('common.csv_download') }}</button>
					</div>
				</div>
				<div class="tbl-wrap">
					<DataTable ref="datatable" class="table" :columns="$t('payment_management.columns')" :sortKey="sortKey" :showCheckbox="false" :sortOrders="sortOrders" @sort="sortBy" :totalLength="projects.total">
						<tbody>
							<tr v-for="(project, index) in projects.data" :key="project.id">
								<td class="tbl-w100">{{ project.management_number }}</td>
								<td class="tbl-wxs">{{ project.payment_method }}</td>
								<td class="tbl-w100">
                                    <span v-if="project.payment_method == 'クレカ'">{{ project.invoice_number }}</span>
                                    <span v-else class="invoice-preview" @click="loadInvoicePreview(project.scoutid_or_applyid,project.payment_job_type)">{{ project.invoice_number }}</span>
                                </td>
								<td class="tbl-scout p-realtive">
									<div class="scout-box">
										<p class="scout-txt">{{ project.status }}</p>
										<p class="btn btn-common" v-on:click="showToggle(index)">
											{{$t('common.change')}}
											<span class="down-icon">&#9662;</span>
										</p>
										<div class="scout-toggle"  :id="'scout-status'+index" v-bind:class="{'scout-expand': (current === index) && (toggle_status == true)}">
											<p class="custom-radio-group mr-3"  v-for="status in getTogglableStatus(project)" v-bind:key="status.id">
												<input type="radio" :id="status.id+index" v-model="project.status" class="custion-radio" 
													@change="onStatusChange(index, $event)" :value="status.id">
												<label :for="status.id+index" class="custom-radio-lable status-lable" @click="hideToggle">{{ status.id }}</label>
											</p>
										</div>
									
									</div>
								</td>
								<td class="txt-wrap tbl-wxs">{{ Number(project.invoice_amount).toLocaleString() }}</td>
								<td class="txt-wrap tbl-wxs"><span v-show="project.due_date">{{ project.due_date|date('%Y-%m-%d') }}</span></td>
								<td class="txt-wrap tbl-wxs">
									<span>{{ Number(project.payment_amount).toLocaleString() }}</span>
									<br>
									<span v-show="project.actual_payment_date">{{  project.actual_payment_date|date('%Y-%m-%d') }}</span>
									<br v-if="project.actual_payment_date">
									<button type="button" @click="editAmountDate(project)" class="btn btn-change btn-default mt-2">{{ $t('common.change') }}</button>
								</td>
								<td class="text-left wxl-num-txt-wrap tbl-wxl"><router-link :to="{ path: '/admin/recruiter-list/recruiter/'+ project.recruiter_id +'/detail'}">{{ project.recruiter_name }}</router-link></td>
								<td class="text-left wxl-num-txt-wrap tbl-wxl"><router-link :to="{ path: '/admin/recruiter-list/recruiter/'+ project.recruiter_id +'/detail'}">{{ project.incharge_name }}</router-link></td> 
								<!-- <td class="text-left">
                                    <p class="mb-1"><span class="font-weight-bold tbl-ws d-inline-block">名</span> - {{project.recruiter_name}}</p>
                                    <p class="mb-1"><span class="font-weight-bold tbl-ws d-inline-block">電話番号</span> - {{project.phone1}}</p>
                                    <p class="mb-1"><span class="font-weight-bold tbl-ws d-inline-block">メールアドレス</span> - {{project.email}}</p>
                                    <p class="mb-1"><span class="font-weight-bold tbl-ws d-inline-block">担当者名</span> - {{project.incharge_name}}</p>
                                </td> -->
								<td class="tbl-wm">
									<!-- <div style="height:40px;line-height:40px;vertical-align:middle;"> -->
										<div class="status-col tooltip-box">	 
											<span class="txt-vertical-ellipsis-2 text-left text-break">
												{{ project.remark }}
											</span>
											<span class="tooltiptext tooltiptext-payment"><pre>{{ project.remark }}</pre></span>
										</div>
									<!-- </div> -->
									<button type="button" @click="editRemark(project)" class="btn btn-change btn-default mt-2">{{ $t('common.change') }}</button>
								</td>
							</tr>
						</tbody>
					</DataTable>
                    <div v-if="projects.data">
                        <div v-if="projects.data.length == 0 && search_status == 'filter'" class="no-data-txt-border">
                            <h5 class="main-header text-center">{{ $t('common.no_data_found')}}</h5>
                        </div>
                        <div v-if="projects.data.length == 0 && search_status == null" class="no-data-txt-border">
                            <h5 class="main-header text-center">{{ $t('common.no_data_found_message')}}</h5>
                        </div>
                    </div>
					<!-- <div v-if="projects.length === 0" class="no-data-txt-border">
                        <h5 class="main-header text-center">{{ $t('common.no_data_found')}}</h5>
                    </div> -->
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
		<!-- Amount/Date edit modal -->
		<transition name="modal">
		<div class="modal-mask" v-if="showModal">
		<div class="modal-wrapper">
			<div class="modal-container" style="margin-top:340px;">
			<div class="modal-header mb-0">
				<strong class="main-header">入金日・入金金額</strong>
				<span class="close-ico float-right" @click="closeModal">
					<span class="glyphicon glyphicon-remove" style="font-size: 18px;cursor:pointer;color:#807979"></span>
				</span>
			</div>
			<div class="modal-body">
				<label for=""> 入金金額 </label>
				<input type="text" v-model="form.payment_amount" @keypress="isNumber($event)" class="form-control mb-3">
				<label for=""> 入金日 </label>
				<date-picker v-model="form.actual_payment_date" valueType="format" class="datepicker w-100" :lang="lang" 
					placeholder="年 - 月 - 日"></date-picker>
			</div>
			<div class="modal-footer d-flex">
                <button class="btn back-btn" @click="closeModal" style="background-color:#828fa5 !important;border:none;box-shadow:none;">キャンセル</button>
				<button class="btn searchbtn" @click="onEditingComplete(form,'amt')" style="border:none;box-shadow:none;margin-left:15px">保存</button>				
			</div>
			</div>
		</div>
		</div>
		</transition>

        <div id="myModal" :class="['modal',showPDF ? 'modal-open' : 'modal-close' ]">
            <div class="modal-content">
                <p class="close-ico" style="text-align:right"  @click="closeInvoiceModal">
					<span class="glyphicon glyphicon-remove" style="cursor:pointer;"></span>
				</p>
                <div class="invoice-preview-area"  v-if="invoicePreview">
                    <iframe :src="invoicePreview" frameborder="1" class="invoice-frame"></iframe>
                </div>
            </div>
        </div>
	</div>
	
</template>
<script>
import DataTableServices from "../../DataTable/DataTableServices";
// import PaymentManagementInlineEditor from './PaymentManagementInlineEditor';
import { showToggle,handleStatus } from "../../../partials/common";

export default {
	mixins: [ DataTableServices ],
	// components: { PaymentManagementInlineEditor },
	data() {
		let sortOrders = {};
		let columns = this.$i18n.messages.English.payment_management.columns;
		columns.forEach(column => {
			sortOrders[column.label] = -1;
		});
		return {
            showPDF:false,
            invoicePreview:'',
            search_status: null,
			current: null,
			base_url: "/admin/payment-transactions",
			old_index:'',
			toggle_status:false,
			columns: columns,
			sortOrders: sortOrders,
			filteredData: {
				invoice_from_date: '',
				invoice_to_date: '',
				payment_from_date: '',
				payment_to_date: '',
				management_number: '',
				payment_status: [],
				record_status: [],
			},
			record_status: [
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
			showModal: false,
			form: {},
            visible: false
		}
	},
	methods: {
        loadInvoicePreview(scoutid_or_applyid,payment_job_type) {
			var url;
			if(payment_job_type == 'scout') {
                url = '/admin/payment-transactions/'+scoutid_or_applyid+'/scout-invoice';
			} else {
                url = '/admin/payment-transactions/'+scoutid_or_applyid+'/jobapply-invoice';
			}
			this.$api.post(url)
			.then((response) => {
                var enURL = encodeURI(response.data.data.pdf);
                this.invoicePreview = `data:application/pdf;base64, ${enURL}`;
                this.showPDF = true;
			})
			.catch(error => console.log(error));
        },
        closeInvoiceModal() {
            this.showPDF = false;
        },
        searchClick() {
            this.search_status = 'filter';
        },
		getTogglableStatus(data) {
			if (data.payment_job_type == this.$configs.payment_job_type.scout) 
			{
				return [
					{ id: this.$configs.scouts.unclaimed, checked: false },
					{ id: this.$configs.scouts.billed, checked: false },
					{ id: this.$configs.scouts.payment_confirmed, checked: false }
				];
			}
			else if (data.payment_job_type == this.$configs.payment_job_type.job_apply) 
			{
				return [
					{ id: this.$configs.job_apply.unclaimed, checked: false },
					{ id: this.$configs.job_apply.billed, checked: false },
					{ id: this.$configs.job_apply.payment_confirmed, checked: false }
				];
			} else 
			{
				return [];
			}
		},
		showToggle(index) {
			this.current = index;
			this.toggle_status = showToggle(index,this.old_index,this.toggle_status);
			this.old_index = index;
		},
		hideToggle() {
			this.toggle_status = false;
		},
		handleStatusToggle(e) {
			if(handleStatus(e.target.className) == false) 
				this.toggle_status = false;
		},
		onStatusChange(index, e) {
			const payment = this.$data.projects.data[index];
			this.$alertService.showConfirmDialog(null,this.$tc('alertMessage.change_confirm_message', e.target.value, { n:e.target.value }), this.$t('common.yes'), this.$t('common.no')) 
			.then(r => {
				if (r.value) {
					if (payment.payment_job_type == this.$configs.payment_job_type.scout)
					{
						// --scout status change
						this.$api.post('/admin/scout-list/change-status', { 
							scout_id: payment.scoutid_or_applyid, 
							status: e.target.value,
						})
						.then(() => {
						})
						.catch((r) => {
                            const data = r.response.data;
                            if(data.error.status != 406){
                                this.$alertService.showErrorDialog(null,data.error.message);
                            }
						})
						.finally(() => {
							// --Rebind original status
							this.getData(this.projects.current_page);
						})
					}
					else if (payment.payment_job_type == this.$configs.payment_job_type.job_apply)
					{
						// --jobapply status change
						this.$api.post('/admin/jobapply-list/change-status', {
							jobapply_id: payment.scoutid_or_applyid,
							recruiter_id: payment.recruiter_id,
							status: e.target.value,
						})
						.then(() => {
						})
						.catch((r) => {
                            const data = r.response.data;
                            if(data.error.status != 406){
                                this.$alertService.showErrorDialog(null,data.error.message);
                            }							
						})
						.finally(() => {
							// --Rebind original status
							this.getData(this.projects.current_page);
						})
					}
				}
				else {
					this.getData(this.projects.current_page);
				}
				
			});
		},
		// onEditingPayment(payment) {
		// 	this.$alertService.showInfoDialog(null,'ステータスの変更が必要な場合は忘れずに変更してください。', this.$t('common.yes'), this.$t('common.no')) 
		// 	.then(r => {
		// 		if (r.value) {
		// 			this.onEditingComplete(payment);
		// 		}
		// 	})			
		// }, 
		onEditingComplete(payment,type) {
			console.log(type)
			this.$api.put('/admin/payment-transactions/'+payment.id, payment)
			.then(() => {
				let i = this.projects.data.findIndex(x => x.id == payment.id);
				if (i > -1) {
					this.projects.data[i].payment_amount = payment.payment_amount;
					this.projects.data[i].actual_payment_date = payment.actual_payment_date;
					this.projects.data[i].remark = payment.remark;
				}
				if (this.showModal) {
					this.closeModal();
				}
				if(type == 'amt'){
					this.$alertService.showInfoDialog(null,'ステータスの変更が必要な場合は忘れずに変更してください。',this.$t('common.close'))
				}
				
			})
			.catch((e) => {
				console.log(e);
			})			
		}, 
		onEditingCancel($event, payment) {
			payment.payment_amount = $event.payment_amount;
			payment.actual_payment_date = $event.actual_payment_date;
			payment.remark = $event.remark;
		},
		isNumber(evt) {
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				evt.preventDefault();
				return false;
			}
			return true;
		},
		downloadCSV() {
			let jsonData = {
                tableData: this.tableData,
				filteredData: this.filteredData,
				columns: this.columns
            };
			this.$api.post("/admin/payment-transactions/csv", jsonData, { responseType: "arraybuffer" })
            .then((r) => {
				const type = r.headers["content-type"];
				const blob = new Blob([r.data], { type: type, encoding: "UTF-8" });
				const filename = r.headers["content-disposition"]
					.split("=")[1]
					.replace(/^"+|"+$/g, "");
				const link = document.createElement("a");
				link.href = window.URL.createObjectURL(blob);
				link.download = filename;
				link.click();
            });
		},
		editRemark(payment) {
			const inputDialog = this.$swal({
				allowOutsideClick: false, 
				title: '備考',
				width: 160,
				input: 'textarea',		
				confirmButtonColor: "#0062ff",                       
				confirmButtonText: '保存',
				cancelButtonColor: "#aab2bd",                       
				cancelButtonText: 'キャンセル',
				customClass: {
                    confirmButton: 'border-style',
                    cancelButton: 'cancelbtn border-style',
                    container: 'swal-remark',
                },
				showCloseButton: true,
				showCancelButton: true,
                inputValue: payment.remark,
                reverseButtons: true
			});
			inputDialog.then(r => {
				if (r.value !== undefined) {
					payment.remark = r.value;
					this.onEditingComplete(payment,'remark');
				}
			})
		},
		editAmountDate(payment) {
			// --Bind form data
			this.form = { ...payment };
			this.showModal = true;
		},
		closeModal() {
			// --Reset form data
			this.form = {};
			this.showModal = false;
		}
	},
	computed: {
		currentUser() {
			return this.$store.getters.currentUser;
		},
		totalRecords() {
			return this.$data.projects.total;
		}
	},
};
</script>
<style scoped>
.date-row {
	display: flex;
	align-items: flex-end;
}
.custom-checkbox-label {
	padding-left: 0px;
}
textarea {
	resize: vertical;
}
.multiline-cell {
	white-space: pre;
}
.btn_csv_download {
	margin: 0px 3px;
    width: 150px;
}
.mx-datepicker {
	width: 100%;
}
.w-100 {
	width: 100%;
}
.scout-txt {
    min-width: 80px;
}
.btn-change{
    /*width: 65px;*/
    width: 70%;
}
@media (max-width: 1440px){
    .tbl-wxl {
        width: 185px;
    }
    .wxl-num-txt-wrap{
        max-width: 120px;
    }
}
@media (max-width: 1280px){
    .wxl-num-txt-wrap {
        max-width: 90px;
    }
    .tbl-wxl {
        width: 120px;
    }
}
/* Modal added by MKK */
.modal-mask {
	position: fixed;
	z-index: 998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {	
    width: 36rem;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 2px 3px 1px rgba(127, 127, 127, 1);
    border-radius: 5px !important;
}

.modal-header {
	padding: 5px 5px !important;
}

.modal-header h3 {
	margin-top: 0;	
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}
.modal-footer{
    padding: 20px;    
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0px;
}
.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 30px;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	transform: translate(0%, 0%) scale(.8);
}
/* End Modal */
.tooltip-box{
    display: block;
}
.tooltip-box-status {
    position: relative;
    display: inline-block;
}
.tooltip-status {
    width: 500px;
    background-color: #5cb1ab;
    color: #fff;   
    border-radius: 6px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
}
.tooltip-box-status .tooltiptext-status {     
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
.tooltip-box-status .tooltiptext-status::after{
    display: none;
}
.tooltip-box-status table{
    border-collapse: initial !important;
}
.tooltip-box-status table tr{
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
/* invoice preview */
.modal-open {
    display: block;
}
.modal-close {
    display: none;
}
.modal {
  position: fixed; 
  z-index: 10; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.4); 
}
.modal-content {
 	max-width: 950px;
    width: 70%;
    height: 90%;
    margin: 70px auto; /*15% from the top and centered */
    padding: 60px 30px 50px 30px;
    border: 1px solid #888;
    background-color: #fefefe;

}
.invoice-frame {
	width: 100%;
	height: 100%;
	border: none;
}

.invoice-preview-area {
    height: 100%;
	border: 10px solid #ccc;
}

.invoice-col {
    margin-bottom: 1.625rem;
}
.invoice-preview {
	color: #0062ff;
    text-decoration: none;
	cursor: pointer;
}
.invoice-preview:hover {
	color: #002c73;
}
</style>
