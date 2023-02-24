<template>
  <div class="home">
    <div class="page1">
      <div class="mask"></div>
      <img
        class="tiger"
        src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page1/%E5%BD%A2%E7%8A%B62%402x.png"
        alt=""
      />

      <img
        class="gameName"
        src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page1/%E5%B2%81%E6%98%9F%E5%BC%88%E5%A2%83%402x.png"
        alt=""
      />
      <img
        class="people"
        src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page1/2~4%E4%BA%BA%402x.png"
        alt=""
      />
      <img
        class="caidai"
        src="https://img.js.design/assets/img/63f6dfce9d2376d02ea6d012.png#979ce9b31a4d296b98b2ab6ce92ccff1"
        alt=""
      />
      <img class="slogan" src="../assets/slogan.png" alt="" />
      <img class="slogan2" src="../assets/slogan2.png" alt="" />
    </div>
    <div class="page2">
      <div class="mask"></div>
      <img
        class="sanjiao"
        src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/sanjiao.png"
        alt=""
      />
      <div class="showCards">
        <div class="nav-border"></div>
        <swiper
          class="swiper navSwiper"
          ref="navSwiper"
          :options="swiperOption1"
        >
          <swiper-slide>
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/horse%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/niu%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/sheep%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/tu%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/zhu%402x.png"
              alt=""
            />
          </swiper-slide>
        </swiper>
        <swiper
          thumbsSlider=""
          class="swiper cardSwiper"
          ref="cardSwiper"
          :options="swiperOption2"
        >
          <swiper-slide class="stop-swiping">
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/%E5%8D%A1%E7%89%87%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide class="stop-swiping">
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/%E5%8D%A1%E7%89%87%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide class="stop-swiping">
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/%E5%8D%A1%E7%89%87%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide class="stop-swiping">
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/%E5%8D%A1%E7%89%87%402x.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide class="stop-swiping">
            <img
              src="https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/%E5%8D%A1%E7%89%87%402x.png"
              alt=""
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption1: {
        direction: "vertical",
        mousewheel: true,
        clickable: true,
        setWrapperSize: true,
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true, //点击其他缩略图可跳转,
        loopedSlides: 5,
      },
      swiperOption2: {
        direction: "vertical",
        noSwiping: true,
        noSwipingClass: "stop-swiping",
        setWrapperSize: true,
        slidesPerView: 1,
        loop: true,
        loopedSlides: 5,
      },
    };
  },
  created() {
    this.$nextTick(() => {
      const navSwiper = this.$refs.navSwiper.swiper;
      const cardSwiper = this.$refs.cardSwiper.swiper;
      console.log(navSwiper);
      navSwiper.controller.control = cardSwiper;
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
  }
  .page1 {
    position: relative;
    margin-top: 120px;
    height: 970px;
    width: 100%;
    background: url("https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page1/HighresScreenshot00010%402x.png")
      no-repeat;

    background-size: cover;
    background-position: top center;

    .tiger {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 999px;
    }
    .gameName {
      display: block;
      position: absolute;
      left: 112px;
      height: 148px;
      width: 630px;
      top: 98px;
    }
    .people {
      position: absolute;
      left: 112px;
      top: 345px;
      width: 362px;
      height: 125px;
    }
    .caidai {
      position: absolute;
      left: 112px;
      top: 511px;
      width: 1076px;
      height: 38px;
    }
    .slogan {
      position: absolute;
      left: 995px;
      top: 757px;
      width: 808px;
      height: 112px;
    }
    .slogan2 {
      position: absolute;
      left: 535px;
      top: 369px;
      width: 1304px;
      height: 76px;
    }
  }
  .page2 {
    position: relative;
    width: 100%;
    height: 920px;
    background: url("https://starimg-1307748861.cos.ap-beijing.myqcloud.com/newHome/page2/beijing.png")
      no-repeat;
    background-size: cover;
    background-position: top center;
    overflow: hidden;
    .sanjiao {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 500px;
      height: 420px;
    }
    .showCards {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 1400px;

      .nav-border {
        position: absolute;
        right: -20px;
        top: 50%;
        z-index: 2;
        transform: translateY(-50%);
        width: 500px;
        height: 306px;
        border: 20px solid white;
        border-radius: 50px 0px 50px 0px;
      }
      .navSwiper {
        position: absolute;
        right: 0;
        top: 0;
        width: 500px;
        height: 100%;
        /* background-color: rgba(29, 29, 29, 1);*/
        z-index: 3;
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            width: 100%;
            height: 100%;
            text-align: center;
            position: relative;
            font-size: 30px;
            color: white;

            img {
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate3d(-50%, -50%, 0);
              width: 300px;
              height: 100%;
            }
          }
          .swiper-slide-active {
            backdrop-filter: blur(5px);
            border-radius: 35px 0px 35px 0px;
          }
        }
      }
      .cardSwiper {
        overflow: hidden;
        width: 724px;
        height: 705px;
        font-size: 30px;
        color: white;
        margin: 100px 100px;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>