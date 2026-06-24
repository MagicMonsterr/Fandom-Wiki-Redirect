const redirects = {
    "minecraft.fandom.com": {
        base: "https://minecraft.wiki",
        wiki: "/w/"
    },
    "warframe.fandom.com": {
        base: "https://wiki.warframe.com",
        wiki: "/w/"
    },
    "gta.fandom.com": {
        base: "https://gta.wiki",
        wiki: "/w/"
    },
    "terraria.fandom.com": { base: "https://terraria.wiki.gg" },
    "calamitymod.fandom.com": { base: "https://calamitymod.wiki.gg" },
    "thoriummod.fandom.com": { base: "https://thoriummod.wiki.gg" },
    "terrariamods.fandom.com": { base: "https://terrariamods.wiki.gg" },
    "fearandhunger.fandom.com": { base: "https://fearandhunger.wiki.gg" },
    "bindingofisaacrebirth.fandom.com": { base: "https://bindingofisaacrebirth.wiki.gg" },
}
const urlFilters = Object.keys(redirects).map(
    host => `*://${host}/*`
);
function redirect(requestDetails) {
    let currentUrl = new URL(requestDetails.url);

    let rule = redirects[currentUrl.hostname]
    let targetUrl = rule.base + currentUrl.pathname;
    console.log(targetUrl);
    if (typeof rule.wiki != 'undefined') {
        targetUrl = targetUrl.replace("/wiki/", rule.wiki)
    }

    console.log(`Redirecting: ${requestDetails.url} to ${targetUrl}`);
    if (requestDetails.url === targetUrl) {
      return;
    }
    return {
      redirectUrl: targetUrl,
    };
  }
  
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: urlFilters },
    ["blocking"],
  );
