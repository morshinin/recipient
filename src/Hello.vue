<template>
	<input 
		:value="value"
		@input="onChange"
	/>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	name: 'HelloComponent',
	props: {
		value: String,
	},
	methods: {
		onChange(event) {
			this.$emit('input', event.target.value);
		}
	}
});
</script>