# Contributors' Guide

💪👍 First off, thanks for taking the time to contribute, you are amazing! 👍💪

This is a growing list of **software developers, designers, product managers, tech lovers and enthusiasts** in **Abia State.** I serves as a place to show recruiters that they are available for hire, and we want to make contributing as easy and transparent as possible, whether it is:

- [**Adding your details to the website**](##Adding-Learning-Resources)
- [**Submitting a Fix**](##Submitting-a-Fix)
- [**Proposing New Features**](##Proposing-New-Features)

## Prerequisites

- Git or any equivalent Version Control System
- Code Editor (VsCode, Sublime Text, Atom e.t.c)
- Little knowledge command line and open source contribution (_do no panic if you don't kown this yet, the next section (**Getting Stated**)_ explains this)

## Getting Started

1.  If you are new to Git and Github, it is advisable you go through
    [**GitHub For Beginners**](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/) and [**Basic Git WorkFlow**](https://guides.github.com/introduction/flow/index.html)

2.  New to open source contributions? we've got you covered: [**Contributing to Github**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

3.  Fork this Repository [**here**](https://github.com/Abia-Community/Abia-Techies/fork)

4.  Clone the forked Repository <br>
    `git clone https://github.com/Your-GitHub-Username/Abia-Techies.git`

5.  Open the cloned directory in your Code Editor.

6.  Add your name to the [**Contributors List**](CONTRIBUTORS.md).

## Adding Your Details

1. Add you name to the [Contributors' List](CONTRIBUTORS.md)

1. To add your name to the list, simply open `persons.json` file in the `src/assets/data` folder, and then add your own row at the bottom, using the below template:  
   ( **Don't include the square brackets "[ ]" !!! They are just there to indicate an example placeholder.** )

```moonscript
  {
    "id": "[PREVIOUS_PLUS_ONE]",
    "fullName": "[YOUR_FULL_NAME]",
    "imageLink": "[YOUR_IMG_URL]",
    "title": "[YOUR_(JOB) TITLE]"
    "links": {
      "website": "[YOUR_WEBSITE_URL]",
      "linkedin": "[YOUR_LINKEDIN_URL]",
      "github": "[YOUR_GITHUB_URL]",
      "twitter": "[YOUR_GITHUB_URL]",
      "facebook": "[YOUR_FACEBOOK_URL]",
      "medium": "[YOUR_MEDIUM_URL]"
    },
    "location": {
      "city": "[YOUR_CITY]",
      "state": "[YOUR_STATE_OR_PROVINCE]",
      "country": "[YOUR_COUNTRY]"
    },
    description: "[YOUR_BIT_ABOUT_YOURSELF]"
  },
```

### Please note!

- Profile pictures and/or images are allowed.
- If you do not want to fill some of the fields, leave them blank (e.g. `state: "",`).
- Your pull request will only be accepted if it follows the example above. It **cannot** have anything else.

2.  Open a **pull request**, with a short descriptive `branch name` and `commit messages`. If you are unsure of how to do this, checkout the[**Getting Started**](##Getting-Started) section

## Submitting a Fix

If you ever noticed a bug or anything worth fixing, feel free to [**open an issue**](https://github.com/Abia-Community/Abia-Techies/issues) with enough details of the bug, steps to replicate it and screenshots if possible.

## Proposing New Features

Have some new exciting features you'd like to add? Let our maintainers know first. [**Open an issue**](https://github.com/Abia-Community/Abia-Techies/issues) describing this new feature and why you think it should be included!

## Helpful Resources

- [Pro GIT Book](https://git-scm.com/book/en/v2)

- [Try Git](https://try.github.io/)

- [Git/ Git Hub on Windows](https://www.youtube.com/watch?v=J_Clau1bYco)

## Licence

[MIT](https://opensource.org/licenses/MIT)

[@UcheSylvester](https://github.com/UcheSylvester)
