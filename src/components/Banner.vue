<template>
  <div class="banner">
    <div class="logo">
        <img src="@/assets/logo.png" alt="">
    </div>
    <ul class="navbar">
        <li><router-link to="#">主页</router-link></li>
        <li><router-link to="#">主页</router-link></li>
        <li><router-link to="#">主页</router-link></li>
        <li><router-link to="#">主页</router-link></li>
        <li ><div class="music"></div></li>
        <li ><div class="about"></div></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.banner {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 120px;
    background-color:  rgba(23, 14, 5, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        padding-left: 91px;
        width: 183px;
        height: 70px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .navbar {
        width: 960px;
        display: flex;
        padding-right: 25px;
        justify-content: flex-start;
    
        li {
          
            a {
                display: block;
                margin:33px 20px;
                width: 151px;
                height: 54px;
                background-color: rgba(45, 49, 51, 0.82);
                border-radius: 57px;
                text-decoration: none;
                text-align: center;
                line-height: 54px;
                font-size: 28px;
                color: white;
            }
            .music,.about {
                width: 70px;
                height: 70px;
                margin: 25px 12px;
                border-radius: 50%;
                background-attachment: fixed;
              
            }
            .music {
                margin-left: 20px;
                background: url("../assets/music.png") no-repeat;
                background-color: rgba(105, 105, 105, 1);
                background-size: 70% ;
                background-position: 10px;
            }
            .about {
                background: url("../assets/share.png") no-repeat;
                background-color: rgba(105, 105, 105, 1);
                background-size: 70% ;
                background-position: 10px ;
            }
        
        }

      
    }
}
</style>