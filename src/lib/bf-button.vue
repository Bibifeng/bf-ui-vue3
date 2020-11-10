<template>
    <button class="bf-button" :class="bf_classes">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import { computed } from 'vue';
    export default {
        name: "bf-button",
        props: {
            // 主题 包含 link、text、button（默认）
            theme: {
                type: String,
                default: () => {
                    return 'button'
                }
            },
            // 尺寸 包含 big、normal、small
            size: {
                type: String,
                default: () => {
                    return 'normal'
                }
            },
            // 程度等级 包含 main、normal、danger
            level: {
                type: String,
                default: () => {
                    return 'normal'
                }
            },
        },
        setup(props) {
            const { theme, size, level } = props;
            const bf_classes = computed(() => {
                return {
                    [`bf-theme-${theme}`] : theme,
                    [`bf-size-${size}`] : size,
                    [`bf-level-${level}`] : level,
                }
            });
            return {
                bf_classes,
            };
        }
    }
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $red: red;
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
        transition: background 250ms;

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

        &.bf-theme-link {
            border-color: transparent;
            box-shadow: none;
            color: $blue;

            &:hover, &:focus {
                color: lighten($blue, 10%);
            }
        }

        &.bf-theme-text {
            border-color: transparent;
            box-shadow: none;
            color: inherit;

            &:hover, &:focus {
                background: darken(white, 5%);;
            }
        }
        &.bf-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px
        }
        &.bf-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }
        &.bf-theme-button {
            &.bf-level-main {
                background: $blue;
                color: white;
                border-color: $blue;
                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }
            &.bf-level-danger {
                background: $red;
                border-color: $red;
                color: white;
                &:hover,
                &:focus {
                    background: lighten($red, 15%);
                    border-color: lighten($red, 15%);
                }
            }
        }
        &.bf-theme-link {
            &.bf-level-normal {
                color: $color;
                &:hover,
                &:focus {
                    color: lighten($color, 20%);
                }
            }
            &.bf-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
        &.bf-theme-text {
            &.bf-level-main {
                color: $blue;
                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }
            &.bf-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
    }
</style>