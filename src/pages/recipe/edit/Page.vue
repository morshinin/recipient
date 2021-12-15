<template>
	<h1>
		Редактировать рецепт {{ id }}
	</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'RecipeEditPage',
	props: {
		id: String,
	},
});
</script>