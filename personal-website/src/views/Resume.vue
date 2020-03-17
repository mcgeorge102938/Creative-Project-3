<template>
    <div class="resume-holder">
        <img src="/images/MyResume-page-001.jpg"/>
    </div>
</template>

<style scoped>
    .resume-holder {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: black;
        margin-top: 125px;
        padding-bottom: 200px;
    }

    .resume-holder img {
        width: 100%;
    }

    /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .resume-holder img {
        width: 65%;
    }
  }
</style>