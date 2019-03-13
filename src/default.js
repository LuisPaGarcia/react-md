const REPO = 'https://github.com/LuisPaGarcia/react-md';

const DEFAULT = `
# Structured documents

Sometimes it's useful to have different levels of headings to structure your documents. Start lines with a \`#\` to create headings. Multiple \`##\` in a row denote smaller heading sizes.

### This is a third-tier heading

You can use one \`#\` all the way up to \`######\` six for different heading sizes.

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

  There are many different ways to style code with GitHub's markdown. If you have inline code blocks, wrap them in backticks: \`var example = true\`.  If you've got a longer block of code, you can indent with four spaces:

  if (isAwesome){
	return true
  }

GitHub also supports something called code fencing, which allows for multiple lines without indentation:

\`\`\`
if (isAwesome){
	return true
}
\`\`\`

And if you'd like to use syntax highlighting, include the language:

\`\`\`javascript
if (isAwesome){
	return true
}
\`\`\`
`;
export { DEFAULT, REPO };
