<script>
export default {
    name: "CyberButton",
    props: {
        color: String
    },
    //The only way to pass props in pseudo-element-html
    computed: {
        cssProps() {
            return {
                '--color': this.color
            }
        }
    }
}
</script>

<template>
    <button :style="cssProps" class="cybr-btn">
        <slot></slot>
        <span>_</span>
        <span class="cybr-glitch">
            <slot></slot>_
        </span>
    </button>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

$shimmy-distance: 15%;
$shadow: $secondary;
$border: 4px;
$clip: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 70%);
$clip-one: polygon(0 2%, 100% 2%, 100% 95%, 8% 95%, 0 70%);
$clip-two: polygon(0 78%, 100% 78%, 100% 100%, 8% 100%, 0 78%);
$clip-three: polygon(0 44%, 100% 44%, 100% 54%, 8% 54%, 0 54%);
$clip-four: polygon(0 0, 100% 0, 100% 0, 8% 0, 0 0);
$clip-five: polygon(0 0, 100% 0, 100% 0, 8% 0, 0 0);
$clip-six: polygon(0 40%, 100% 40%, 100% 85%, 8% 85%, 0 70%);
$clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 8% 80%, 0 70%);


@font-face {
    font-family: Cyber;
    src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
    font-display: swap;
}

.cybr-btn {
    font-family: 'Cyber', sans-serif;
    cursor: pointer;
    background: transparent;
    text-transform: uppercase;
    outline: transparent;
    letter-spacing: 2px;
    position: relative;
    font-weight: 700;
    border: 0;
    transition: background 2s;
    color: $white;
    text-decoration: none;
}

.cybr-btn:hover {
    filter: brightness(90%);
}

.cybr-btn:active {
    filter: brightness(70%);
}

.cybr-btn:after,
.cybr-btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: $clip;
    z-index: -1;
}

.cybr-btn:before {
    background: $shadow;
    transform: translate($border, 0);
}

.cybr-btn:after {
    background: var(--color);
}

.cybr-glitch {
    position: absolute;
    top: $border * -1;
    left: $border * -1;
    right: $border * -1;
    bottom: $border * -1;
    background: $shadow;
    text-shadow: 2px 2px $shadow, -2px -2px $shadow;
    clip-path: $clip;
    animation: glitch 2s infinite;
    display: none;
    line-height: 16px;
    color: $white;
    text-decoration: none;


}

.cybr-btn:hover .cybr-glitch {
    display: block;
}

.cybr-glitch:before {
    content: '';
    position: absolute;
    top: $border * 1;
    right: $border * 1;
    bottom: $border * 1;
    left: $border * 1;
    clip-path: $clip;
    background: var(--color);
    z-index: -1;
}

@keyframes glitch {
    0% {
        clip-path: $clip-one;
    }

    2%,
    8% {
        clip-path: $clip-two;
        transform: translate($shimmy-distance * -1, 0);
    }

    6% {
        clip-path: $clip-two;
        transform: translate($shimmy-distance * 1, 0);
    }

    9% {
        clip-path: $clip-two;
        transform: translate(0, 0);
    }

    10% {
        clip-path: $clip-three;
        transform: translate($shimmy-distance * 1, 0);
    }

    13% {
        clip-path: $clip-three;
        transform: translate(0, 0);
    }

    14%,
    21% {
        clip-path: $clip-four;
        transform: translate($shimmy-distance * 1, 0);
    }

    25% {
        clip-path: $clip-five;
        transform: translate($shimmy-distance * 1, 0);
    }

    30% {
        clip-path: $clip-five;
        transform: translate($shimmy-distance * -1, 0);
    }

    35%,
    45% {
        clip-path: $clip-six;
        transform: translate($shimmy-distance * -1);
    }

    40% {
        clip-path: $clip-six;
        transform: translate($shimmy-distance * 1);
    }

    50% {
        clip-path: $clip-six;
        transform: translate(0, 0);
    }

    55% {
        clip-path: $clip-seven;
        transform: translate($shimmy-distance * 1, 0);
    }

    60% {
        clip-path: $clip-seven;
        transform: translate(0, 0);
    }

    31%,
    61%,
    100% {
        clip-path: $clip-four;
    }
}
</style>
