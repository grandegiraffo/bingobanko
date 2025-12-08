/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue'

	type EmptyProps = Record<string, never>
	type EmptyBindings = Record<string, never>

	const component: DefineComponent<EmptyProps, EmptyBindings, unknown>
	export default component
}
