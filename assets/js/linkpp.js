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
  chrome.tabs.update({
    url: getUrl(pageInfo)
  });
}

function goToNewTab(pageInfo, tabInfo) {
  chrome.tabs.create({
    url: getUrl(pageInfo)
  });
}

function goToNewWindow(pageInfo, tabInfo) {
  chrome.windows.create({
    url: getUrl(pageInfo),
    state: "maximized"
  });
}

function getUrl(pageInfo) {
  return pageInfo.linkUrl || pageInfo.srcUrl;
}
