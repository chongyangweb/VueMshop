<template>
	<div class="shop">
		<van-search placeholder="请输入搜索关键词" v-model="keywords" />
		<van-swipe :autoplay="3000" indicator-color="white" :height="180">
		  <van-swipe-item v-for="v in slide"><router-link :to="v.url"><img :src="v.image_url" /></router-link></van-swipe-item>
		</van-swipe>
		<div class="xian"></div>
		<div class="index_nav">
			<van-row>
			  <van-col span="6"><div class="index_nav_rand" @click="$router.push({name:'shops'})"><i class="iconfont">&#xe654;</i></div>附近店铺</van-col>
			  <van-col span="6"><div class="index_nav_rand index_nav_rand2"><i class="iconfont">&#xe8cc;</i></div>免单专区</van-col>
			  <van-col span="6"><div class="index_nav_rand index_nav_rand3"><i class="iconfont">&#xe606;</i></div>今日免单</van-col>
			  <van-col span="6"><div class="index_nav_rand index_nav_rand4"><i class="iconfont">&#xe618;</i></div>分销中心</van-col>
			</van-row>
		</div>
		<div class="xian"></div>

		<!-- // 秒杀 -->
		<div class="miaosha">
			<div class="index_block_title">
				<div class="index_miaosha_title">限时抢购</div>
				<div class="index_miaosha_is_start">即将开始</div>
				<div class="index_miaosha_time"><i class="iconfont">&#xe60a;</i>00:13:59</div>
			</div>
			<div class="index_miaosha_list">
				<van-row>
					 <van-col span="8">
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-26/e9c456d1fc792b3fe47d2afd6f62c8dc.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 	
					 </van-col>
					 <van-col span="8">
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-26/e9c456d1fc792b3fe47d2afd6f62c8dc.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </van-col>
					 <van-col span="8">
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-26/e9c456d1fc792b3fe47d2afd6f62c8dc.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </van-col>
				</van-row>
				
			</div>
			
		</div>
		<div class="xian"></div>

		<!-- // 免单商品 -->
		<div class="miaosha">
			<div class="index_block_title">
				<div class="index_miaosha_title">免单商品</div>
				<div class="index_miaosha_time">更多 >></div>
			</div>
			<div class="index_miaosha_list">
				<ul>
					 <li v-for="v in free_goods_list">
					 	<router-link :to="{name:'goods_index',params:{id:v.id}}">
					 	<div class="index_miaosha_list_blcok">
					 		<img :src="v.images.split(',')[0]">
					 		<p>{{v.title}}</p>
					 		<p class="miaosha_font_price">￥{{v.get_sku != null?v.get_sku.price:v.price}}</p>
					 	</div>
					 	</router-link>
					 </li>
				</ul>
			</div>
		</div>
		<div class="xian"></div>

		<!-- // 最新产品 -->
		<div class="miaosha" style="margin-bottom: 2rem;">
			<div class="index_block_title">
				<div class="index_miaosha_title">最新产品</div>
				<div class="index_miaosha_time">更多 >></div>
			</div>
			<div class="index_miaosha_list">
				<ul>
					 <li v-for="v in new_goods_list">
					 	<div class="index_miaosha_list_blcok">
					 		<img :src="v.images.split(',')[0]">
					 		<p>{{v.title}}</p>
					 		<p class="miaosha_font_price">￥{{v.get_sku != null?v.get_sku.price:v.price}}</p>
					 	</div>
					 	
					 </li>
				</ul>
			</div>
		</div>

		<!-- // 底部 -->
		<div class="footbar">
			<van-tabbar active-color="#dc0000" v-model="active" route>
			  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
			  <van-tabbar-item icon="search">服务</van-tabbar-item>
			  <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				keywords:'',
				active:0,
				free_goods_list:[],
				new_goods_list:[],
				slide:[],
			}
		},
		methods:{
			// 获取免单产品
			get_free_goods:function(){
				var _this = this;
				this.$post(this.ROOT_URL + 'ShopApi/goods/get_free_goods',{limit:'6'}).then(function(res){
					_this.free_goods_list = res.data.list;
				});
			},
			// 获取最新产品
			get_new_goods:function(){
				var _this = this;
				this.$post(this.ROOT_URL + 'ShopApi/goods/get_new_goods',{limit:'12'}).then(function(res){
					_this.new_goods_list = res.data.list;
				});
			},
			// 获取最新产品
			get_slide:function(){
				var _this = this;
				this.$get(this.ROOT_URL + 'ShopApi/slide/get_slide').then(function(res){
					_this.slide = res.data.list;
				});
			},
		},
		mounted(){
			this.get_free_goods();
			this.get_new_goods();
			this.get_slide();
		},
	};
</script>

<style>
.index_nav{text-align: center;margin-bottom: 1rem;}
.index_nav_rand{background: #ff7679;border-radius: 50%;height: 3rem;width: 3rem;margin:0 auto;color:#fff;display: block;margin-top: 1rem;box-sizing: border-box;padding-top: 0.7rem;margin-bottom: 0.8rem;}
.index_nav_rand i{font-size: 1.6rem;margin-top: 4rem;}
.index_nav_rand2{background: #e6a23c}
.index_nav_rand3{background: #07c160;}
.index_nav_rand4{background: #409eff;}
.index_block_title{height: 3rem;border-left: 3px solid #dc0000;line-height: 3rem;}
.miaosha:after{display: block;clear: both;content: ''}
.index_miaosha_title{padding-left: 1rem;font-weight: bold;float: left;}
.index_miaosha_is_start{font-size: 12px;background: #dc0000;display: block;float: left;color: #fff;padding: 0 0.6rem;border-radius: 0.4rem;line-height: 1.4rem;margin-top: 0.8rem;margin-left: 1rem;}
.index_miaosha_time{float: right;margin-right: 1rem;}
.index_miaosha_time i{margin-right: 0.5rem;font-size: 16px;}
.index_miaosha_list{margin-bottom: 1rem;}
.index_miaosha_list ul li{width: 33.33333%;float: left;margin-bottom: 1rem;}
.index_miaosha_list_blcok{float: left;display: block; width: 100%;margin-top: 1rem;}
.index_miaosha_list_blcok img{width: 110px;height: 110px;display: block;margin: 0 auto;margin-bottom: 0.5rem;box-sizing: border-box;border: 1px solid #f2f2f2;}
.index_miaosha_list_blcok p{width: 110px;height: 110px;display: block;margin: 0 auto;text-align: center;overflow: hidden;height: 1rem;font-size: 12px;}
.index_miaosha_list_blcok p.miaosha_font_price{margin-top: 0.3rem;color: #dc0000;}
</style>