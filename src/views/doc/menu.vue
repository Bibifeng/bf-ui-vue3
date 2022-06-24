<template>
	<div class="menu">
		<template v-for="(value, key, index) in filterMenus" :key="index">
			<h2 class="category-name">{{ key }}</h2>
			<ul>
				<li v-for="item in value" :key="item.meta.name">
					<router-link :to="item.path">{{ item.meta.name }}</router-link>
				</li>
			</ul>
		</template>
	</div>
</template>

<script lang="ts">
import { menus } from '@/router';
import { computed } from 'vue';
export default {
	name: 'PageMenu',
	setup() {
		const filterMenus = computed(() => {
			const menusObj = {};
			menus.forEach(i => {
				const categoryName = i.meta.category;
				if (menusObj[categoryName]) {
					menusObj[categoryName].push(i);
				} else {
					menusObj[categoryName] = [i];
				}
			});
			return menusObj;
		});
		return {
			filterMenus,
		};
	},
};
</script>

<style lang="scss" scoped>
.menu {
	width: 150px;
	height: 100%;
	top: 0;
	left: 0;
	padding: 74px 4px 16px 4px;
	background: #fff;
	box-shadow: $box-shadow;
	.category-name {
		margin-bottom: 4px;
		padding: 0 8px;
	}
	> ul {
		margin-bottom: 16px;
		> li {
			> a {
				display: block;
				padding: 4px 0 4px 10px;
				transition-property: background, color;
				transition-duration: 0.2s, 0.2s;
				&:hover {
					color: $color-primary;
				}
				/* router-link被选中时vue会自动加上此类名 */
				&.router-link-active {
					background: $color-primary;
					color: #fff;
				}
			}
		}
	}
}
</style>
