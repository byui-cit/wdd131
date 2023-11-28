---
layout: prove
---
# Accessibility Practice

- - - 
<!-- Check what chatGPT would tell them based on our orignal prompts to see what will come up for them (check prepare for questions that are already there) -->
## Introduction
<!-- Review what is accessibility, why do we care, show the list and things that have to be looked at, for the purposes of this class, 5 categories -->
[HTML Checklist](https://webmailbyui.sharepoint.com/sites/digitalaccessibilityhub/SitePages/HTML.aspx)

## Basic Concepts
If you can remember these accessibility concepts when building a website, you'll be ahead of most developers.
- Headings
- Link Text
- Color Contrast and Fonts
- Alt Text
- Semantic Elements

## **01** Headings
Headings should:
- Provide structure and navigation points.
- Be in a hierarchical, logical order.
- Provide an outline for the content.
- Break content into logical chunks.
- Be descriptive to the content they contain.

Headings should <strong>not</strong> be used just to style content.

### Heading Levels 
There are six heading levels in HTML. If more than six heading levels are needed, you'll need to split the content at major sections. Only use one heading level 1 on a page.

### Skipping Levels 
When closing sub-sections, you can skip up to a higher level, but when adding a new sub-section, you should never skip a level (e.g., heading 4 may proceed heading 2, but heading 2 should never directly proceed heading 4).

#### Incorrect Heading Structure Example
<!-- idk how to do the wrong example in markdown with a list -->
<!-- preformatted text -->
<pre>
&#9900; H1
        - H3
</pre>

#### Correct Heading Structure Example
- H1
    - H2
        - H3
            - H4
    - H2
        - H3
        - H3
    - H2
    - H2

#### Additional Heading Help
- Heading 1 – Main content description/title 
- Heading 2 – Sub-section of Heading 1 (broad main idea) 
- Heading 3 – Sub-section of Heading 2 (specific idea) 
- Heading 4 – Sub-section of Heading 3 (examples, details) 
- Heading 2 – Next broad main idea 

## 02 Link Text
When you're adding links to your website, the text you use for those links should be meaningful. Instead of generic phrases like "click here", use words that tell people what they'll find when they click. Imagine someone coming across your link without the surrounding text. Would they still understand where the link goes?

### Link Text Example 1:
[Here](https://webaim.org/intro/) is a great resource for getting started with web accessibility.

<details>
<summary>Answer 1</summary>

**Why it's bad:** This link text doesn't tell users where the link will take them or what they'll find when they click. It's generic and doesn't offer any context.
</details>

### Link Text Example 2:
[WebAIM: Introduction to Web Accessibility](https://webaim.org/intro/) is a great resource for getting started with web accessibility.
<details>
<summary>Answer 2</summary>

**Why it's good:** This link text is descriptive and specific. It clearly informs users about the content they'll access by clicking the link.
</details>

### Links vs. Buttons:
Links and buttons are not interchangeable elements.
A **link** takes you to a new page. A **button** does an action on the current page. It's important to be clear whether something is a link or a button. It's like knowing whether you're opening a door to a different room or flicking on a light switch in the room you're in.

### Other notes:
- If you have multiple links going to the same place on a webpage, they should all have the same link text. Otherwise, they should all be unique.
- Links should be visually distinct (underlined and a different color)
- Links should look consistent throughout the content
- Link text should short while still being descriptive. Don't link to entire sentences or paragraphs.

## 03 Color Contrast and Fonts
### Contrast
Sufficient contrast should be present between text and background (4.5:1). With large text or adjacent important visual elements (informational images, graphics, etc.) contrast should be at least 3:1. Logos, incidental icons, and decorative elements have no required contrast ratio. Use a color contrast checker to find these numbers.
Keep in mind that some color combinations may be difficult to differentiate between for some colorblindness or visual impairments. You may find it helpful to test your digital content in greyscale to verify color is not the only means used to communicate information and that contrast is sufficient. 

### Fonts
- The choice of typefaces and fonts significantly affects text readability on websites.
- Users often scan text in patterns, and interruptions can hinder comprehension.
- To enhance readability, use simple and familiar fonts, avoid complexity, and limit font variations.
- Adequate spacing, contrast between text and background, and font size are crucial for accessibility.
- Real text is more adaptable than text within images, making it more accessible.
- Embedded fonts should prioritize readability for better accessibility.

For more information, read: [Typefaces and Fonts](https://webaim.org/techniques/fonts/)

### Sensory Characteristics
Color should never be the only means of conveying information. Watch this video about the [Use of Color Alone to Convey Information](https://www.youtube.com/watch?v=8_eVF0LPs0s) (5 minutes)

A classic example where we use more than one sensory characteristic is with links. Accessible links, like those you've seen a thousand times, come with two sensory characteristics:
1. They're underlined.
2. They have a unique color.


### Tools
[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - color contrast checker (has eye drop color picker feature)
[Adobe Color](https://color.adobe.com/create/color-accessibility) - color-blind safe palettes and color contrast checker

## 04 Alt Text
Alt text is a short text alternative to the image. In general, alt text is limited to approximately 250 characters or less.

Alt text is <strong>not</strong>:
    - repetitive
    - additional
    - source or filename

Alt text goes in the alt attribute of an image tag.
<!-- image tag example here -->
<!-- figure out how to do that emphasis thing on special terms for "alt" attribute -->

Now, let's talk about decorative images. These are the ones that don't really convey important information. For these, you can use empty alt text (alt=""). This tells assistive technology to skip these images so they don't interrupt the user's flow.

On the flip side, there are images that serve a specific function, like buttons or icons. For these, the alt text should describe that function. It should tell the user what the image does. For example, a logo that takes you to the home page should have alt text that says "Home". It shouldn't describe the logo.

Pay attention to the purpose and context of the image. These may change the way a description is written and where the description is provided. The same image can have different alt text depending on its context. 
<!-- Describe quizzes example? might not be super applicable -->

<!-- Add in a few examples from the POET tool? -->
[POET Training Tool](https://poet.diagramcenter.org/)

## 05 Semantic Elements
#### Use the Real Deal
Whenever you can, opt for the actual HTML tags that represent the content or action you're including. For example, instead of dressing up a div to look like a button, just use the button tag.

### Why Semantic?
Using semantic HTML elements brings inherent accessibility features to your web content. These elements, like headings, buttons, and lists, are designed with accessibility in mind from the start. Here's why it matters:

**Clear Structure:** Semantic elements provide a structured format, making content easy to understand, not just visually but also for assistive technology.

**Defined Roles:** Each element has a specific role, enabling assistive technologies to interpret their purpose accurately. For example, a button element is recognized as something clickable.

### Keyboard accessibility
By incorporating semantic HTML elements, you're also enhancing the keyboard-friendliness of your web content. Semantic elements naturally support keyboard navigation and add keyboard focus to clickable elements, allowing users who rely on keyboards to smoothly traverse your content, whether it's links, buttons, or headings.
<!-- idk where to put this, but I like it -->
The BYU-I Accessibility Office's definition of accessibility, found on their [Getting Started](https://webmailbyui.sharepoint.com/sites/digitalaccessibilityhub/SitePages/Getting-Started.aspx) page, is "The practice of ensuring equally effective and equally integrated functionality, interaction with, and access to digital content for all users with substantially equivalent ease of use." Using semantic elements helps with having equivalent effecviveness and ease of use. For example, when you first open an article, what's your first instinct? Probably skimming through the headings, right? Using semantic headings ensures that users with assistive technology can also enjoy a similar skimming experience. 

## Activity
### Comparison: Exploring the Good and Not-So-Good
First we'll look at a bad example. Open a new tab and search for any news site. If you don't feel like finding your own, here's [NBC News](https://www.nbcnews.com/). Right click on the page and select inspect (or use F12), then navigate to the lighthouse tab. Double check that the settings include an accessibility report and that you're testing "Desktop" if that's applicable. Begin the assessment by selecting the "Analyze page load" button. Once it loads, scroll to the accessibility section and take note of the errors. Do you see any of the issues we've talked about so far? Do they have good heading structure? Alt text? Link text? Semantic elements? Color contrast?

Now let's look at a good example of web accessibility. [WebAIM](https://webaim.org/) is a reputable source for web accessibility resources and is known for its high accessibility standards. Use the Lighthouse tool like before to evaluate the accessibility of the WebAIM website.

### Practice
The second part of the activity focuses on hands-on practice. Pick a past website project, such as your WDD130 final project or any other site you've created. Run the Lighthouse tool on your chosen project and check its accessibility score. The goal is to have a lighthouse score of at least 95%. 

Go through and remediate your site, focusing especially on the errors that fall into the 5 categories of accessibility we've talked about. Run the lighthouse tool again and see your accessibility score go up! Try to get as close to 95% or higher as possible.