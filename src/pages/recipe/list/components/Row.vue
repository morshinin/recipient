<template>
	<tr>
		<td :class="$style.name">
			<span>{{ recipe.name }}</span>
		</td>
		<td :class="$style.description">
			<span>{{ recipe.description }}</span>
		</td>
		<td>
			<ul :class="$style.list">
				<li v-for="(ingredient, i) in recipe.ingredients" :key="`ingredient_${i}`">
					{{ ingredient }}
				</li>	
			</ul>
		</td>
		<td :class="$style.editButton">
			<v-btn flat icon :to="`recipe/${recipe.id}`">
				<v-icon>edit</v-icon>
			</v-btn>
		</td>
	</tr>	
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Recipe } from '../viewModel';

export default Vue.extend({
	name: 'RowComponent',
	props: {
		recipe: {} as PropOptions<Recipe>,
	},
});
</script>

<style module>
.name {
	width: 25%;
	padding: 1rem;
}

.description {
	max-width: 177px;
	padding: 1rem;
}

.description span {
	display: inline-block;
	max-width: 100%;
}

.edit-button {
	text-align: end;
}

.list {
	list-style: none;
}
</style>