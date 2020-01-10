<template>
    <div class="lds-ripple"><div></div><div></div></div>
</template>

<style lang="scss" scoped>
    //LOADER
  .lds-ripple {
    
    position: relative;
    margin-left: -4.7rem;
    margin-top: -4.7rem;
    width: 6.4rem;
    height: 6.4rem;
  }
  .lds-ripple div {
      position: absolute;
      
      border: 4px solid #f0f0f0;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {

      animation-delay: -1.5s;
  }
  @keyframes lds-ripple {
  0% {
    top: 56px;
    left: 56px;
    width: 0;
    height: 0;
    opacity: 1; }
  100% {
    top: -1px;
    left: -1px;
    width: 116px;
    height: 116px;
    opacity: 0; } 
    }
</style>