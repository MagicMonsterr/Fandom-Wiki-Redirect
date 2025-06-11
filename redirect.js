function redirect(requestDetails) {
    let currentUrl = requestDetails.url;

    let wiki = currentUrl.substring(0, currentUrl.indexOf(".fandom"));
    let targetUrl = "";
    let article = "";
    
    if(currentUrl.includes("warframe")) {
        article = currentUrl.substring((currentUrl.indexOf("/wiki") + 5), currentUrl.length);
        targetUrl = ("https://wiki.warframe.com/w" + article);
    } else {
        article = currentUrl.substring((currentUrl.indexOf("/wiki")), currentUrl.length);
        targetUrl = (wiki + ".wiki.gg" + article);
    }
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
    { urls: ["*://terraria.fandom.com/*", "*://calamitymod.fandom.com/*", "*://thoriummod.fandom.com/*", "*://terrariamods.fandom.com/*", "*://fearandhunger.fandom.com/*", "*://bindingofisaacrebirth.fandom.com/*", "*://warframe.fandom.com/*"] },
    ["blocking"],
  );
