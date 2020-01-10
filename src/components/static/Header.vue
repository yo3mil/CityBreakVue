<template>
    <header class="header" onClick="window.location.reload();"> 
      <h1>CityBreak</h1>
      <h2>Europe</h2>
    </header>
</template>

<style lang="scss" scoped>
  .header {
    flex: 1;
    
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    transition: all 1s;
    cursor: pointer;
    
  }
  .list-style {
      transform: scale(.5) translate(0,-75%);
  }
</style>