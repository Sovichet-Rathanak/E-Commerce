<template>
    <div class="confirm-container">
      <span class="line-md--confirm-circle" :class="{'animate-icon': isAnimated}"></span>
  
      <hgroup>
        <h1>Payment Completed</h1>
        <h2>We will contact you once your product has arrived!</h2>
      </hgroup> 
    </div>
  </template>
    
  
<script>
export default {
  mounted() {
    const icon = this.$el.querySelector(".line-md--confirm-circle");
    icon.offsetHeight; 
    icon.classList.add("animate-icon");
    setTimeout(() => {
      icon.classList.remove("animate-icon");
    }, 1200); 
  }
};
</script>


<style scoped>
.confirm-container {
  display: flex;
  font-family: "Inter";
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
}

hgroup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

hgroup > h1 {
  font-size: 50px;
  margin-bottom: 0;
}

hgroup > h2 {
  font-size: 30px;
  margin-top: 5px;
}

.line-md--confirm-circle {
  display: inline-block;
  width: 320px;
  height: 320px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23116F00' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='64' stroke-dashoffset='64' d='M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.48s' values='64;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='14' stroke-dashoffset='14' d='M8 12l3 3l5 -5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.48s' dur='0.16s' values='14;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  animation: drawIcon 1.2s forwards;
}

@keyframes drawIcon {
  0% {
    stroke-dashoffset: 64;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>



  