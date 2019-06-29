<template>
	<div class="shop">
		<div class="order_top">
			<van-nav-bar
			  title="确定订单"
			  left-text="返回"

			  left-arrow
			  @click-left="$router.go(-1)"
			  @click-right="$router.push({path:'/'})"
			>
			<van-icon name="wap-home" style="color:#dc0000" slot="right" />
			</van-nav-bar>
		</div>

		<div class="order_content">
			<div v-for="v in goods_list">
				<van-card
				  :num="v.buy_num"
				  :price="v.price"
				  :desc="v.sku == null?v.goods_info.sub_title:v.sku.name"  
				  :title="v.goods_info.title"
				  :thumb="v.goods_info.images.split(',')[0]"
				/>
			</div>
			
			
		</div>

		<div class="order_foot">
			<van-submit-bar
			  :price="total_price*100"
			  button-text="提交订单"
			  @submit="onSubmit"
			/>
		</div>

	</div>
</template>

<script>
export default{
	data(){
		return{
			goods_list:null,
			total_price:0,
		}
	},
	mounted(){
		this.goods_list = this.$route.params.goods_list;
		console.log(this.goods_list);
		if(this.goods_list === null || this.goods_list === undefined){
			this.$toast({position:'bottom',message:'异常订单，请返回重新操作！'});
			return;
		}

		// 获取总需要价格
		for(var i=0;i<this.goods_list.length;i++){
			this.total_price += this.goods_list[i].price*this.goods_list[i].buy_num;
		}
	},
}
</script>

<style>
.order_content{margin-top: 1rem;}
</style>