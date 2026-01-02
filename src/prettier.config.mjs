/** @type {import('prettier').Config} */
export default {
	// 100-120 is the modern sweet spot for wide monitors, prevents excessive line breaks
	printWidth: 120,

	// Tabs are trending for accessibility (allows users to set their own visual width)
	tabWidth: 4,
	useTabs: true,

	// Semi-colons are the industry standard for preventing ASI (Automatic Semicolon Insertion) bugs
	semi: true,

	// Single quotes are standard in the JS/TS ecosystem; JSX usually matches for consistency
	singleQuote: true,
	jsxSingleQuote: true,

	// "all" is the top trend: keeps Git diffs clean when adding new elements to objects/arrays
	trailingComma: 'all',

	// Keeps code concise by removing parens around single-argument arrow functions
	arrowParens: 'avoid',

	// Adds spaces inside object literals { likeThis } for better readability
	bracketSpacing: true,

	// Ensures HTML/JSX closing brackets stay on the same line as the last prop
	bracketSameLine: false,

	// IMPORT SORTING: Keeps the top of your files organized automatically
	plugins: ['@trivago/prettier-plugin-sort-imports'],

	// Customizing the order: External libs -> Internal Aliases -> Relative paths
	importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
	// Adds a blank line between the groups defined above
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
};
