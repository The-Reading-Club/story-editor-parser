---
sidebar_position: 1
---

# Tutorial Intro

Hello!

Welcome to the first tutorial on how to use **Reading Club's Story Parser**.

## Getting Started

Get started by **writing a new story**.

Or **try Reading Club immediately** with **[readingclub.dev/editor](https://readinclub.dev/editor)**.

### What you'll need

- The executable files `parse` and `submit`.
  - You can find them on [Reading Club's GitHub Repository](https://github.com/The-Reading-Club/reading-club-parser).
  - For Windows, you must download the files with `.exe` extension. For Linux or Mac, we have named the files as `*-linux` and `*-macos` for clarity.
- A good text editor for LaTeX-like syntax. We recommend [Visual Studio Code](https://code.visualstudio.com/).

## Create a new story

Once you download the executable files on a folder of your choosing (e.g., `./tutorial/`), you need to create the `./tutorial/images/` folder.

:::caution Add at least 1 example illustration to the `images` folder

Make sure you add at least one image to the folder, even if you won't use it right away. Otherwise, the parser will throw an error at the moment of creating the zip file.

![Reading Club](/img/Images-Folder-Reading-Club-Tutorial-Story-Parser.png)

:::

Then, create two files in the `./tutorial/` folder: `config.json` and `input.tex`.

Your folder structure should look something like this:

![Reading Club](/img/Config-Input-Reading-Club-Tutorial-Story-Parser.png)

### `config.json`

`config.json` contains meta-information about the story. The basic structure is as follows:

```json title="config.json"
{
  "meta": {
    "id": "DragonStory",
    "title": "The Great Dragon",
    "author": "Ruth S. Gannett",
    "input": "input.tex"
  },
  "specials": {}
}
```

The 4 required attributes in `config.json` are `id`, `title`, `author`, and `input`—all of them together define the `meta` object.

The `specials` object is optional. Leave it empty for now. It is used to avoid repetitive work when customizing the pronouns. We will learn that later.

### `input.tex`

First things first, we must add the basic structure of `input.tex`.

```latex title="input.tex"
{
  "meta": {
    "id": "DragonStory",
    "title": "The Great Dragon",
    "author": "Ruth S. Gannett",
    "input": "input.tex"
  },
  "specials": {}
}
```

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Upload your story

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
