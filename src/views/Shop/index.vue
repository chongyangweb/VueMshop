<template>
	<div class="shop">
		<div class="goods_info_top">
			<van-swipe :autoplay="3000" indicator-color="white" :height="200">
			  <van-swipe-item v-for="v in shop_info.images.split(',')"><img :src="v"  height="200px" style="display:block;margin:0 auto;"></van-swipe-item>
			</van-swipe>
			<div @click="$router.go(-1)" class="back_bg2">
				<van-icon name="arrow-left" /> <!-- <font>返回</font> -->
			</div>
		</div>

		<!-- 店铺名字 -->
		<div class="shop_index_name">
			<div class="shop_index_avatar">
				<img :src="shop_info.logo" width="60px" height="60px">
			</div>
			<div class="shop_index_other">
				<div class="shop_index_names">{{shop_info.title}}</div>
				<div class="shop_index_rate">
					<van-rate
					  v-model="rate"
					  :size="16"
					  color="#f44"
					  void-icon="star"
					  void-color="#eee"
					/>
				</div>
				<!-- 详细信息 -->
				<div class="shop_index_det"><i class="iconfont">&#xe654;</i>查看店铺</div>
			</div>
		</div>

		<div class="xian"></div>

		<!-- 产品列表和类目 -->
		<div class="shop_index_product_list">
			<van-tabs>
			  <van-tab title="全部">全部</van-tab>
			  <van-tab title="分类">分类</van-tab>
			</van-tabs>
		</div>
		
		

		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				rate:5,
				shop_info:{},
			}
		},
		methods:{
			get_shop_info:function(){
				var _this = this;
				this.$post(this.ROOT_URL + 'ShopApi/goods/get_shop_info',{id:this.$route.params.id}).then(function(res){
					_this.shop_info = res.data.info;
				});
			},
		},
		mounted(){
			this.get_shop_info();
		},

	};
</script>

<style>

.goods_info_top{position: relative;}
.back_bg2{height: 2rem;width: 2rem;border-radius: 50%;padding-top: 0.5rem;padding-left:0.5rem;box-sizing: border-box;background-color:rgba(0,0,0,0.4); color:#fff;position: absolute;top: 1rem;left:1rem;}
.shops_where{text-align: center;line-height: 3rem;}
/*.shops_where .van-col--8:active{background: #dc0000;color:#fff;}
.shops_where .van-col--8:visited{background: #dc0000;color:#fff;}*/
.shops_list_info{margin-top: 1rem;margin-bottom: 1rem;border-bottom: 1px solid #efefef;}
.shops_list_info:after{display: block;clear: both;content:'';}
.shops_list_info_left{width: 110px;float: left;}
.shops_list_info_left img{border-radius: 50%;}
.shops_list_info_right{text-align: left;}
.shops_list_info_title{font-weight: bold;line-height: 1rem;}
.shops_list_info_map{font-size: 12px;line-height: 1rem;}
.shops_list_info_map i{margin-right: 0.2rem;color:#dc0000;}
.shops_list_info_jl{font-size: 12px;line-height: 2rem;}
.shops_pic_lists{margin-top: 0.5rem;}
.shops_pic_lists ul li{float: left;width: 20%;margin-right: 0.2rem;}
.shops_pic_lists ul li img{width: 100%}
.shop_index_avatar{width: 100px;float: left;}
.shop_index_avatar img{border-radius: 50%;margin-left: 1rem;}
.shop_index_name{margin-top: 1rem;margin-bottom: 1rem;}
.shop_index_name:after{display: block;content:'';clear: both;}
.shop_index_other{float: left;}
.shop_index_names{font-weight: bold;}
.shop_index_rate{margin-top: 0.3rem;}
.shop_index_det{font-size: 12px;}
.shop_index_det{background: #dc0000;color:#fff;padding:0.2rem 0.4rem;border-radius: 0.4rem;width: 4rem;margin-top: 0.4rem;}
.shop_index_det i{margin-right: 0.2rem;font-size: 12px;}
</style>