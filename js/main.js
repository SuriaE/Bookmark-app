document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmarkArray = {
    name: siteName,
    url: siteUrl
  }

   if (localStorage.getItem('bookmarks') === null) {
     var bookmarks = [];
  bookmarks.push(bookmarkArray);
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }else {
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     bookmarks.push(bookmarkArray);
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }
  e.preventDefault();
}

function displayBookMarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var bookmarkResult = document.getElementById('bookmarkResult');
  bookmarkResult.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarkResult.innerHTML += '<div class="">'+
                                '<h3>'+
                                name+
                                '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'
                                '</h3>'+
                                '</div>';
  }
}
