<template>
  <div class="upper_section">
    <div class="slogan"> THE PLATFORM<br>FOR<br>PERSONAL STYLE <span class="spe_ch" style="font-size: 25px;"> &reg; </span></div> <!-- spe_ch = Special Character-->
    <div class="upper_innerLeft">
      <figure class="containerInner2">
        <figcaption>PHNOM PENH</figcaption>
        <ul style="list-style: none;">
          <li>email: kravansales@gmail.com</li>
          <li>contact number: +855 86 510 091</li>
          <li>address: <span>#14 ST288, Sangkat BKK1</span></li>
        </ul>
      </figure>
      <figure class="containerInnerL2">
        <figcaption>Store Policies</figcaption>
          <ul style="list-style: none;">
            <li>Return Policies</li>
            <li>Data Protections</li>
            <li>Accepted Payment Methods</li>
          </ul>
      </figure>
      <figure class="containerInnerL2">
        <figcaption>Get Help</figcaption>
        <ul style="list-style: none;">
          <li>email: kravansales@gmail.com</li>
          <li>contact number: +855 86 510 091</li>
        </ul>

      </figure>
    </div>

    <div class="upper_innerMid">
      <figure class="containerInnerL2">
        <figcaption>About Company</figcaption>
        <ul style="list-style: none;">
          <li>Kravan is a leading e-commerce platform offering high-quality products with a easy online shopping experience.
            We are committed to providing excellent customer service to meet all your needs.</li>
        </ul>
      </figure>
    </div>

    <div class="upper_innerRight">
      <figure class="containerInnerL2">
        <figcaption>Language and Currency</figcaption>
        <ul style="list-style: none;">
          <li class="li_btn">Region | Language | Currency</li>
        </ul>
      </figure>
      <div class="social">
        <iconify-icon icon="bi:twitter-x" width="2rem" height="2rem"/>
        <iconify-icon icon="fe:facebook" width="2rem" height="2rem" />
        <iconify-icon icon="lucide:instagram" width="2rem" height="2rem" />
        <iconify-icon icon="lineicons:linkedin" width="2rem" height="2rem" />
      </div>
    </div>
  </div>
  <div class="lower_section">
    <div class="lower_lower">
      <span>&copy;Kravan LLC.All Rights Reserved.</span>
      <div class="other">
        <span>User Agreement</span>
        <span>Advertising</span>
        <span>Privacy and Policy</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

  .upper_section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #0d0907;
    padding: 2rem;
    font-family: "Inter";
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .upper_section .slogan{
    color: white;
    font-weight: bolder;
    font-size: 40px;
    padding: 1rem;
  }

  .upper_innerLeft,
  .upper_innerMid,
  .upper_innerRight{
    width: 29.5rem;
    font-family: "Inter";
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  .upper_innerLeft ul,
  .upper_innerMid ul,
  .upper_innerRight ul{
    padding: 0;
    font-size: 16px;
    font-weight: 500;
  }

  .social{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .li_btn{
    border: 1px solid white;
    width: fit-content;
    padding: .7rem;
    border-radius: 5px;
  }

  .li_btn:hover{
    cursor: pointer;
  }

  .li_btn:active{
    background-color: white;
    color: black;
  }

  .lower_section{
    font-family: "Inter";
    color: white;
    background-color: #1a1a1a;
    padding: 1rem;
  }

  .lower_lower{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .other{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>
