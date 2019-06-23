<template>
	<div class="shop">
		<div class="shops_top_banner">
			<div @click="$router.go(-1)" class="back_bg">
				<van-icon name="arrow-left" /> <!-- <font>返回</font> -->
			</div>
		</div>
		<!-- <div class="xian"></div> -->

		
		<!-- 店铺条件 -->
		<div class="shops_where">
			<van-tabs >
			    <van-tab title="综合排序">
					<div class="shops_list_info" @click="$router.push({path:'/shop/1'})">
						<div class="shops_list_info_left">
							<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561278075&di=b3dff61f577cde1d2e7b754891d69ac7&src=http://img5.duitang.com/uploads/item/201303/11/20130311195959_QT3t2.thumb.700_0.jpeg" width="70px" height="70px">
						</div>
						<div class="shops_list_info_right">
							<div class="shops_list_info_title">宁乡市圣玛岚琪布艺旗舰店</div>
							<div class="shops_list_info_jl">< &nbsp;&nbsp;距离 160km</div>
							<div class="shops_list_info_map"><i class="iconfont">&#xeb96;</i>豪德市场V区5栋17-19</div>
							<div class="shops_pic_lists">
								<ul>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
								</ul>
							</div>
						</div>
					</div>

					<div class="shops_list_info">
						<div class="shops_list_info_left">
							<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561278075&di=b3dff61f577cde1d2e7b754891d69ac7&src=http://img5.duitang.com/uploads/item/201303/11/20130311195959_QT3t2.thumb.700_0.jpeg" width="70px" height="70px">
						</div>
						<div class="shops_list_info_right">
							<div class="shops_list_info_title">宁乡市圣玛岚琪布艺旗舰店</div>
							<div class="shops_list_info_jl">< &nbsp;&nbsp;距离 160km</div>
							<div class="shops_list_info_map"><i class="iconfont">&#xeb96;</i>豪德市场V区5栋17-19</div>
							<div class="shops_pic_lists">
								<ul>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
								</ul>
							</div>
						</div>
					</div>

					<div class="shops_list_info">
						<div class="shops_list_info_left">
							<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561278075&di=b3dff61f577cde1d2e7b754891d69ac7&src=http://img5.duitang.com/uploads/item/201303/11/20130311195959_QT3t2.thumb.700_0.jpeg" width="70px" height="70px">
						</div>
						<div class="shops_list_info_right">
							<div class="shops_list_info_title">宁乡市圣玛岚琪布艺旗舰店</div>
							<div class="shops_list_info_jl">< &nbsp;&nbsp;距离 160km</div>
							<div class="shops_list_info_map"><i class="iconfont">&#xeb96;</i>豪德市场V区5栋17-19</div>
							<div class="shops_pic_lists">
								<ul>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
									<li><img src="//www.itxdd.com/upload/2018-03-27/0023c8be414b8d98d0967304a2aeae79.jpeg" alt=""></li>
								</ul>
							</div>
						</div>
					</div>


			    </van-tab>
			    <van-tab title="销量排序">销量排序</van-tab>
			    <van-tab title="距离最近">距离最近</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},

	};
</script>

<style>
.shops_top_banner{height: 140px;position: relative;/*background: url('http://s.qingwuit.com/Uploads/2019_06_01/15593806351611.jpg');*/background-position: top center;color:#fff;font-size: 16px;padding-top: 1rem;padding-left: 1rem;box-sizing: border-box;display: block;background-color: #ff6d77;}
.back_bg{height: 2rem;width: 2rem;border-radius: 50%;padding-top: 0.45rem;padding-left:0.4rem;box-sizing: border-box;background-color:rgba(0,0,0,0.4); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */}
/*.shops_top_banner font{font-size: 14px;margin-top: -0.15rem;float: left;}*/
/*.shops_top_banner .van-icon, .van-icon::before{margin-right: 0.1rem;float: left;}*/
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
</style>