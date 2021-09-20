// * Language.ts : Language Logo

const LanguageLogoData = {
  DEFAULT:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1280px-Markdown-mark.svg.png",
  C: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
  "C++":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
  "C#": "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
  JavaScript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  TypeScript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  Python:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
  Shell:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png",
  HTML: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  Dart: "https://storage.googleapis.com/datanyze-data//technologies/e5412305ba7dcf4b8dca7fe0fe97ecd444ceba25.png",
  Svelte:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
  Vue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
  "Jupyter Notebook":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png",
  PHP: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
  Hack: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hack_%28programming_language%29_logo.svg/1200px-Hack_%28programming_language%29_logo.svg.png",
  Blade:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/220px-Laravel.svg.png",
  Ruby: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png",
  Java: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
  Kotlin: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  Dogescript: "https://dogescript.io/assets/img/logo-small.png",
};

export function LanguageLogo(lang: keyof typeof LanguageLogoData): string {
  return LanguageLogoData[lang] ?? LanguageLogoData.DEFAULT;
}
