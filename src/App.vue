<template>
  <the-header></the-header>
<router-view></router-view>
</template>

<script>

import TheHeader from './components/layouts/TheHeader';
export default {
  name: 'App',
  components:{
    TheHeader
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto Mono", sans-serif;
}

body {
  margin: 0;
}

</style>
