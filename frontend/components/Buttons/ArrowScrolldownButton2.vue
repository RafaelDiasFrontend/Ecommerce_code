<template>
<div class="arrow bounce center">
  <a class="fa fa-arrow-down fa-2x" href="#"></a>
</div>
</template>


<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
.arrow {
  text-align: center;
  margin: 8% 0;
}
.bounce {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
  }
}


</style>
