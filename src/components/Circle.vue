<template>
  <figure class="circle">

    <a href="#" class="circle__minus icon-minus" @click="minus()">
      <svg class="circle__icon">
        <use xlink:href="src/img/sprite.svg#icon-minus"></use>
      </svg> 
    </a>

    <div class="circle__data">
      
      <div class="circle__data-temp">
        <transition name="bump">
          <loader v-if="this.display.temperature === 0"></loader>
          <span v-else>{{ this.display.temperature + '°C'}}</span>
        </transition>
      </div>

      <div class="circle__data-location" @click="goToLink()">
        <span v-if="this.display.city === 'unknown' || this.display.country === 'unknown'"></span>
        <span v-else>{{ `${this.display.city}, ${this.display.country}` }}</span>
      </div>
    </div>

    <a href="#" class="circle__plus icon-plus" @click="plus()">
      <svg class="circle__icon">
        <use xlink:href="src/img/sprite.svg#icon-plus"></use>
      </svg>
    </a>
      
  </figure>
</template>

<script>
  import Loader from '../components/static/Loader';

  export default {
    components: {
      Loader
    },
    props: {
      currentData: {
        type: Object,
        required: true
      },
      capitalsArray: {
        type: Array,
        required: true
      }
    },
    data: function() {
      return {
        loaderVisible: true,
        display: this.currentData,
        capitals: this.capitalsArray
      }
    },
    methods: {
      testObject() {
        console.log(this.display);
        console.log(this.capitals);
      },
      plus() {
        
        if (this.display.city === this.capitals[(this.capitals.length - 1)].city) {
          alert(`Woah! ${this.display.city} is the warmest capital city in Europe right now!`);
        } else {
          this.addTemp();
        }
      },
      minus(){
        
        if (this.display.city === this.capitals[0].city) {
          alert(`Woah! ${this.display.city} is the coldest capital city in Europe right now!`);
        } else {
          this.subTemp();
        }
      },
      addTemp() {
        //find next highest in the array
        for (let i = 0; i < this.capitals.length; i++) {
          if(this.capitals[i].temperature > this.display.temperature) {
            this.display = this.capitals[i];
            break;
          }
        }
      },
      subTemp() {
        // Find next lowest in the array (loop from the back )
        for (let i = (this.capitals.length - 1); i >= 0; i--) {
          if (this.capitals[i].temperature < this.display.temperature) {
            this.display = this.capitals[i];
            break;
          }
        }
      },
      goToLink() {
        window.open(`http://www.google.com/search?q=${this.display.city}`,`mywindow`);
      }
    }
  }

  
</script>

<style lang="scss" scoped>
  .circle {
    min-height: 30rem;
    width: 30rem;
    flex: 0 0 75%;
    background-color: rgba(0, 0, 0, .45);
    border: 1.2px solid #fff;
    margin-bottom: 4rem;
    border-radius: 100%;
    backdrop-filter: blur(2.5px);

    display: flex;
    align-items: center;
    justify-content: space-between;

    &__icon {
      height: 3rem;
      width: 3rem;
      fill: #f0f0f0;
      padding:0 .6rem;
      transition: transform .2s;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(.9);
      }
    }
    &__data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-temp {
        font-size: 7rem;
        
      }
      &-location {
        font-size: 1.8rem;
        margin-top: -1.5rem;
        cursor: pointer;
      }
    }
    
    
    @keyframes bump {
      0% {
        transform: scale(1);
      }
      30% {
        transform: scale(1.1);
        
      }
      100% {
        
        transform: scale(1);
      }
    }
  }
</style>