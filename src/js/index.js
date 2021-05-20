const dateNode = document.querySelector('header .date');

///OOHHH huge lesson to learn here...watch

// Function to create a custom date string
function getDateString() {
  const today = new Date(); // gets day number 0 - 30
  const dayNum = today.getDay(); // gets weekday
  // Map of weekday strings
  const weekdayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const weekdayString = weekdayMap[dayNum];
  const date = today.getDate(); // gets day of month
  // Map of month strings
  const monthMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthNum = today.getMonth(); // Gets month number 0 - 11
  const monthString = monthMap[monthNum]; // Gets our month string
  const year = today.getFullYear(); // Gets full year string

  return `${weekdayString}, ${monthString} ${date}, ${year}`;
}

// Now we write code to populate the date into the dateNode
if (!!dateNode) {
  dateNode.textContent = getDateString();
}

// Gotta select this so we can append newly created tags to it as children of it
// ok, yes makes sense !

const tagWrapper = document.querySelector('.asset-types__asset-tags');
const addNewTagTrigger = document.querySelector('#add-node-trigger');

addNewTagTrigger.addEventListener('click', newTagPrompt);

// aight..think we gotta call it ..brain is dead lol
// hahah, awesome man! will be pumped to pick it up from here again but think its clear to us..
// mucho gratzi man!!

// Yea man, and all of this is SOOO much easier with React, but we'lll do it with fundamentals so u can hammer and learn a bit

// roger man, many thanks -> fundamentals -> javascripts -> user login -> magic sauce -> all soon come

// Indeed.  I'm sweating from how hot my computer is...  passing out lol
// talk tomrorrow! hahha ! 10-4. REST WELL ✌️ ✌️ ✌️

function newTagPrompt() {
  const assetType = prompt('Enter an asset type');
  createAssetTagNode(assetType);
}

/**
 * @param {string} type the string of type to be displayed
 */
function createAssetTagNode(type) {
  const button = document.createElement('button'); // Create a button node
  button.classList.add('asset-tag'); // Add class

  button.setAttribute('data-type', type); // Adding a data attribute to use for our updateActivePane later on
  button.innerText = type; // passing type string as text node of button tag
  tagWrapper.appendChild(button); // append the button

  // Now gotta atttach event listener to it
  //button.addEventListener('click', updateActivePane); // we'll write this function later
}
