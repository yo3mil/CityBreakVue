<template>
  <div class="display" :class="this.activeClass">
      {{calcTempDif()}}
  </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Object,
            required: true
        },
        initial: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            difference: 0,
            activeClass: ''
        }
    },
    methods: {
        calcTempDif() {
            this.difference = (this.current.temperature - this.initial.temperature).toFixed(1);
            
            switch(true) {
                case this.difference > 0:
                    this.activeClass = 'hot';
                    return this.difference + `°C warmer than ${this.initial.city}!`;
                case this.difference < 0:
                    this.activeClass = 'cold';
                    return Math.abs(this.difference) + `°C colder than ${this.initial.city}!`;
                default:
                    this.activeClass = '';
                    return "Current location";
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .display {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1rem;
        opacity: .8;
        margin-bottom: -20px;
    }
    .hot {
        color: rgb(240, 210, 78);
    }
    .cold {
        color: #07c6ff;
    }
</style>