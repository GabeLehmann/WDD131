//Gabe Lehmann

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

console.log("Activity 1: Sort strings ascending (default)");
let simpleSort = simpleList.slice().sort(); // slice() to avoid modifying the original
console.log(simpleSort);

console.log("Activity 1: Sort strings descending (custom compare)");
function compareDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
let descendingSort = simpleList.slice().sort(compareDesc);
console.log(descendingSort);

console.log("Activity 2: Filter list with search query");
function searchList(list, query) {
  function searchCallback(string) {
    return string.toLowerCase().includes(query.toLowerCase());
  }
  return list.filter(searchCallback);
}
console.log(searchList(simpleList, "b"));
console.log(searchList(simpleList, "an"));

const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "...",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "...",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Easy"],
    description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions: "...",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description: "A steep climb to one of the largest volcanic tuff cones in the world.",
    directions: "...",
    trailhead: [43.78555, -111.98996]
  }
];

console.log("Activity 3: Filter and sort hikes");
function searchHikes(hikes, query) {
  const filtered = hikes.filter(hike =>
    hike.name.toLowerCase().includes(query.toLowerCase()) ||
    hike.description.toLowerCase().includes(query.toLowerCase()) ||
    hike.tags.find(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  // Convert distance to float for accurate sorting
  return filtered.sort((a, b) =>
    parseFloat(a.distance) - parseFloat(b.distance)
  );
}

console.log(searchHikes(hikes, "yellowstone"));
console.log(searchHikes(hikes, "moderate"));
console.log(searchHikes(hikes, "al"));
