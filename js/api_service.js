// Sending and receiving data in JSON format using POST mothod
//

function isFromUpdate(){

  if (sessionStorage.getItem("is_from_update") === null) {
  }
  else{

    if (sessionStorage.getItem("match_detail") === null) {

    }else {


        var json = JSON.parse(sessionStorage.getItem("match_detail"));
         match_form.team1.value=json.team1;
         match_form.team2.value=json.team2;
         match_form.match_name.value=json.match_name;
         match_form.series_name.value=json.series_name;
         match_form.date_time.value=json.date_time;
         match_form.venue.value=json.venue;
         match_form.city.value=json.city;
         match_form.captain.value=json.captain;
         match_form.vice_captain.value=json.vice_captain;
         match_form.wicket_keeper.value=json.wicket_keeper;
         match_form.batsman.value=json.batsman;
         match_form.bowler.value=json.bowler;
         match_form.all_rounders.value=json.all_rounders;
         match_form.other_captain_options.value=json.other_captain_options;
         match_form.team1_players.value=json.team1_players;
         match_form.team2_players.value=json.team2_players;
         match_form.team1_news.value=json.team1_news;
         match_form.team2_news.value=json.team2_news;
         match_form.pitch_information.value=json.pitch_information;
         match_form.other_team4.value=json.other_team4;
         match_form.other_team3.value=json.other_team3;
         match_form.match_preview.value=json.match_preview;
         match_form.key_players.value=json.key_players;
         match_form.venue_report.value=json.venue_report;
         match_form.match_tips.value=json.match_tips;
         match_form.updated_information.value=json.updated_information;
         match_form.button_name.value="UPDATE";



        console.log(json.match_name);
    }
  }
}



function callWebservice(){
  var formData = new FormData($('#upload'));
  var jsonData = {};
params   = $('#upload').serializeArray();

$.each(params, function(i, val) {
  var columnName = val.name;
  jsonData[columnName] = val.value;

});

var xhr = new XMLHttpRequest();
var url;
if(document.getElementById("save_data").value=="SAVE"){
  url = "http://zd1.alvologic.com:51010/tasks";
  xhr.open("POST", url, true);
  console.log(url);
}else {
  url = "http://zd1.alvologic.com:51010/tasks/"+sessionStorage.getItem("id");
  console.log(url);
  xhr.open("PUT", url, true);
}

xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);

        var data = JSON.stringify(json);
        sessionStorage.clear();
         match_form.button_name.value="SAVE";
         match_form.team1.value="";
         match_form.team2.value="";
         match_form.match_name.value="";
         match_form.series_name.value="";
         match_form.date_time.value="";
         match_form.venue.value="";
         match_form.city.value="";
         match_form.captain.value="";
         match_form.vice_captain.value="";
         match_form.wicket_keeper.value="";
         match_form.batsman.value="";
         match_form.bowler.value="";
         match_form.all_rounders.value="";
         match_form.other_captain_options.value="";
         match_form.team1_players.value="";
         match_form.team2_players.value="";
         match_form.team1_news.value="";
         match_form.team2_news.value="";
         match_form.pitch_information.value="";
         match_form.other_team4.value="";
         match_form.other_team3.value="";
         match_form.match_preview.value="";
         match_form.key_players.value="";
         match_form.venue_report.value="";
         match_form.match_tips.value="";
         match_form.updated_information.value="";
         alert("Data Save/Updated Successfully !!");

    }
};
var data = JSON.stringify(jsonData);
console.log(data);
xhr.send(data);



}
