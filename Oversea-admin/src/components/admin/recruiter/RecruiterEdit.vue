<template>
    <div class="profile-edit">
        <form @submit.prevent="updateProfile">
            <h5 class="m-b-10 main-header">企業プロフィール編集</h5>
            <div id="information">
                <div class="border user-main">
                    <div class="form-group">
                         <label><span class="align-label">企業の登記地</span></label>
                         <input type="text" class="form-control" readonly :value="recruiterForm.registered_place_type == 'oversea' ? '海外企業' : '国内企業'">
                    </div>
                    <div class="form-group">
                        <label>企業会員番号</label>
                        <input type="text" class="form-control" readonly :value="recruiterForm.recruiter_number" />
                    </div>
                    <div class="form-group">
                        <label>企業名 <span class="badge badge-danger">必須</span></label>
                        <input type="text" :class="['form-control',$v.recruiterForm.recruiter_name.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.recruiter_name.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.recruiter_name.required">{{ $t('common.recruiter_name_is_required') }}</div>
                        </div>
                    </div>
                    <!-- <div class="form-group">
                        <label>企業名(愛称)</label>
                        <input type="text" class="form-control" v-model.trim="recruiterForm.recruiter_nick_name" />
                    </div> -->
                </div>

                <div class="border user-main">
                    <div class="form-group">
                        <label>設立年月</label>
                        <div class="row col-12">
                            <div class="col-md-6">
                                <input class="form-control mb-0" placeholder="" type="text" v-model="recruiterForm.establishment_date">
                                <!-- <select class="form-control" v-model="recruiterForm.establishment_year">
                                    <option disabled value=""></option>
                                    <option v-for="year in 100" :key="year">{{ 1920 + year }}</option>
                                </select> -->
                            </div>
                            <!-- <div class="col-md-6">
                                <select class="form-control" v-model="recruiterForm.establishment_month">
                                    <option disabled value=""></option>
                                    <option v-for="month in 12" :key="month">{{ month }}</option>
                                </select>
                            </div> -->
                        </div>
                    </div>
                    <div class="form-group">
                        <label>代表者名</label>
                        <input type="text" class="form-control" v-model.trim="recruiterForm.representative_name" />
                    </div>
                    <div class="form-group">
                        <label>従業員数</label>
                        <input type="text" class='form-control'  v-model.trim="recruiterForm.num_of_employees">
                        <!-- <input type="text" :class="['form-control',$v.recruiterForm.num_of_employees.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.num_of_employees.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.num_of_employees.numeric">{{$t('jobcreate.number_only')}}</div>
                        </div> -->
                    </div>
                    <div class="form-group">
                        <label>事業内容</label>
                        <input type="text" class="form-control" v-model.trim="recruiterForm.business_description" />
                    </div>
                    <div class="form-group">
                        <label>所在地</label>
                        <textarea name="" id="" class="form-control" rows="5" v-model.trim="recruiterForm.address"></textarea>
                    </div>
                    <div class="form-group">
                        <label>電話番号 1 <span class="badge badge-danger">必須</span></label>
                        <input type="text" :class="['form-control',$v.recruiterForm.phone1.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.phone1.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.phone1.required">{{ $t('common.phone-is-required') }}</div>
                            <div class="error" v-else-if="!$v.recruiterForm.phone1.phoneformat">
                            {{$t('jobcreate.number_only')}}</div>
                            <!-- <div class="error" v-else-if="!$v.recruiterForm.phone1.minLength || !$v.recruiterForm.phone1.maxLength">Phone number must be between 10 and 14 numbers.</div> -->
                        </div>
                    </div>
                    <div class="form-group">
                        <label>電話番号 ２</label>
                        <input type="text" class="form-control" :class="['form-control',$v.recruiterForm.phone2.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.phone2.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.phone2.phoneformat">
                            {{$t('jobcreate.number_only')}}</div>
                            <!-- <div class="error" v-else-if="!$v.recruiterForm.phone2.minLength || !$v.recruiterForm.phone2.maxLength">Phone number must be between 10 and 14 numbers.</div> -->
                        </div>
                    </div>
                    <div class="form-group">
                        <label>ご担当者様メールアドレス</label>
                        <input type="text" class="form-control" :value="recruiterForm.email" readonly />
                    </div>
                    <div class="form-group">
                        <label>WEBサイトURL <span class="badge badge-danger">必須</span></label>
                        <input type="text" :class="['form-control',$v.recruiterForm.website.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.website.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.website.required && $v.recruiterForm.website.$error">{{ $t('common.website-is-required') }}</div>
                            <div class="error" v-if="!$v.recruiterForm.website.url">{{ $t('common.website-is-invalid') }}</div>
                        </div>
                    </div>
                </div>

                <div class="border user-main">
                    <div class="form-group">
                        <label>ご担当者名 <span class="badge badge-danger">必須</span></label>
                        <input type="text" :class="['form-control',$v.recruiterForm.incharge_name.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.incharge_name.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.incharge_name.required">{{ $t('common.incharge-name-is-required') }}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>担当者名(フリガナ) <span class="badge badge-danger">必須</span></label>
                        <input type="text" :class="['form-control',$v.recruiterForm.incharge_name_furigana.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.incharge_name_furigana.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.incharge_name_furigana.required">{{ $t('common.incharge-name-furigana-is-required') }}</div>
                            <div class="error" v-if="!$v.recruiterForm.incharge_name_furigana.isFurigana">{{ $t('common.incharge-name-furigana-is-invalid') }}</div>
                        </div>
                    </div>
                    <!-- <div class="form-group">
                        <label>アカウントID</label>
                        <input type="text" class="form-control" v-model.trim="recruiterForm.account_id" />
                    </div> -->
                    <div class="form-group">
                        <label>秘密の質問 <span class="badge badge-danger">必須</span></label>
                        <select v-model="questionType" @change="onQuestionTypeChange" class="form-control">
                            <option v-for="(question, key) in $configs.questions" :value="question" :key="key">{{ question }}</option>
                        </select>
                        <input type="text" v-model.trim="recruiterForm.question" v-show="questionType == $configs.questions.other" class="form-control" style="margin-top:10px;"/>
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.question.required">{{ $t('common.question-is-required') }}</div>
                            <div class="error" v-if="!$v.recruiterForm.question.maxLength">秘密の質問は全角54文字以下である必要があります</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>秘密の質問の答え <span class="badge badge-danger">必須</span></label>
                        <input type="text" :class="['form-control',$v.recruiterForm.answer.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.answer.$model" />
                        <div class="invalid-feedback">
                            <div class="error" v-if="!$v.recruiterForm.answer.required">{{ $t('common.answer-is-required') }}</div>
                        </div>
                    </div>
                </div>

                <div class="border user-main" id="logo">
                    <div class="form-group">
                        <label class="mb-3">会社ロゴ</label><br>
                        <label>※ JPG、JPEG、PNGいずれかの形式の画像をアップロード可能です。</label>
                            <div @drop.prevent="onLogoChange" @dragover.prevent  :class="['upload-content', $v.recruiterForm.logo.$error ? 'is-invalid':''] ">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-cloud-upload upload-icon mx-3"></i>
                                    <label class="mb-0">画像をドラッグ＆ドロップまたは</label>
                                    <div class="upload-btn-wrapper">
                                        <button type="button" class="btn upload-btn mx-3" @click="$refs.logoInput.click()">ファイルを選択</button>
                                    </div>
                                </div>
                            </div>
                        <div>
                            <input type="file" class="hidden upload-file hide" name="logo" @change="onLogoChange" accept="image/x-png,image/gif,image/jpeg" ref="logoInput"/>
                            <!-- <label class="custom-file-label">ファイルを選択</label> -->
                        </div>
                        <div class="invalid-feedback">
                                <div class="error" v-if="!$v.recruiterForm.logo.isTrueImage">{{ $t('common.image-is-invalid') }}</div>
                            </div>
                    </div>
                    <div class="img-block position-relative">                       
                        <img :src="recruiterForm.logo_url" class="img-responsive img-contain" alt="Recruiter Logo" />
                        <button v-show="recruiterForm.logo_url != defaultImageUrl" type="button" @click="deleteLogo" class="delete-btn"> <span class="glyphicon glyphicon-remove"></span></button>                    
                    </div>
                </div>

                <div class="border user-main" id="incharge-photo">
                    <div class="form-group">
                         <label class="mb-3">担当者顔写真(スカウトした人材のみ閲覧可)</label><br/>
                         <label>※ JPG、JPEG、PNGいずれかの形式の画像をアップロード可能です。</label>
                            <div @drop.prevent="onInchargePhotoChange" @dragover.prevent :class="['upload-content', $v.recruiterForm.incharge_photo.$error ? 'is-invalid':''] ">
                                    <div class="d-flex align-items-center">
                                        <i class="fa fa-cloud-upload upload-icon mx-3"></i>
                                        <label class="mb-0">画像をドラッグ＆ドロップまたは</label>
                                        <div class="upload-btn-wrapper">
                                        <button type="button" class="btn upload-btn mx-3" @click="$refs.inchargePhotoInput.click()">ファイルを選択</button>
                                        </div>
                                    </div>
                            </div>
                        <div>
                            <input type="file" class="hidden upload-file hide" accept="image/x-png,image/gif,image/jpeg" @change="onInchargePhotoChange" ref="inchargePhotoInput"/>
                            <!-- <label class="custom-file-label">ファイルを選択</label> -->
                        </div>
                        <div class="invalid-feedback">
                                <div class="error" v-if="!$v.recruiterForm.incharge_photo.isTrueImage">{{ $t('common.image-is-invalid') }}</div>
                            </div>
                    </div>

                    <div class="position-relative scout-box-image">                   
                            <img :src="recruiterForm.incharge_photo_url" class="img-responsive img-contain" alt="Recruiter Incharge Photo" />
                            <button v-show="recruiterForm.incharge_photo_url != defaultImageUrl" type="button" @click="deleteInchargePhoto" class="delete-btn"><span class="glyphicon glyphicon-remove"></span></button>                       
                    </div>
                </div>

                <div class="border user-main clearfix" id="related-photo">
                    <div class="form-group">
                        <label class="mb-3">関連画像</label><br/>
                        <label>※ JPG、JPEG、PNGいずれかの形式の画像を4枚までアップロード可能です</label>
                        <div @drop.prevent="onRelatedImagesChange" @dragover.prevent :class="['upload-content', $v.temp_related_image.$error ? 'is-invalid':''] ">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-cloud-upload upload-icon mx-3"></i>
                                    <label class="mb-0">画像をドラッグ＆ドロップまたは</label>
                                    <div class="upload-btn-wrapper">
                                        <button type="button" class="btn upload-btn mx-3" @click="$refs.relatedImagesInput.click()">ファイルを選択</button>
                                    </div>
                                </div>
                            </div>
                        <div class="custom-file">
                            <input type="file" class="hidden upload-file hide" accept="image/x-png,image/gif,image/jpeg" multiple @change="onRelatedImagesChange" ref="relatedImagesInput"/>
                            <!-- <label class="custom-file-label">ファイルを選択</label> -->
                        </div>
                    </div>
                    <div class="row col-md-12 related-row mb-0">
                        <div class="col-md-3 related-block" v-if="showRelatedImage(0)">
                            <img :src="recruiterForm.related_images[0].file_url" class="img-contain" alt="Recruiter related image 1" />
                            <button type="button" @click="deleteRelatedImage(0)" class="delete-btn"> <span class="glyphicon glyphicon-remove"></span></button>
                        </div>
                        <div class="col-md-3 related-block" v-if="showRelatedImage(1)">
                            <img :src="recruiterForm.related_images[1].file_url" class="img-contain" alt="Recruiter related image 2" />
                            <button type="button" @click="deleteRelatedImage(1)" class="delete-btn"> <span class="glyphicon glyphicon-remove"></span></button>
                        </div>
                        <div class="col-md-3 related-block" v-if="showRelatedImage(2)">
                            <img :src="recruiterForm.related_images[2].file_url" class="img-contain" alt="Recruiter related image 3" />
                            <button type="button" @click="deleteRelatedImage(2)" class="delete-btn"> <span class="glyphicon glyphicon-remove"></span></button>
                        </div>
                        <div class="col-md-3 related-block" v-if="showRelatedImage(3)">
                            <img :src="recruiterForm.related_images[3].file_url" class="img-contain" alt="Recruiter related image 4" />
                            <button type="button" @click="deleteRelatedImage(3)" class="delete-btn"> <span class="glyphicon glyphicon-remove"></span></button>
                        </div>
                    </div>
                </div>

                <div class="my-3 p-3 border user-main" id="youtube-link">
                    <div class="form-group">
                        <label>関連動画</label>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Youtube URL</label>
                            <div class="col-sm-12">
                                <input type="text" :class="['form-control',$v.recruiterForm.video.$error?'is-invalid':'']" v-model.trim="$v.recruiterForm.video.$model" />
                                <div class="invalid-feedback">
                                    <div class="error" v-if="!$v.recruiterForm.video.matchYoutubeUrl">{{ $t('common.youtube-url-is-invalid') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="my-3 p-3 border user-main" id="pr">
                    <div class="form-group">
                        <label>会社PR等</label>
                        <textarea class="form-control" rows="10" v-model="recruiterForm.company_pr"></textarea>
                    </div>
                </div>
                
            </div>
            <div class="d-flex justify-content-start p-3">
                <span class="btn back-btn mr-4" @click="cancelBtn">{{ $t('common.cancel') }}</span>
                <!-- <router-link to="/admin/recruiter-list" class="btn back-btn mr-4">{{ $t('common.cancel') }}</router-link> -->
                <button type="submit" class="btn save-btn">保存する</button>
            </div>
        </form>
        
    </div>
</template>

<script>
    import { required,  url, numeric, maxLength } from "vuelidate/lib/validators";
    // import { required , numeric , minLength , maxLength , url , between , withParams , email , helpers} from 'vuelidate/lib/validators';
    import { isFurigana, matchYoutubeUrl } from "../../../partials/common";

     const phoneformat = (ph_number) => {
    if (typeof ph_number === 'undefined' || ph_number === null || ph_number === '') {
      return true;
      }
     return (/^[+\d]?(?:[+\][\d-.\s()]*)$/m).test(ph_number);
      }

    const isTrueImage = (value) => {
        if (!value) {
            return true;
        }
        let file = value;
        return file.type ? file.type.startsWith("image") : true;
    };

    function buildFormData(formData, data, parentKey) {
        if (data && typeof data === "object" && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach((key) => {
                buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? "" : data;
            formData.append(parentKey, value);
        }
    }
    export default {
        data() {
            return {
                showNavigationPane: true,
                defaultImageUrl: "",
                questionType: "",
                recruiterForm: {
                    recruiter_name: "",
                    num_of_employees: 0,
                    incharge_name_furigana: "",
                    video: "",
                    related_images: [],
                    delete_related_images: [],
                    delete_logo: false,
                    delete_incharge_photo: false,
                },
                temp_related_image: null,
            };
        },

        created() {
            let loading = this.$loading.show();
            console.log("waizin"); 
            this.$api
                .get("/recruiter/recruiters/" + `${this.$route.params.id}` + "/edit")
                .then((r) => {
                  
                    this.recruiterForm = r.data.data;
                    
                    console.log('recruiter form',this.recruiterForm);
                    // --split establishment_date into year and month
                    const establishment_date = new Date(this.recruiterForm.establishment_date);
                    this.recruiterForm.establishment_year = establishment_date.getFullYear();
                    this.recruiterForm.establishment_month = establishment_date.getMonth() + 1;
                    this.recruiterForm.delete_related_images = [];

                    // --map question type
                    if (Object.values(this.$configs.questions).includes(this.recruiterForm.question)) {
                        this.questionType = this.recruiterForm.question;
                    } else {
                        this.questionType = this.$configs.questions.other;
                    }
                })
                .catch((e) => {
                    console.log(e);
                    // this.$alertService.showErrorDialog(null, 'エラーが発生しました。');
                })
                .finally(() => loading.hide());

            this.$api.get("/default-image").then((r) => {
                this.defaultImageUrl = r.data.data;
            });
        },

        validations: {
            recruiterForm: {
                recruiter_name: { required },
                num_of_employees: { numeric },
                phone1: { required, phoneformat },
                phone2: { phoneformat },
                website: { required, url },
                incharge_name: { required },
                incharge_name_furigana: { required, isFurigana },
                question: { required, maxLength: maxLength(54) },
                answer: { required },
                video: { matchYoutubeUrl },
                logo: { isTrueImage },
                incharge_photo: { isTrueImage },
            },
            temp_related_image: { isTrueImage },
        },
 
        methods: {
    
            showRelatedImage(index) {
                return this.recruiterForm.related_images[index];
            },

            onQuestionTypeChange() {
                if (this.questionType == this.$configs.questions.other) {
                    this.recruiterForm.question = "";
                } else {
                    this.recruiterForm.question = this.questionType;
                }
                console.log(this.recruiterForm.question);
            },

            onLogoChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                const file = files[0];
                const ext = file.name.split(".").pop().toLowerCase(); 
			    if (ext == "png" || ext == "jpg" || ext == "jpeg") {
                    
                    this.recruiterForm.logo = file;
					this.$v.recruiterForm.logo.$touch();
					if (this.$v.recruiterForm.logo.$error) {				
						return;
					}			
					this.recruiterForm.logo_url = URL.createObjectURL(file);
					this.recruiterForm.delete_logo = false;
                    
                } else {
                                     
                    this.$alertService.showWarningDialog(null, this.$tc('alertMessage.imageTypeWarning'),this.$tc('common.close')).then();
                   
                }
                e.target.value = '';
            },

            onInchargePhotoChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                const file = files[0];
                const ext = file.name.split(".").pop().toLowerCase(); 
			    if (ext == "png" || ext == "jpg" || ext == "jpeg") {
					this.recruiterForm.incharge_photo = file;
					this.$v.recruiterForm.incharge_photo.$touch();
					if (this.$v.recruiterForm.incharge_photo.$error) {				
						return;
					}			
					this.recruiterForm.incharge_photo_url = URL.createObjectURL(file);
					this.recruiterForm.delete_incharge_photo = false;
						
                } else {
                                        
                    this.$alertService.showWarningDialog(null, this.$tc('alertMessage.imageTypeWarning'),this.$tc('common.close')).then();
                   
                }
                e.target.value = '';
            },

            onRelatedImagesChange(e) {
            
                const files = e.target.files || e.dataTransfer.files;
                if (files.length + this.recruiterForm.related_images.length > 4) {
                    this.$alertService.showErrorDialog(null, '許可されている最大ファイル数を超えています。');
                    return;
                }
                // --Validation of files
                // for (let index = 0; index < files.length; index++) {
                //     this.temp_related_image = files[index];
                //     this.$v.temp_related_image.$touch();
                //     if (this.$v.temp_related_image.$error) 
                //         return;
                // }

                let file_names = ["photo_1", "photo_2", "photo_3", "photo_4"];
                let taken = this.recruiterForm.related_images.map((x) => {
                    return x.url.slice(6, x.url.indexOf("."));
                });
                let availables = file_names.filter((x) => !taken.includes(x));
                const vm = this;
                Array.from(files).forEach((file) => {
                    const ext = file.name.split(".").pop().toLowerCase(); 
			    	if (ext == "png" || ext == "jpg" || ext == "jpeg") {
                        let relateImagesIndex = file_names.indexOf(availables.shift());
                        let filename = `${vm.recruiterForm.recruiter_number}_${file_names[relateImagesIndex]}`;
                        let extension = file.type.split('/').pop();
                        let entry = {
                            file: file,
                            url: `${filename}.${extension}`,
                            file_url: URL.createObjectURL(file),
                            file_type: 'photo',
                            user_type: 'recruiter',
                        }				
                        vm.recruiterForm.related_images.splice(relateImagesIndex, 0, entry);
                        let deleteFlagIndex = vm.recruiterForm.delete_related_images.indexOf(filename);
					if (deleteFlagIndex == -1) {
						vm.recruiterForm.delete_related_images.splice(deleteFlagIndex, 1);
					}
						
                    }else{                        
                        this.$alertService.showWarningDialog(null, this.$tc('alertMessage.imageTypeWarning'),this.$tc('common.close')).then(); 
                    }
                });
                e.target.value = '';
            },
 
            deleteLogo() {
                // this.$alertService.showConfirmDialog(null, "Are you sure to delete logo?")
                // .then(r => {
                // if (r.value) {
                this.recruiterForm.logo = "";
                this.recruiterForm.logo_url = this.defaultImageUrl;
                this.recruiterForm.delete_logo = true;
                // }
                // });
            },

            deleteInchargePhoto() {
                // this.$alertService.showConfirmDialog(null, "Are you sure to delete incharge person photo?")
                // .then(r => {
                // if (r.value) {
                this.recruiterForm.incharge_photo = "";
                this.recruiterForm.incharge_photo_url = this.defaultImageUrl;
                this.recruiterForm.delete_incharge_photo = true;
                // }
                // });
            },

            deleteRelatedImage(index) {
                let uploadedFile = this.recruiterForm.related_images.splice(index, 1);
                let filename = uploadedFile[0].url.slice(0, uploadedFile[0].url.indexOf("."));
                if (this.recruiterForm.delete_related_images.indexOf(filename) == -1) this.recruiterForm.delete_related_images.push(filename);
            },
            cancelBtn()
            {
                let paginate = {
                     pageCount: this.$store.getters.page.pageCount,
                     pageName : 'RecruiterList'
                 }
                 this.$store.commit('page',paginate)
                 this.$router.push({ path: "/admin/recruiter-list" });

            },

            updateProfile() {
                this.$v.recruiterForm.$touch();
                if (this.$v.recruiterForm.$invalid) {
                    return;
                }

                let paginate = {
                     pageCount: this.$store.getters.page.pageCount,
                     pageName : 'recruiterList'
                 }
                 this.$store.commit('page',paginate)

                
                //   console.log(this.recruiterForm.logo)
                let data = new FormData();
                buildFormData(data, this.recruiterForm);
                this.$set(this.recruiterForm, "id", this.$route.params.id);
                 let loading = this.$loading.show();
                // console.log('test',this.recruiterForm.logo)
                this.$api
                    .post("/recruiter/recruiters/" + `${this.$route.params.id}` + "/update", data)
                    .then((res) => {
                        console.log("update:", res.data);
                        this.$alertService.showSuccessDialog(
                        null,
                        this.$t("alertMessage.updateSuccess"),
                        this.$t("common.close")
                    );
                    let paginate = {
                            pageCount: this.$store.getters.page.pageCount,
                            pageName : 'RecruiterList'
                        }
                        this.$store.commit('page',paginate)
                        this.$router.push({ path: "/admin/recruiter-list" });
                    })
                    .catch((e) => {
                        console.log(e);
                    })
                    .finally((f) => {
                        console.log(f);
                         loading.hide();
                        // this.loading = false;
                    });
            },
        },
    };
</script>
<style lang="scss" scoped>
.border{
    margin-bottom: 20px;
    padding: 20px 20px 10px 20px;
    border: 1px solid #9b9898;
    border-radius: 5px;
}
.border .form-group{
    width: 65%;
}


.image-block {
    width: 150px;
    height: 150px;
    display: flex;
    padding: 5px;
    align-items: center;   
    .img-contain{
        width: 100%;
        height: 100%;        
        object-fit: contain;        
        object-position: top;  
    }
}
/* intro edit */
.upload-content {
    position: relative;
    display: flex;
    padding: 20px 0;
    margin-top: .5rem;;
    background: #fff;
    color: #333;
    justify-content: center;
    align-items: center;
}
.upload-content::after {
    content: "";
    position: absolute;
    background: linear-gradient(to right, #B5C4CC 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(#B5C4CC 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(to right, #B5C4CC 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(#B5C4CC 50%, rgba(255, 255, 255, 0) 0%);
    background-position: top, right, bottom, left;
    background-repeat: repeat-x, repeat-y;
    background-size: 25px 4px, 4px 25px;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    z-index: 1;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 2;
}

.upload-btn {
  border: 1px solid #B5C4CC;
  background-color: #fff;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
  color: #333; 
  box-shadow: none;
}

.upload-file {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 45px;
}
.base-align-btn{
    align-self: flex-start;
    margin-top: auto;
}
.upload-content .fa-cloud-upload {
    color: #b5c4cc;
    font-size: 50px;
}
.img-wrapper{
    position: relative;
    display: inline-block;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    margin-bottom: 20px;
}
.align-label {
    display: inline-block;
    width: 130px;
}
.delete-btn{
    position: absolute;
    top: -10px;
    right: -5px;
    width: 35px;
    height: 35px;
    font-size: 16px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    color: #919191;
    border: 1px solid;
    vertical-align: middle;
    cursor: pointer;
    line-height: 35px;
    cursor: pointer;
}

.w-100 {
    width: 100%!important;
}
//image same with job
.img-block {
    width: 200px;
    height: 150px;
    border: 1px solid #ddd;
    text-align: center;
    padding: 10px;
}
.img-block img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;   
}
.scout-box-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 240px;
    padding: 10px;
    border: 1px solid #ddd;
}
.scout-box-image .img-contain{
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
}
.related-row{
    max-width: 80%;
    margin-bottom: 20px;
}
.related-block {
    display: flex;
    align-items: center;
    width: 24%;
    height: 155px;
    margin: 0 1% 0 0;
    padding: 10px;
    border: 1px solid #dee2e6 !important;
    border-radius: 0.25rem;
}
.related-block .img-contain {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
}
</style>