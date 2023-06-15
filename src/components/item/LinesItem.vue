<script>
export default {
    name: "LinesItem",
};

</script>

<template>
    <div id="lines">
        <div v-for="i in 5" class="line"></div>
    </div>
    <!-- /#lines -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
@use "sass:math";


#lines {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh; // I can't fix in other way
    margin: auto;
    overflow-y: hidden;
}

.line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 15vh;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
        animation: drop 5s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }

    @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
            left: #{math.random(100)*1%};

            &::after {
                animation-delay: #{$i * 1}s;
            }
        }
    }

}

@keyframes drop {
    0% {
        top: -50%;
    }

    100% {
        top: 110%;
    }
}

;
</style>
