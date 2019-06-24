<template>
	<div class="shop">
		<van-search placeholder="请输入搜索关键词" v-model="keywords" />
		<van-swipe :autoplay="3000" indicator-color="white" :height="180">
		  <van-swipe-item><img src="http://cdn.68design.net/work/pic/201906/k3u1u1jxwxhbszpkbjcu.jpg"></van-swipe-item>
		  <van-swipe-item>2</van-swipe-item>
		  <van-swipe-item>3</van-swipe-item>
		  <van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<div class="xian"></div>
		<div class="index_nav">
			<van-row>
			  <van-col span="6"><div class="index_nav_rand" @click="$router.push({name:'shops'})"><i class="iconfont">&#xe654;</i></div>附近店铺</van-col>
			  <van-col span="6"><div class="index_nav_rand index_nav_rand2"><i class="iconfont">&#xe8cc;</i></div>特价专区</van-col>
			  <van-col span="6"><div class="index_nav_rand index_nav_rand3"><i class="iconfont">&#xe606;</i></div>今日免单</van-col>
			  <van-col span="6"><div class="index_nav_rand index_nav_rand4"><i class="iconfont">&#xe618;</i></div>分销中心</van-col>
			</van-row>
		</div>
		<div class="xian"></div>

		<!-- // 秒杀 -->
		<div class="miaosha">
			<div class="index_block_title">
				<div class="index_miaosha_title">限时秒杀</div>
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
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-26/e9c456d1fc792b3fe47d2afd6f62c8dc.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 	
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-23/4b750f88b585e37f0f7d6e24aee12a21.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-10-20/7dc0504720bd814217cce69e7785677f.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-12-11/be9c3dab677cfa8fee0f5c9f4016a059.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-11/e621d8c9f9a1ca947127d94c27db1e70.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
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
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-26/e9c456d1fc792b3fe47d2afd6f62c8dc.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 	
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-06-23/4b750f88b585e37f0f7d6e24aee12a21.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-10-20/7dc0504720bd814217cce69e7785677f.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2017-12-11/be9c3dab677cfa8fee0f5c9f4016a059.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-11/e621d8c9f9a1ca947127d94c27db1e70.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
					 <li>
					 	<div class="index_miaosha_list_blcok">
					 		<img src="//www.itxdd.com/upload/2018-04-16/04c18639b19bfd5927f23dac20d20efe.jpg">
					 		<p>我是标题dasdasdsadasdsad</p>
					 		<p class="miaosha_font_price">￥120.00</p>
					 	</div>
					 </li>
				</ul>
			</div>
		</div>

		// 底部
		<div class="footbar">
			<van-tabbar  active-color="#dc0000">
			  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
			  <van-tabbar-item icon="search">服务</van-tabbar-item>
			  <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				keywords:'',
			}
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