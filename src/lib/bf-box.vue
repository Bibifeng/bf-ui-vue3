<template>
	<template v-if="visible">
		<Teleport to="body">
			<div class="bf-box-overlay" @click="closeOnOverlay"></div>
			<div class="bf-box-wrapper">
				<div class="bf-box">
					<header>
						{{ title }}
						<span @click="close" class="bf-box-close"></span>
					</header>
					<main>
						<slot name="content"></slot>
					</main>
					<footer>
						<BfButton @click="cancelBtn">取消</BfButton>
						<BfButton @click="okBtn">确定</BfButton>
					</footer>
				</div>
			</div>
		</Teleport>
	</template>
</template>

<script lang="ts">
import BfButton from './bf-button.vue';
export default {
	name: 'bf-box',
	components: {
		BfButton,
	},
	props: {
		// 弹窗是否可见，默认不可见
		visible: {
			type: Boolean,
			default: () => {
				return false;
			},
		},
		// 点击遮罩是否关闭，默认点击关闭
		closeOverlay: {
			type: Boolean,
			default: () => {
				return true;
			},
		},
		title: {
			type: String,
			default: () => {
				return '提示';
			},
		},
		// 点击ok函数
		onOk: {
			type: Function,
		},
		// 点击cancel函数
		onCancel: {
			type: Function,
		},
	},
	setup(props, context) {
		const close = () => {
			context.emit('update:visible', false);
		};
		const closeOnOverlay = () => {
			if (props.closeOverlay) {
				close();
			}
		};
		const okBtn = () => {
			// 这里不能用 context.emit('onOk'); 因为不会返回值，无法进行下面的逻辑判断
			if (props.onOk && props.onOk() === true) {
				// 只有传入的onOk函数return一个true值才关闭
				close();
			}
		};
		const cancelBtn = () => {
			if (props.onCancel && props.onCancel() === true) {
				close();
			}
		};
		return {
			close,
			closeOnOverlay,
			cancelBtn,
			okBtn,
		};
	},
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.bf-box {
	background: white;
	border-radius: $radius;
	box-shadow: 0 0 3px fade_out(black, 0.5);
	min-width: 15em;
	max-width: 90%;
	&-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: fade_out(black, 0.5);
		z-index: 10;
	}
	&-wrapper {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 11;
	}
	> header {
		padding: 12px 16px;
		border-bottom: 1px solid $border-color;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20px;
	}
	> main {
		padding: 12px 16px;
	}
	> footer {
		border-top: 1px solid $border-color;
		padding: 12px 16px;
		text-align: right;
	}
	&-close {
		position: relative;
		display: inline-block;
		width: 16px;
		height: 16px;
		cursor: pointer;
		&::before,
		&::after {
			content: '';
			position: absolute;
			height: 1px;
			background: black;
			width: 100%;
			top: 50%;
			left: 50%;
		}
		&::before {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
		&::after {
			transform: translate(-50%, -50%) rotate(45deg);
		}
	}
}
</style>
