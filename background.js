let color = '#3aa757';


//크롬 스토리지에 값 저장
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});