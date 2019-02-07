



//show hidden content when add button is pressed
document.getElementById('add_icon').addEventListener('click', function(){
  $('.hidden-container').show();

})

//hide hidden content when a text is added
document.getElementById('add').addEventListener('click', function() {
  let textBoxValue = document.getElementById('text_area').value;

  if(textBoxValue == "") {
    alert('Please enter a note');

  } else {
    addToList();
    clearTextArea();
    createDay();
    $('.hidden-container').hide();
  }
})

function clearTextArea() {
  let textBoxValue = document.getElementById('text_area').value = "";
}

function completedTask(){
  this.classList.toggle('clicked_check');
}

function addToList(){
  let inputValue = document.getElementById('text_area').value;
  let txt = document.createTextNode(inputValue);

  let newList = document.createElement("li");
  let span = document.createElement('span');
  let time = document.createElement('div');
  time.setAttribute('id', 'day_content');
  newList.setAttribute('id', 'list');
  span.setAttribute('id', 'span');
  span.append(txt);
  newList.append(span);
  newList.append(time);
  newList.addEventListener('touchstart', deleteNote, false);

  let list = document.getElementById('myList');
  list.insertBefore(newList, list.childNodes[0]);

  storeData();
}

function createDay() {
  let content = document.getElementById('day_content');

  let d = new Date();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  let day = d.getUTCDate();
  let curr_month = month[d.getMonth()];

  content.innerHTML = curr_month + ' ' + day;

}

function selectedNote(e) {
  let selected = e.target.parentNode;
  selected.style.border = "2px solid #000";
  selected.style.background = 'darkgrey';
}

function removeStyle(e) {
  let selected = e.target.parentNode;
  selected.style.border = null;
  selected.style.background = null;
}

function deleteNote(e) {
  setTimeout(function() {
    selectedNote(e);
    $('.container').show();

    document.getElementById('btn_yes').addEventListener('click', function() {
      e.target.parentNode.remove();
      $('.container').hide();
    })

    document.getElementById('btn_no').addEventListener('click', function() {
      $('.container').hide();
      removeStyle(e);
    })
  }, 1000)
}

retreiveData();


function storeData() {
  let ulList = document.getElementById('myList').innerHTML;
  let list = localStorage.setItem('list', ulList);

  let dayContent = document.getElementById('day_content').innerHTML;
  let day = localStorage.setItem('day', dayContent);
  //console.log(dayContent);
}

function retreiveData() {
  let getList = localStorage.getItem('list');
  document.getElementById('myList').innerHTML = getList;

  let d = new Date();

  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let getDay = localStorage.getItem('day');
  let getMonth = localStorage.getItem('day');
  getDay = d.getUTCDate();
  getMonth = month[d.getMonth()];
  document.getElementById('day_content').innerHTML = getMonth + ' ' + getDay;
}


//localStorage.clear();




















/**/
