document.getElementById('my form').addEventListener('submit',savebookmark);

function savebookmark(e){
   //console.log("it works");
    var sitename= document.getElementById("sitename").value;
    var siteurl= document.getElementById("siteurl").value;

    var bookmark ={
        name : sitename,
        url :siteurl
    }

    if(localStorage.getItem('bookmarks') === null){

        var bookmarks=[];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }   

   if(!validateform(sitename,siteurl)){
       alert("not valid");
        return false;
   }
    fetchbookmarks();
    e.preventDefault();
    
}

function deletebookmark(url){
    var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));

    for(i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    fetchbookmarks();
}

function fetchbookmarks(){

    var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));

    var bookmarkresult=document.getElementById('bookmark result');

    bookmarkresult.innerHTML='';
    for(var i=0;i<bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkresult.innerHTML += '<div class="last">'+'<h3>'+name+
        '<a class="last2" target="_blank" href="'+url+'">visit</a>'+
        '<a onclick="deletebookmark(\''+url+'\')" class="last3" >delete</a>'+
        '</h3>'+'</div>';

    }
}

function validateform(sitename,siteurl){
    if(!sitename || !siteurl){
        alert("please enter the feilds");
        return false;
    }
    return true;
}