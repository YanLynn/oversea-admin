<template>
    <div class="data_table">
        <table class="table is-bordered data-table table-bordered">
            <thead>
                <tr>            
                <th v-if="showCheckbox">
                <input type="checkbox" @click="emitToParent" v-model="checkornot" />
                </th>              
                    <th v-for="column in columns" :key="column.id" @click="$emit('sort', column.label)"
                        :class="sortKey === column.label ? (sortOrders[column.label] > 0 ? 'sorting_asc' : 'sorting_desc') : 'sorting'"
                        :style="'width:'+column.width+';'+'cursor:pointer;'">
                        {{column.name}}
                    </th>
                </tr>
            </thead>
            <slot></slot>
        </table>
        <!-- <div v-if="totalLength === 0" class="no-data-txt-border">
            <h5 class="main-header text-center">{{ $t('common.no_data_found_message')}}</h5>
        </div> -->
    </div>    
    
</template>

<script>
    export default {
        
        props: ['columns', 'sortKey', 'sortOrders','removeChecked', 'showCheckbox','totalLength'],
        data() {
            return {
               checkornot:false,
            }
        },
        watch:{
            'columns'(){
            }
            
        },
      
        methods:{          

            emitToParent(){
               if(this.checkornot == false)
               {
                   this.checkornot = true;
               }
               else{
                   this.checkornot = false;
               }
                this.$emit('check-all',this.checkornot)
            },
            uncheck()
            {
                this.checkornot = false;
                // console.log(this.checkornot);
            }
        }
    }
</script>
