<script>
export default {
    props: {
        limitpc: {
            type: Number,
            default: 5
        }
    },

    data() {
        return {
            page: {
                default: 1,
                type: Number
            },
            delete_ids_transactions: [],
            selected: [],
            parentChecked: false,
            projects: [],
            sortKey: "",
            perPage: ["5", "10", "20", "30"],
            tableData: {
                draw: 0,
                length: 5,
                column: 0,
                dir: "desc"
            },
            pagination: {
                lastPage: "",
                currentPage: "",
                total: "",
                lastPageUrl: "",
                nextPageUrl: "",
                prevPageUrl: "",
                from: "",
                to: ""
            }
        };
    },
    mounted() {
        this.getData();
    },
 
    methods: {
        getData(page) {
          
            this.$route.name == 'job-list' ? this.tableData.column = 9 : '';
            this.selectAll();
            this.tableData.draw++;
            var jsonData = {
                tableData: this.tableData,
                filteredData: this.filteredData,
                columns:this.columns
            };
            page = page ?? 1;
           
            let loader = this.$loading.show({
                container: this.$refs.loadingRef,
                isFullPage: false
                //-- အထက်ပါ option 2 ခုမပါရင် loading bar ဟာ full page ဖြစ်သွားပါလိမ့်မယ်
            });
 
            this.$api
                .post(this.base_url + "?page=" + page, jsonData)
                .then(response => {
                    loader.hide();
                  
                    this.projects = response.data;
                    // this.projects = [];
                    this.checkedAll = false;
                })
                .catch(errors => {
                    loader.hide();
                    console.log(errors);
                });
        },

        deleteData() {
            if(this.selected.length > 0){
                this.$alertService
                .showConfirmDialog(null, this.$t('alertMessage.delete_confirm_message'), this.$t('alertMessage.yes'), this.$t('alertMessage.no'))
                .then((dialogResult) => {
                    if(dialogResult.value){
                        let checkedData = {};
                        this.$set(checkedData, "checked_data", this.selected);
                        this.$api
                            .post(this.base_url + "/delete", checkedData)
                            .then(response => {
                                this.delete_ids_transactions = [];
                                if(Array.isArray(response.data.data) && response.data.data.length > 0){
                                    this.delete_ids_transactions = response.data.data;
                                    this.$alertService.showErrorDialog(null, "関連しているデータがありますので削除されませんでした");
                                }
                                let getpage = 1;
                                if ((this.projects.to - this.selected.length + 1) > this.projects.from) {
                                    getpage = this.projects.current_page;
                                } else {
                                    getpage = this.projects.current_page - 1;
                                }
                                this.getData(getpage);
                            })
                            .catch(errors => {
                                console.log(errors);
                            }); 
                    }
                })

                
            }
            
        },

        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.tableData.column = this.getIndex(this.columns, "label", key);
            this.tableData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
            this.getData();
        },
        getIndex(array, key, value) {
            return array.findIndex(i => i[key] == value);
        },
        selectAll: function(payload) {
            this.selected = [];
            if (payload) {
                for (let i in this.projects.data) {
                    this.selected.push(this.projects.data[i].id);
                }
            } else {
                this.$refs.datatable.uncheck();
                this.selected = [];
            }
        }
    }
};
</script>