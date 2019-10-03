# Contributors' Guide

💪👍 First off, thanks for taking the time to contribute, you are amazing! 👍💪

This is a growing list of **software developers, designers, product managers, tech lovers and enthusiasts** in **Abia State.** I serves as a place to show recruiters that they are available for hire, and we want to make contributing as easy and transparent as possible, whether it is:

- [**Adding your details to the website**](##Adding-Learning-Resources)
- [**Submitting a Fix**](##Submitting-a-Fix)
- [**Proposing New Features**](##Proposing-New-Features)

## Prerequisites

- Git or any equivalent Version Control System
- Code Editor (VsCode, Sublime Text, Atom e.t.c)
- Little knowledge command line

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

To add your name to the list, simply open `persons.json` file in the `src/assets` folder, and then add your own row at the bottom, using the below template:  
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

Please submit a Pull Request for your row to be added to this list. If you are unsure how to do this, please check out _Contributing To Open Source_ video in the course curriculum.

1.  We have created a list of markdown (`.md`) files for different categories of learning resources. Find the category/categories related to the resources you want to add in the root directory

2.  Check if the resources you want to add is already included. If not, then you can proceed!

3.  Add your resources at the end, follow the pattern of the already existing resources. It should include:

    - **Name** of the resources (as a link to the resource page)
    - **A brief description** of its content and other related information.

    Here are **some examples**: <br>
    `- [JavaScript30](https://javascript30.com/): A 30-day coding challenge in which you will build 30 things using vanilla JavaScript`

    `- [mmtuts](https://www.youtube.com/user/TheCharmefis/featured): **_mmtuts_** (a.k.a MultiMedia Tutorials) aims to provide tutorials spanning the gamut of programming, video editing/production, animation, and graphic design.`

4.  If you want to create a new category for your resources, kindly [**open an issue**](https://github.com/zero-to-mastery/resources/issues) to let the project maintainers know of this new category before creating one.

5.  Open a **pull request**, with a short descriptive `branch name` and `commit messages`

## Submitting a Fix

If you ever noticed a bug or anything worth fixing, feel free to [**open an issue**](https://github.com/zero-to-mastery/resources/issues) with enough details of the bug, steps to replicate it and screenshots if possible.

## Proposing New Features

Have some new exciting features you'd like to add? Let our maintainers know first. [**Open an issue**](https://github.com/zero-to-mastery/resources/issues) describing this new feature and why you think it should be included!

## Helpful Resources

- [Pro GIT Book](https://git-scm.com/book/en/v2)

- [Try Git](https://try.github.io/)

- [Git/ Git Hub on Windows](https://www.youtube.com/watch?v=J_Clau1bYco)

## Licence

[MIT](https://opensource.org/licenses/MIT)

[@imsualeh](https://github.com/imsualeh)
