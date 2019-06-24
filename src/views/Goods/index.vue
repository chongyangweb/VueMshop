<template>
	<div class="shop">
		<div class="goods_info_top">
			<van-swipe :autoplay="3000" indicator-color="white" :height="180">
			  <van-swipe-item><img src="https://hbimg.huabanimg.com/9903e64a6f45276312f0f3f457a29cebbaa83e413dfd4-60hWGT_fw658"></van-swipe-item>
			</van-swipe>
			<div @click="$router.go(-1)" class="back_bg2">
				<van-icon name="arrow-left" /> <!-- <font>返回</font> -->
			</div>
		</div>

		<!-- 商品标题 -->
		<div class="goods_info_title">雷豹冷风扇工业冷风机 移动单冷水冷空调商用制冷风扇网吧厂房冷气机 MFC3600M</div>
		<div class="goods_info_price">￥250.00<span>￥360.00</span></div>
		<div class="xian1"></div>
		<div class="goods_info_shop_info">
			<div class="goods_info_shop_avatar"><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561278075&di=b3dff61f577cde1d2e7b754891d69ac7&src=http://img5.duitang.com/uploads/item/201303/11/20130311195959_QT3t2.thumb.700_0.jpeg" width="30px" height="30px"></div>
			<div class="goods_info_shop_name">宁乡市圣玛岚琪布艺旗舰店</div>
			<div class="goods_info_go_shop"><van-icon name="arrow" /></div>
		</div>
		<div class="xian1"></div>

		<div class="goods_info_content">
			<van-tabs>
			  <van-tab title="详情"><div class="goods_info_content_detaile">商品详情</div></van-tab>
			  <van-tab title="服务"><div class="goods_info_content_detaile">商品服务</div></van-tab>
			</van-tabs>
		</div>

		<!-- 底部bar -->
		<div class="goods_info_foot">
			<van-goods-action>
			  <van-goods-action-icon
			    icon="chat-o"
			    text="客服"
			    @click="onClickIcon"
			  />
			  <van-goods-action-icon
			    icon="cart-o"
			    text="购物车"
			    @click="onClickIcon"
			  />
			  <van-goods-action-button
			    type="warning"
			    text="加入购物车"
			    @click="onClickButton"
			  />
			  <van-goods-action-button
			    type="danger"
			    text="立即购买"
			    @click="onClickButton"
			  />
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	export default{

	};
</script>

<style>
.goods_info_top{position: relative;}
.back_bg2{height: 2rem;width: 2rem;border-radius: 50%;padding-top: 0.5rem;padding-left:0.5rem;box-sizing: border-box;background-color:rgba(0,0,0,0.4); color:#fff;position: absolute;top: 1rem;left:1rem;}
.goods_info_title{font-size: 14px;font-weight: bold;box-sizing: border-box;padding: 0.5rem;}
.goods_info_price{font-size: 20px;color:#dc0000;padding: 0.5rem;padding-top: 0;}
.goods_info_price span{font-size: 14px;color: #999;text-decoration: line-through;margin-left: 0.5rem;}
.goods_info_shop_info{padding:0.5rem;}
.goods_info_shop_info:after{clear: both;display: block;content: "";}
.goods_info_shop_avatar{float: left;margin-right: 0.5rem; width: 10%;}
.goods_info_shop_avatar img{border-radius: 50%;}
.goods_info_shop_name{line-height: 30px;width: 80%;height:30px;overflow: hidden;float: left;}
.goods_info_go_shop{color:#666;float: right;width: 5%;line-height: 36px;}
.goods_info_content_detaile{padding: 0.5rem;}
</style>