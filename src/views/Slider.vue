<template>
  <div style="height:400px">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="img" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">Next &#10095; </a>
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
  top:11%;
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
        "https://www.bechtle.com/dam/jcr:4007edbd-35c7-4061-a6c9-9e3553eeddde/cw04_mainbanner_samsung-eu.jpg",
        "https://www.mekhero.com/image-aplus/G1-I1416FV-mekhero-banner.jpg",
        "https://hajaan.com/wp-content/uploads/2020/11/Keyboard-Common-Page-Main-Banner.png",
        "https://about.att.com/ecms/dam/snr/2022/september2022/storylevelbanner/iconic_STORY_LEVEL_BANNER_1600x483.jpg",
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