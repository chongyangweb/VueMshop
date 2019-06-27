<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted(){
    var _this = this;
    // html5定位
    if(!this.$getLocation()){
      this.$toast('无法定位，请设置允许！');
    }else{
      navigator.geolocation.getCurrentPosition(function(e){
        localStorage.setItem('mshop_lng',e.coords.longitude);
        localStorage.setItem('mshop_lat',e.coords.latitude);
        _this.$get('https://restapi.amap.com/v3/geocode/regeo?parameters',{key:'79f3a628c906e1fc7384a6f19d478ae3',location:e.coords.longitude+','+e.coords.latitude}).then(function(res){
          _this.$toast(res.regeocode.formatted_address);
          localStorage.setItem('mshop_province',res.regeocode.addressComponent.province);
          localStorage.setItem('mshop_city',res.regeocode.addressComponent.city);
          localStorage.setItem('mshop_region',res.regeocode.addressComponent.district);
        });
        // http://api.map.baidu.com/location/ip?ip=124.133.254.59&ak=abDsBedrGw46lo1CyQuwZs9magjV5gSf&coor=
      },function(error){
          _this.$toast('定位失败：'+error.message);
          var hadLng =  localStorage.getItem('mshop_lng');
          if(_this.$isEmpty(hadLng)){ // 判断是否存在定位  不存在则默认定位
            var lng = '113.14619';
            var lat = '29.37800';
            localStorage.setItem('mshop_lng',lng);
            localStorage.setItem('mshop_lat',lat);
            _this.$get('https://restapi.amap.com/v3/geocode/regeo?parameters',{key:'79f3a628c906e1fc7384a6f19d478ae3',location:lng+','+lat}).then(function(res){
              // _this.$toast(res.regeocode.formatted_address);
              localStorage.setItem('mshop_province',res.regeocode.addressComponent.province);
              localStorage.setItem('mshop_city',res.regeocode.addressComponent.city);
              localStorage.setItem('mshop_region',res.regeocode.addressComponent.district);
            });
          }
          
      }, {
          enableHighAccuracy: true
          ,timeout : 5000
      });
    }

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #333;
  font-size: 14px;
  /*margin-top: 60px;*/
}
a{color:#333;}
a:active{color:#dc0000;}
</style>
