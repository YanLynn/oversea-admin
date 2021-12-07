<template>
 <div  id="modal-template">
  <transition name="modal">
	<div class="modal-masks" transition="modal">
    <div class="modal-wrappers">
      <div class="modal-containers">
        <div class="modal-headers">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-bodys">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footers">
			<slot name="footer">
				<!-- <button class="modal-buttons" @click="$emit('close')">Close</button> -->
			</slot>
        </div>

      </div>
    </div>
  </div>
  </transition>
 </div>
</template>


<style>
.modal-masks {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}

.modal-wrappers {
  display: table-cell;
  vertical-align: middle;
}

.modal-containers {
  width: 36rem;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;  
  box-shadow: 2px 3px 1px  rgba(127, 127, 127, 1);
  border-radius: 5px !important;
}

.modal-headers {
  background-color: #4772bf;
  padding: 15px;
}

.modal-headers h3 {
  margin: 0;
  color: white;
}

.modal-bodys {
    margin: 10px 0px;
    padding: 10px 20px;
    display: inline-block;
}

.modal-footers {
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
    align-items: center;
    justify-content: center;
}
.modal-footers .modal-default-text {
  -webkit-box-flex: 1;
          flex: 1;
}
.modal-footers .modal-default-button {
  cursor: pointer;
  background: #512da8;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.modal-footers .modal-default-button:hover {
  background-color: #673dcb;
}

.modal-enters {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enters .modal-containers,
.modal-leave-active .modal-containers {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.model-form{
    
}
.model-form > .model-form-1{
	margin: 0px 0px 51px 108px;
}
.model-form > .model-form-1 label{
	margin-right: 15px;
}
.footer-btn-left{
	float: left;
	text-align:right;
	width:200px;

}
.footer-btn-right{
	margin-left:10px;
	text-align:left;
	width:200px;
	float: right;

}
</style>