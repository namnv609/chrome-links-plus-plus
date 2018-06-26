var menuContexts = ["image", "link"];

chrome.contextMenus.create({
  title: "Links++",
  contexts: menuContexts,
  id: "linkPlusPlusParentMenu"
});
chrome.contextMenus.create({
  title: "Current tab",
  contexts: menuContexts,
  parentId: "linkPlusPlusParentMenu",
  onclick: goToCurrentTab
});
chrome.contextMenus.create({
  title: "New tab",
  contexts: menuContexts,
  parentId: "linkPlusPlusParentMenu",
  onclick: goToNewTab
});
chrome.contextMenus.create({
  title: "New window",
  contexts: menuContexts,
  parentId: "linkPlusPlusParentMenu",
  onclick: goToNewWindow
});

function goToCurrentTab(pageInfo, tabInfo) {
  console.log("goToCurrentTab");
  console.log(pageInfo);
  console.log(tabInfo);
  chrome.tabs.update({
    url: pageInfo.linkUrl
  });
}

function goToNewTab(pageInfo, tabInfo) {
  chrome.tabs.create({
    url: pageInfo.linkUrl
  });
}

function goToNewWindow(pageInfo, tabInfo) {
  chrome.windows.create({
    url: pageInfo.linkUrl,
    state: "maximized"
  });
}
