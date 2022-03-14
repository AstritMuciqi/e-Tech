<template>
  <div style="height:400px">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="img" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.img {
  height:400px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 15%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://ae01.alicdn.com/kf/S5af06a21c26042e4ba0403e418d96305q.jpg_Q90.jpg_.webp",
        "https://butonks.com/images/thumbnails/1280/393/promo/6/[RS]-Laptop-12th-Gen-e-tailor-web-banner-1920x590.jpg",
        "https://hhstsyoejx.gjirafa.net/gj50/banners/small_rightsdasdasd-1644932979.jpg",
        "https://ae01.alicdn.com/kf/Seafd8b2c39814f959ef5f5e7fe6a71c1D.jpg_Q90.jpg_.webp",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>