<template>
	<v-text-field
		placeholder="Поиск ингредиентов (через запятую)..."
		:value="searchText"
		@input="onSearch"
	/>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
	name: 'SearchBarComponent',
	props: {
		searchText: String,
		onSearch: {} as PropOptions<(value: string) => void>,
	},
});
</script>