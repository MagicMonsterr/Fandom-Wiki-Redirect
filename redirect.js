function redirect(requestDetails) {
    let currentUrl = requestDetails.url;

    let wiki = currentUrl.substring(0, currentUrl.indexOf(".fandom"));
    let article = currentUrl.substring((currentUrl.indexOf("/wiki")), currentUrl.length);

    let targetUrl = (wiki + ".wiki.gg" + article);
    console.log(`Redirecting: ${requestDetails.url}`);
    if (requestDetails.url === targetUrl) {
      return;
    }
    return {
      redirectUrl: targetUrl,
    };
  }
  
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: ["*://terraria.fandom.com/*", "*://calamitymod.fandom.com/*", "*://thoriummod.fandom.com/*", "*://terrariamods.fandom.com/*", "*://fearandhunger.fandom.com/*"] },
    ["blocking"],
  );
