<template>
	<div class="shop"  v-if="goods_info != undefined">
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
		<div class="goods_info_price">￥{{all_sku.length>0?all_sku[0].price:goods_info.price}}<span>￥{{goods_info.marking_price}}</span></div>
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
			  	v-if='car_num>0'
			  	:info="car_num"
			    icon="cart-o"
			    text="购物车"
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
				  	<div class="goods_sku_title">{{goods_info.title}}<p>￥{{price}}</p></div>
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

				<div class="sku_bjq"><span style="float:left;line-height: 2rem;margin-right: 1rem;">数量: </span><van-stepper style="float: left;" v-model="buy_num" /><span style="float:left;line-height: 2rem;margin-left: 1rem;color:#999">库存: {{goods_num}}</span></div>

				<div class="sku_comf"><div style="width:50%;border:1px solid #f1f1f1;border-right: none;line-height: 3rem;float:left;box-sizing: border-box;text-align: center;"  @click="showBase = false">取 消</div><div style="width:50%;background:#f44;color:#fff;float:left;text-align: center;line-height: 3rem;" @click="buy">确 认</div></div>
			  	
			</van-action-sheet>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showBase:false,
				no_sku:true,
				images:'',
				shop_logo:'',
				shop_title:'',
				goods_info:null,
				goods:{},
				goods_id:0,
				goods_num:0,
				changeRed:'changeRed',
				changeList:[],
				all_sku:[],
				real_sku:null,
				buy_num:1,
				price:0,
				is_buy:true, // 购买还是加入购物车
				car_num:0,
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
					_this.all_sku = res.data.info.get_all_sku;

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
			get_goods_car_num:function(){
				var _this = this;
				this.$get(this.ROOT_URL + "ShopApi/car/get_goods_car").then(function(res){
					_this.car_num = res.data;
				});
			},
			onClickButton:function(e){
				this.showBase = true;
				if(this.goods_info.get_all_sku.length>0){
					this.no_sku = false;
				}else{
					this.price = this.goods_info.price;
					this.goods_num = this.goods_info.num;
				}
				
				if(e){
					this.is_buy = e;
				}else{
					this.is_buy = e;
				}
				
			},
			onChangeRed:function(a,b){
				for(var i=0;i<this.changeList.length;i++){
					this.changeList[b]['arr'][i] = '';
				}
				this.changeList[b]['arr'][a]='changeRed';
				this.$forceUpdate();

				// 获取数据
				this.chose_sku();
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
				if(point.length!=this.changeList.length){
					return;
				}
				// console.log(this.changeList,point);

				this.get_real_sku(this.changeList,point);

			},
			// 获取真正sku
			get_real_sku:function(skus,point){
				var sku = [];
				for(var i=0;i<skus.length;i++){
					for(var a=0;a<skus[i].arrs.length;a++){
						if(a == point[i]){
							sku.push(skus[i].arrs[a]);
						}
					}
				}

				var real_sku = this.get_real_sku_end(sku);
				this.real_sku = real_sku;
				this.price = real_sku['price'];
				this.goods_num = real_sku['num'];

			},
			// 开始循环获取真正sku
			get_real_sku_end:function(sku){
				var real_sku = null;
				outs:
				for(var i=0;i<this.all_sku.length;i++){
					var arr = []
					var sku_name = this.all_sku[i].name;
					var sku_name_arr = sku_name.split(',');
					var is_ok = 0;
					for(var a=0;a<sku_name_arr.length;a++){
						sku.find(function(e){
							if(e == sku_name_arr[a]) {
								is_ok += 1;
								// console.log(e ,sku_name_arr[a],is_ok);
							} 
						});
						if(is_ok == sku_name_arr.length){
							real_sku = this.all_sku[i];
							break outs;
						}
					}
				}

				return real_sku;
			},
			// 确认按钮
			buy:function(){
				if(this.real_sku === null && this.no_sku === false){
					this.$toast({
						position:'bottom',
						message:'请先选好规格！',
					});
					return;
				}else{
					if(this.is_buy){
						this.real_buy();
					}else{
						this.add_car();
					}
				}
			},
			// 加入购物车
			add_car:function(){
				var _this = this;
				this.$post(this.ROOT_URL + "ShopApi/car/add_goods_car",{sku:this.real_sku,buy_num:this.buy_num,goods_id:this.$route.params.id,price:this.price}).then(function(res){
		    		if(res.code == 500){
		    			_this.$toast({position:'bottom',message:'请先登录！'});
		    			_this.$router.push({path:'/user/login'});
		    		}
		    		if(res.code == 200){
		    			_this.$toast({position:'bottom',message:'购物车添加成功！'});
		    			_this.get_goods_info();
		    		}

		    		if(res.code == 401){
		    			_this.$toast({position:'bottom',message:res.message});
		    			_this.get_goods_info();
		    		}
		    		_this.showBase = false;
		    		_this.get_goods_car_num();
		    	});
			},
			// 真正购买
			real_buy:function(){
				var goods_list = [{sku:this.real_sku,buy_num:this.buy_num,goods_id:this.$route.params.id,price:this.price,goods_info:this.goods_info}];
				this.$router.push({name:'order',params:{goods_list:goods_list}});
			},
			

		},
		mounted(){
			this.get_goods_info();
			this.get_goods_car_num();
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
.sku_attr{}
.sku_attr_li{border:none;margin-left: 1rem;float: left;line-height: 1.5rem;}
.sku_attr_first ul li{border:1px solid #efefef;display: block;float: left;padding: 0.2rem 0.5rem;margin-left: 1rem;margin-bottom: 1rem;border-radius: 0.2rem;}
.sku_attr_first:after{display: block;clear: both;content:'';}
.sku_attr_first{ }
.sku_attr_first{clear: both;}
.changeRed{background: #f44;color:#fff;border:none;}
.sku_bjq{margin-left:1rem; margin-bottom: 2rem;}
.sku_bjq:after{clear: both;content: "";display:block;}
</style>