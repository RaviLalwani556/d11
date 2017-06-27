

function getMatches(){

  var xhr = new XMLHttpRequest();
  var url = "http://zd1.alvologic.com:51010/tasks";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          $("ul.justList").empty();
          $.each(json, function (index, value) {
             $('<li />', {html: getHtml(value.match_name,value._id)}).appendTo('ul.justList')
            //console.log(value._id);
            });

          // var data = JSON.stringify(json);
          // alert(data);

      }
  };
  xhr.send();



}

function getHtml(name,id){
var li='<div class="wrapper">'+name+'<img onclick="deleteMatch(\''+id+'\')" src="images/delete.png" width="20px" height="20px" style="float:right; margin-left: 10px;"/><img onclick="editMatch(\''+id+'\')" src="images/edit.png" width="20px" height="20px" style="float:right;"/></div>';return li;

}

function deleteMatch(id){

  var xhr = new XMLHttpRequest();
  var url = "http://zd1.alvologic.com:51010/"+id+"";
  xhr.open("DELETE", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          getMatches();
      }
  };
  xhr.send();


}

function editMatch(id){
  var xhr = new XMLHttpRequest();
  var url = "http://zd1.alvologic.com:51010/"+id+"";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          sessionStorage.setItem('match_detail', JSON.stringify(json));
          sessionStorage.setItem('is_from_update', true);
          sessionStorage.setItem('id',id);
          window.location.href="index.html";

      }
  };
  xhr.send();
}

function callNewMatch(){
  window.location.href="index.html";
}
