import { FieldValidationResult } from 'lc-form-validation';

const hasItems = (value: any[]): FieldValidationResult => {
	const isValid = value.length > 0;
	return {
		type: 'ARRAY_HAS_ITEMS',
		succeeded: isValid,
		errorMessage: isValid ? '' : 'Должен быть один ингридиент или больше',
	};
};

export { hasItems };