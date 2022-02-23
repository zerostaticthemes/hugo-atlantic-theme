# Hugo Atlantic Theme

Atlantic is a clean and modern Tailwind 3 theme for Hugo. Tailwind 3, Postcss 9

[Live Demo](https://hugo-atlantic.netlify.app/) |
[Zerostatic Themes](https://www.zerostatic.io/) |

![Hugo Atlantic Theme screenshot](https://www.zerostatic.io/theme/hugo-atlantic/hugo-atlantic-screenshot.png)

## Features

- Uses PostCSS with postcss-import and postcss-nested
- Full blog functionality
- Beautfifuly designed responsive blog and post layouts
- Blog categories
- Blog authors (multiple)
- Blog pagination
- Ready to deploy to Netlify
- Responsive design
- Responsive menu
- 100/100 Google Lighthouse speed score ⚡
- 100/100 Google Lighthouse seo score 🏆
- 94/100 Google Lighthouse accessibility score (but this is just because of the green text color contrast)
- Page size is 10KB without images, can you believe it?? 🔥
- Robust example content included
- Royalty free illustrations included
- Netlify & Github Pages ready

## Installation

**1. Install Hugo**

To use this theme you will first need to have Hugo installed. Please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

⚠️ **Note:** Check your Hugo version - **Hugo Extended** is required!

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets which means if you not using the Hugo extended version this theme will not work. To check your version of Hugo, run `hugo version`. Make sure you see **/extended** after the version number, for example _Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown_ You do not need to use version v0.51 specifically, it just needs to have the _/extended_ part.

**2. Create a new Hugo site**

This will create a fresh Hugo site in the folder `mynewsite`.

```
hugo new site mynewsite
```

**3. Install the theme**

Download or git clone this theme into the sites themes folder `mynewsite/themes`. You should end up with the following folder structure `mynewsite/themes/hugo-atlantic-theme`

```
cd mynewsite
git clone https://github.com/zerostaticthemes/hugo-atlantic-theme.git themes/hugo-atlantic-theme
```

**4. Copy the example content**

Copy the entire contents of the `mynewsite/themes/hugo-atlantic-theme/exampleSite/` folder to root folder of your Hugo site, ie `mynewsite/`. To copy the files using terminal, make sure you are still in the projects root, ie the `mynewsite` folder.

```
cp -a themes/hugo-atlantic-theme/exampleSite/. .
```

**5. Update config.toml**

After you copy the `config.toml` into the root folder of your Hugo site you will need to update the `baseURL`, `themesDir` and `theme` values in `mynewsite/config.toml`

```
baseURL = "/"
themesDir = "themes"
theme = "hugo-atlantic-theme"
```

**6. Run Hugo**

After installing the theme for the first time, generate the Hugo site.

You run this command from the root folder of your Hugo site ie `mynewsite/`

```
hugo
```

For local development run Hugo's built-in local server.

```
hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## Deployment

### Stackbit

Use Stackbit to deploy this theme. This theme contains a valid and tested `stackbit.yaml`

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/zerostaticthemes/hugo-Atlantic-theme)

### Netlify

Use Netlify to deploy this theme. This theme contains a valid and tested `netlify.toml` - Feel free to use the 1-click deploy below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zerostaticthemes/hugo-Atlantic-theme)

## Configuring Theme

### Logo

You can edit the logo from the `config.toml`

```toml
# config.toml

  [params.logo]
    mobile = "images/logo/logo-mobile.svg"
    mobile_height = "36px"
    desktop = "images/logo/logo.svg"
    desktop_height = "36px"
    alt = "Atlantic - A Hugo Business Theme"
```

### Fonts

This theme uses Google fonts. You can change the font snippet in `layouts/partials/google-fonts.html` and then update font variable in `scss/style.scss`

```scss
// scss/style.scss

// Fonts
$font-family-base: Helvetica, Arial, sans-Atlantic, -apple-system;
$font-family-heading: "Playfair Display", Atlantic, -apple-system;
```

### Colors

You can edit the themes primary, secondary and neutral colors in `scss/style.scss`. To override the bootstrap colors simply edit `scss/_bootstrap-variables.scss`

```scss
// scss/style.scss

// Colors
$primary: #f24088;
$secondary: #f88379;
$black: #2f2f41;
$white: #ffffff;
$white-offset: #f6f7ff;
$steel: #5c5a5a;
```

### Hero Image

List pages such as the homepage, services and team can have a Hero image.

```yml
# content/_index.md
---
intro_image: "https://source.unsplash.com/wOGhHamMqLc"
intro_image_absolute: false
intro_image_hide_on_mobile: true
---
```

While this themes default content uses illustrations, its easy to change the image to a photo and it will still look great.

the front-matter field `intro_image_absolute: true` let's illustrations "break out" (in CSS terms, it uses `position: absolute`) of the grid and is an intended stylistic effect. When using photos or normal images it's recommended to set this to false and the photo will align with the grid. See `content/team/_index.md` for an example.

### Google Analytics

Put your Google Analytics ID in the `google_analytics_id` field in the `config.toml` - Also supports Google Tag Manager. When your site is running locally using `hugo server` the GA tag is not injected. This prevents polluting your real data.

```toml
# config.toml

[params]
  google_analytics_id = "UA-XXX-1"
  google_tag_manager_id = ""
```

You can also set the Google Analytics ID using a [Netlify environment variable](https://docs.netlify.com/configure-builds/environment-variables/) `HUGO_GOOGLE_ANALYTICS_ID`

### Meta tags

A pages `title`, `description` and `image` front-matter fields are used to generate the pages title and meta tags.

By default a pages `<title>` is generated from the front-matter `title` and site title set in `config.toml`

```
 <title>{{ block "title" . }}{{ if .Params.meta_title }}{{ .Params.meta_title }}{{ else }}{{ .Title }} - {{ .Site.Title }}{{ end }}{{ end }}</title>
```

You can override the `<title>` on any page by using the `meta_title` field in the front-matter. See `content/_index.md` for an example.

Set your twitter info to ensure twitter social previews work correctly.

```toml
  # config.toml

  [params.seo]
    meta_twitter_site = "@zerostaticio"
    meta_twitter_creator = "@zerostaticio"
```

## License & Credits

This theme is open source under the MIT license.

Please don't create ports of this theme without asking me. Yes this theme is open-source but I've had several people "port" this theme (with only minor changes) and then advertise the theme as their own. Then they don't update it and it starts to get old and break etc. Now lots of people are finding these old crappy versions of the theme.

- Beautiful royalty free Illustrations by Icons8 - https://icons8.com/illustrations/style--pixeltrue
- Stock images by Unsplash - https://unsplash.com/
- Feature icons by Noun Project - https://thenounproject.com/

## Other Versions

- [Jekyll Atlantic Theme](https://github.com/zerostaticthemes/jekyll-Atlantic-theme) (official)
- [Gatsby Atlantic Theme](https://github.com/zerostaticthemes/gatsby-Atlantic-theme) (official)
