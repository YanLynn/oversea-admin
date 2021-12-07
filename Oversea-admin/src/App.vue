<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "public/css/app.scss";
.swal-remark .swal2-header {
    display: block;
    padding: 0 10px!important;    
}
.swal-remark  .swal2-title {
    font-size: 18px !important;
	color: #0062ff!important;
}
.swal-remark  .swal2-modal .swal2-close {
    margin-top:10px;
    margin-right: 5px;
}
.inner-wrapper {
    width: 1024px;
    padding: 20px 20px 0 20px;
    border: 1px solid #9b9898;
    border-radius: 5px;
    margin-bottom: 20px;
}
.searchbtn {   
    background-color: #0062ff;
    color: #fff;
    width: 120px;
    padding: 10px 0;
    border-radius: 20px;    
}
.w-100{
    width: 100% !important;
}
@media (max-width:1440px) {
    .inner-wrapper {
        width: 100%;
    }
}
</style>
