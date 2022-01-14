const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
const headerContainer = document.querySelector('.header-container');

// Step 1:  create Elements
const headerAppender = (title, date, temp) => {
  const header = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1 = document.createElement('h1');
  const spanTemp = document.createElement('span');

  //Step 2:  Setup the structure of the elements
  header.appendChild(spanDate);
  header.appendChild(h1);
  header.appendChild(spanTemp);

  //Step 3:  Add proper class names to the elements
header.classList.add('header');
spanDate.classList.add('date');
spanTemp.classList.add('temp');

  //Step 4:  Set text content
  spanDate.textContent = date;
  h1.textContent = title;
  spanTemp.textContent = temp;


  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  headerContainer.appendChild()

  return header;
}


headerAppender('Lambda Times', 'January 6, 2021', '26' )
export { Header, headerAppender }
