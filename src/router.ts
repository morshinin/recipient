import Router, { RouteConfig } from 'vue-router';
import { LoginPageContainer } from './pages/login';
import { RecipeListPageContainer } from './pages/recipe/list';
import { RecipeEditPageContainer } from './pages/recipe/edit';

const routes: RouteConfig[] = [
	{ path: '/', redirect: '/login' },
	{ path: '/login', component: LoginPageContainer },
	{ path: '/recipe', component: RecipeListPageContainer },
	{ path: '/recipe/:id', component: RecipeEditPageContainer, props: true },
];

export const router = new Router({
	routes,
});