<template>
    
  <transition name="fade" mode="out-in">
    <div v-if="toggleNav" class="nav" key="main">
      <!--List Button -->
      <a class="link " @click="changeVisible(false, true, false, false)">
        <svg class="nav__icon">
          <use xlink:href="src/img/sprite.svg#icon-list2"></use>
        </svg> 
      </a>
      <!--about Button -->
      <a class="link" @click="changeVisible(false, false, true, false)">
        <svg class="nav__icon right">
          <use xlink:href="src/img/sprite.svg#icon-info"></use>
        </svg>
      </a>
    </div>

    <!--Home Button -->
    <div v-else class="nav" key="sub">
      <div class="home-btn" @click="changeVisible(true, false, false, true)">
        <svg class="home-btn__icon">
            <use xlink:href="src/img/sprite.svg#icon-home3" id="home"></use>
        </svg>
      home
      </div>
    </div>
    
  </transition> 
    
</template>

<script>
export default {
    data: function() {
      return {
        toggleNav: true
        
      }
    },
    props: {
      state: Object
    },
    methods: {
      changeVisible(circleState, listState, aboutState, navState) {
        let newState = this.state;
         newState = {
          list: listState,
          circle: circleState,
          about: aboutState
        };
        this.toggleNav = navState;
        this.$emit('stateChange', newState)
      }
    }
}
</script>

<style lang="scss" scoped>
  .nav {
    margin-top: 2rem;
    width: 40rem;
    flex: 0 0 15%;
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__link {
      cursor: pointer;
    }
    &__icon {
      height: 5rem;
      width: 5rem;
      fill: #F0F0F0;
      cursor: pointer;
    }
  }
  

  //home btn
  .home-btn {
    cursor: pointer;
    
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    &__icon {
      width: 5rem;
      height: 5rem;
      fill: #f0f0f0;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>