<template>
	<div class="shop">
		<div class="goods_info_top">
			<van-swipe :autoplay="3000" indicator-color="white" :height="250">
			  <van-swipe-item v-for="v in images.split(',')"><img :src="v"  height="250px" style="display:block;margin:0 auto;"></van-swipe-item>
			</van-swipe>
			<div @click="$router.go(-1)" class="back_bg2">
				<van-icon name="arrow-left" /> <!-- <font>返回</font> -->
			</div>
		</div>

		<!-- 商品标题 -->
		<div class="goods_info_title">{{goods_info.title}}</div>
		<div class="goods_info_price">￥{{goods_info.get_all_sku.length!=[]?goods_info.get_all_sku[0].price:goods_info.price}}<span>￥{{goods_info.marking_price}}</span></div>
		<div class="xian1"></div>
		<div class="goods_info_shop_info">
			<router-link :to="'/shop/'+goods_info.user_id">
			<div class="goods_info_shop_avatar"><img :src="shop_logo" width="30px" height="30px"></div>
			<div class="goods_info_shop_name">{{shop_title}}</div>
			<div class="goods_info_go_shop"><van-icon name="arrow" /></div>
			</router-link>
		</div>
		<div class="xian1"></div>

		<div class="goods_info_content">
			<van-tabs>
			  <van-tab title="详情"><div class="goods_info_content_detaile" v-html="goods_info.content"></div></van-tab>
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
			    @click="onClickButton(false)"
			  />
			  <van-goods-action-button
			    type="danger"
			    text="立即购买"
			    @click="onClickButton(true)"
			  />
			</van-goods-action>
		</div>

		<div class="sku">
			<van-action-sheet v-model="showBase" >
				<div class="sku_top">
					<div class="goods_pic">
				  		<img :src="goods.picture" alt="" width="70px" height="70px">
				  	</div>
				  	<div class="goods_sku_title">{{goods_info.title}}<p>￥250.00</p></div>
				</div>

				<div class="sku_attr">
					<ul class="sku_attr_first"  v-for="(v,k) in goods_info.get_all_attr">
						<li class="sku_attr_li">{{v.name}}:</li>
						<li>
							<ul>
								<li v-for="(vo,key) in (v.val).split(',')" v-bind:class="{changeRed:changeList[k]['arr'][key]}" @click="onChangeRed(key,k)">{{vo}}</li>
							</ul>
						</li>
					</ul>
					
				</div>

				<div class="sku_comf"><div style="width:50%;border:1px solid #f1f1f1;border-right: none;line-height: 3rem;float:left;box-sizing: border-box;text-align: center;" >取 消</div><div style="width:50%;background:#f44;color:#fff;float:left;text-align: center;line-height: 3rem;" @click="chose_sku">确 认</div></div>
			  	
			</van-action-sheet>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showBase:false,
				images:'',
				shop_logo:'',
				shop_title:'',
				goods_info:{},
				goods:{},
				goods_id:0,
				changeRed:'changeRed',
				changeList:[],
			}
		},
		methods:{
			get_goods_info:function(){
				var _this = this;
				this.$post(this.ROOT_URL + 'ShopApi/goods/get_goods_info',{id:this.$route.params.id}).then(function(res){
					_this.goods_info = res.data.info;
					_this.images = res.data.info.images;
					_this.shop_logo = res.data.info.get_shop.logo;
					_this.shop_title = res.data.info.get_shop.title;

					_this.goods.title = _this.goods_info.title;
					_this.goods_id = _this.goods_info.id;
					_this.goods.picture = _this.images.split(',')[0];

					_this.changeList = _this.goods_info.get_all_attr;
					for(var i=0;i<_this.goods_info.get_all_attr.length;i++){
						var arr = _this.goods_info.get_all_attr[i].val;
						var Arrs = arr.split(',');
						_this.changeList[i].arr = [];
						_this.changeList[i].arrs = [];
						for(var a=0;a<Arrs.length;a++){
							// console.log(_this.changeList[i].arr);
							_this.changeList[i].arr[a] = '';
							_this.changeList[i].arrs[a] = Arrs[a];
						}
					}



				});
			},
			onClickButton:function(e){
				// console.log(e);
				this.showBase = true;
			},
			onChangeRed:function(a,b){
				for(var i=0;i<this.changeList.length;i++){
					this.changeList[b]['arr'][i] = '';
				}
				this.changeList[b]['arr'][a]='changeRed';
				this.$forceUpdate();
			},
			// 获取点击那个sku
			chose_sku:function(){
				var point = [];
				for(var i=0;i<this.changeList.length;i++){
					for(var a=0;a<this.changeList[i].arr.length;a++){
						if(this.changeList[i].arr[a] == 'changeRed'){
							point.push(a)
						}
					}
				}
				console.log(this.changeList,point);
				if(point.length!=this.changeList.length){
					this.$toast({
						position:'bottom',
						message:'请先选好规格！',
					});
				}
			},
			

		},
		mounted(){
			this.get_goods_info();
		},
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
.goods_pic{border:1px solid #f1f1f1;width: 70px;height: 70px;display: block;background: #fff;float: left;margin-left: 1rem;margin-top: 1rem;}
.goods_sku_title{margin-left: 1rem;margin-top: 1rem;float: left;padding-top: 0.6rem;}
.goods_sku_title p{color:#dc0000;margin:0;margin-top: 0.5rem;}
.sku_top{padding-bottom: 1rem;margin-bottom: 1rem;border-bottom: 1px solid #f1f1f1;}
.sku_top:after{clear: both;display: block;content: ''}
.sku_attr{margin-bottom: 2rem;}
.sku_attr_li{border:none;margin-left: 1rem;float: left;line-height: 1.5rem;}
.sku_attr_first ul li{border:1px solid #efefef;display: block;float: left;padding: 0.2rem 0.5rem;margin-left: 1rem;margin-bottom: 1rem;border-radius: 0.2rem;}
.sku_attr_first:after{display: block;clear: both;content:'';}
.sku_attr_first{ }
.sku_attr_first{clear: both;}
.changeRed{background: #f44;color:#fff;border:none;}
</style>