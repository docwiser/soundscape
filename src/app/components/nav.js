"use client";
import { useEffect } from 'react';
import MusicList from '../musiclist';
let Navigation = () => {
let musicModes = ["Your Breafing", "Hot", "Pop", "HipHop", "Romance", "Romance(Hindi)", "Romance(odia)", "Latest hindi songs", "Trending", "DJ Special", "Latest Odia Songs"];
let selectedTab = 0;
let handleTabClick = (index) => {
selectedTab = index;
updateTabs(); // Update the tabs on click
};
let updateTabs = () => {
let tabs = document.querySelectorAll('[role="tab"]');
let tabPanels = document.querySelectorAll('[role="tabpanel"]');
tabs.forEach((tab, index) => {
let isSelected = index === selectedTab;
tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
tabPanels[index].style.display = isSelected ? 'block' : 'none';
});
};
useEffect(() => {
updateTabs(); // Update tabs on initial render
let tabs = document.querySelectorAll('[role="tab"]');
tabs.forEach((tab, index) => {
tab.addEventListener('click', () => handleTabClick(index));
});
return () => {
tabs.forEach((tab, index) => {
tab.removeEventListener('click', () => handleTabClick(index));
});
};
}, []); // Run effect only on initial render
return (
<div>
<div role="tablist">
{musicModes.map((mode, index) => (
<button key={index} role="tab" aria-selected={index === selectedTab ? 'true' : 'false'} onClick={() => handleTabClick(index)}>{mode}</button>
))}
</div>
<div>
{musicModes.map((mode, index) => (
          <div key={index} role="tabpanel" aria-labelledby={`tab-${index}`} style={{ display: index === selectedTab ? 'block' : 'none' }}>
<MusicList filter={mode} />
</div>
))}
</div>
</div>
);
}
export default Navigation;