<template>
  <div class="Carrousel">
    <swiper :options="swiperOption" ref="mySwiper" class="center">
      <!-- slides -->
      <swiper-slide v-for="(img, index) in imgs" :key="index">
        <img :src="img" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Carrousel-index",
  data() {
    return {
      user: {
        name: "Carrousel",
      },
      imgs: [
        // "redinbg.png",
        // "neuralbug.jpeg",
        "Rectangle.png",
        "Neural.png",
        // "Rectangle.png",
      ].map((e) => require(`@/assets/${e}`)),
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        // notNextTick: true,
        direction: "horizontal",
        grabCursor: true,
        autoHeight: true,
        height: window.innerHeight,
        mousewheelControl: true,
      },
    };
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper?.swiper;
    },
  },
  mounted() {
    // this.swiper?.slideTo(3, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
.Carrousel {
  //   background-color: black;
  //   height: 50vh;
  //   min-height: 50vh;
  width: 100%;
  .center {
    img {
      width: 100%;
    }
  }
}
</style>