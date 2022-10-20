---
sidebar_position: 1
---

# Tutorial Intro

Hello!

Welcome to the first tutorial on how to use **Reading Club's Story Editor Parser**.

## Getting Started

Get started by **writing a new story**.

<!-- Or **try Reading Club immediately** with **[readingclub.dev/editor](https://readinclub.dev/editor)**. -->

### What you'll need

- The executable files `parse` and `submit`.
  - We will release them on GitHub. In the meantime, send an email to j.alvarez@thereadingclubapp.com and we will send them your way.
  - For Windows, you must download the files with `.exe` extension. For Linux or Mac, we have named the files as `*-linux` and `*-macos` for clarity.
- A good text editor for LaTeX-like syntax. We recommend [Visual Studio Code](https://code.visualstudio.com/).

## Create a new story

Once you download the executable files on a folder of your choosing (e.g., `./tutorial/`), you need to create the `./tutorial/images/` folder.

:::caution Add at least 1 example illustration to the images folder

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

First things first, we must add the basic structure of `input.tex`:

- **Types**: These are the customizable types in the story, e.g., main character's name or location.
- **Prompts**: For every customizable type, there must be a prompt, e.g, "Where does this story take place?"
- **Info**: Helper information or instructions that explain the question and possible answers.
- **Pronouns**: Each special type may ask the user for pronouns, or not.
- **Dropdown**: It is possible to restrict the answers to an specific set of options separated by a dash.

There follows an snippet that illustrates these concepts:

```latex title="input.tex"
\begin{types}
    \item mainCharacter
    \item fathersName
    \item place
\end{types}

\begin{prompts}
    \item Who is the main character?
    \item What is this person's name?
    \item Where did this person grow up?
\end{prompts}

\begin{info}
    \item (e.g., father, mother, aunt, uncle)
    \item (e.g., Elmer, Maria, etc.)
    \item (e.g., London, Florida, etc.)
\end{info}

\begin{pronouns}
    \item true
    \item false
    \item false
\end{pronouns}

\begin{dropdown}
    \item father-mother-aunt-uncle
    \item
    \item
\end{dropdown}
```

Below are screenshots illustrating how the prompts would look in the app:

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import useBaseUrl from '@docusaurus/useBaseUrl';

<Tabs>
  <TabItem value="Who is the main character?" label="Who is the main character?">        
  <img src={useBaseUrl('img/Who-Is-The-Main-Character-Reading-Club-Example.png')} />
</TabItem>
  <TabItem value="What is this person's name?" label="What is this person's name?">  <img src={useBaseUrl('img/What-Is-This-Person-Name-Reading-Club-Example.png')} />
</TabItem>
  <TabItem value="Where did this person grow up?" label="Where did this person grow up?"><img src={useBaseUrl('img/Where-Did-This-Person-Grow-Up-Reading-Club-Example.png')} />
</TabItem>
</Tabs>

Once you have the customization tags ready (make sure everything is properly typed), you should add the `metadata` tag. You can type anything in the `metadata` tag.

```latex title="input.tex"
\metadata{This is the source file for the Dragon Story.}
```

:::info

You can leave the content of the `metadata` tag empty, but it is good practice to type a few words that give context. The value of the `metadata` tag will be added to the output files in `json`format after you run the parser as a `metadata` attribute. You may think of it as a form of code documentation.

:::

Then, you must add the following tags: `junior`, `intermediate`, and `advanced`.

```latex title="input.tex"
\begin{junior}
\end{junior}

\begin{intermediate}
\end{intermediate}

\begin{advanced}
\end{advanced}
```

You cannot skip adding these tags. You need to have them from the very first time you run the parser.

:::caution Follow the right order of tags

Make sure you follow the right order of tags in `input.tex`:

1. `types`
2. `prompts`
3. `info`
4. `pronouns`
5. `dropdown`
6. `metadata`
7. `junior`
8. `intermediate`
9. `advanced`

If one is missing or placed in the wrong order, you will get an error when running the parser. Unless otherwise specified, leave the content empty if you must (you can always complete it later), but do not ommit any tags.

:::

Before you try running the parser, you must add `chapter` tags inside the previous tags (`junior`, `intermediate`, and `advanced`) with some placeholder content inside:

```latex title="input.tex"
\begin{junior}

\begin{chapter}

This is something in the junior version.

\end{chapter}

\end{junior}

\begin{intermediate}

\begin{chapter}

This is something in the intermediate version.

\end{chapter}

\end{intermediate}

\begin{advanced}

\begin{chapter}

This is something in the advanced version.

\end{chapter}

\end{advanced}
```

Otherwise, you will get errors when running the parser.

:::danger Don't forget to add chapter tags with content

<img src={useBaseUrl('img/Parser-Error-Example-Reading-Club.png')} />

<img src={useBaseUrl('img/Parser-Error-Example-Reading-Club-Tutorial.png')} />

:::

### Customize the story

You can use the the `special` tag to make the story customizable.

This is the format you must follow:

```latex
\special{<default text>}{<word property>-<word property>-<word property>-<...>}
```

For example, if you want to customize the phrase _"I love my father. His name is Steve. He grew up in San Francisco. He loves all of his motorbikes,"_ you would type:

```latex
My \special{father}{mainCharacter} is \special{Steve}{fathersName-isProperNoun}
```

:::tip

The order of word properties doesn't matter. You only need to separate them by a dash.

`isProperNoun` will tell the app to respect the case. This is very important for character names and locations, e.g., "Steve", "Saint Petersburg".

<!-- `isCapitalized` will tell the app to capitalize all letters in a given word. This is very useful for titles that include any of your defined special types, e.g., "MY FATHER'S DRAGON IN SAN FRANCISCO" >> "MY MOTHER'S DRAGON IN RIO DE JANEIRO" -->

:::

You can also customize pronouns:

```latex
\special{He}{mainCharacter-isPronoun-personalPronoun-isCapitalized} loves all
 of \special{his}{mainCharacter-isPronoun-possessivePronoun} motorbikes.
```

:::tip Understsand pronouns

You only need to memorize three types of pronouns:

- Personal pronouns (e.g., _he, she, they, ze_).
- Objective pronouns (e.g., _him, her, them, zir_).
- Possessive determiner (e.g., _his, her, their, zir_).

The other two types of pronouns follow from the first three, as you can see below:

<img src={useBaseUrl('img/Pronouns-Table-Reading-Club-Customizable-Stories.PNG')} />

Within the Reading Club app, you can create your own pronouns by understanding this table.

<img src={useBaseUrl('img/Customizable-Pronouns-Reading-Club-Stories.png')} />

:::

### Running the parser

To run the parser, double click on `parse.exe` if you're on Windows. Make sure you have placed `parse.exe` in the `./tutorial/` folder.

:::note

If you're on macOS or Linux, the process you must follow to run the executable may be [different](https://superuser.com/questions/56739/executable-files-in-mac-os-x-vs-windows). Follow these [instructions](https://stackoverflow.com/a/15080940) to learn more.

In most cases, you may simply have to run `./parse-macos` (`./parse-linux`) on your macOS (Linux) terminal.

:::

You should see the following output indicating that the parser successfully created the zip file.

<img src={useBaseUrl('img/Story-Parser-Success-Reading-Club-Tutorial.png')} />

The output zip file contains all the information that is necessary for the Reading Club app being able to display your customizable story.

<img src={useBaseUrl('img/Zip-File-Content-Example-Reading-Club-Story-Parser-Tutorial.png')} />

Feel free to explore the contents of each folder inside the zip file. You don't need to understand how the internal structured JSON data works for the purposes of this tutorial. The take away is that these files will be used by the app to display your awesome customizable story!

<img src={useBaseUrl('img/Dragon-Story-Junior-JSON-Example-Reading-Club-Story-Parser-Tutorial.png')} />

## Upload your story

To upload the zip file to your library, run `submit.exe` in the same way you ran the parser executable in the previous section. Make sure you have placed `submit.exe` in the `./tutorial/` folder.

If the submission is successful, you will see a message like this one:

<img src={useBaseUrl('img/Submission-Successful-Customizable-Story-Reading-Club.png')} />
