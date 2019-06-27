module.exports = {
    configureWebpack: {//这里是添加的部分
      externals:{
      	'vue': 'Vue',
    	  'vue-router': 'VueRouter',
      }
    },
}
