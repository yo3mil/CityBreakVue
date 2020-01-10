<template>
  <div id="app">
    <app-header></app-header>
    
    <transition name="fade" mode="out-in">
      <app-about v-if="state.about"></app-about>
      
      <app-list 
        v-if="state.list"
        :capitalsArray="this.weather.capitals"
      ></app-list>

      <app-circle
        v-if="state.circle"
        :currentData="this.weather.current"
        :capitalsArray="this.weather.capitals"
      ></app-circle>
    
    </transition>

    
    <app-nav @stateChange="state = $event"></app-nav> 
    
  </div>
</template>

<script>
  import appHeader from './components/static/Header.vue';
  import appNav from './components/static/Navigation.vue';
  import appAbout from './components/About.vue';
  import appList from './components/List.vue';
  import appCircle from './components/Circle.vue';
  //API calls
  import WeatherData from './services/weather.js';

  export default {
    components: {
        appHeader,
        appAbout,
        appList,
        appCircle,
        appNav
    },
    data() {
      return {
        state: {
          circle: true,
          about: false,
          list: false
        },
        weather: new WeatherData
      }
    }
  }
  
</script>

<style lang="scss">
  #app {
    margin-top: 2%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
