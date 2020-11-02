<template>
    <button class="bf-button" :class="`bf-theme-${theme}`">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    export default {
        name: "bf-button",
        props: {
            theme: {
                type: String,
                default: () => {
                    return 'button'
                }
            }
        },
        setup() {
            return {

            };
        }
    }
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;
    .bf-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        & + & {
            margin-left: 8px;
        }
        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        &::-moz-focus-inner {
            border: 0;
        }
        &.bf-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
                color: lighten($blue, 10%);
            }
        }
        &.bf-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
                background: darken(white, 5%);;
            }
        }
    }
</style>