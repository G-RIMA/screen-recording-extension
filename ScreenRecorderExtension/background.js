// In this project, we may not have much going on here.
// However, for more advanced extensions, you may handle events, manage data, etc.
console.log("Background script running");
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
//     console.log(changeInfo.status, tab.url);
//     if(changeInfo.status === "complete" && /^http/.test(tab.url)){
//         chrome.scripting.executeScript({
//             target: {tabId},
//             files: ["./content.js"]
//         }).then(()=>{
//             console.log("we have injected the content script")
//         }).catch(err=> console.log(err, "error in background script line 10"))
//     }
// });