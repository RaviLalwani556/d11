'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({

  Created_date: {
    type: Date,
    default: Date.now
  },
  team1: {
    type: String,
    Required: 'Kindly enter the team1'
  },
  team2: {
    type: String,
    Required: 'Kindly enter the team2'
  },
  match_name: {
    type: String,
    Required: 'Kindly enter the match_name'
  },
  series_name: {
    type: String,
    Required: 'Kindly enter the series_name'
  },
  date_time: {
    type: String,
    Required: 'Kindly enter the date_time'
  },
  venue: {
    type: String,
    Required: 'Kindly enter the venue'
  },
  city: {
    type: String,
    Required: 'Kindly enter the city'
  },
  wicket_keeper: {
    type: String,
    Required: 'Kindly enter the wicket_keeper'
  },
  batsman: {
    type: String,
    Required: 'Kindly enter the batsman'
  },
  bowler: {
    type: String,
    Required: 'Kindly enter the bowler'
  },
  all_rounders: {
    type: String,
    Required: 'Kindly enter the all_rounders'
  },
  captain: {
    type: String,
    Required: 'Kindly enter the captain'
  },
  vice_captain: {
    type: String,
    Required: 'Kindly enter the vice_captain'
  },
  other_captain_options: {
    type: String,
    Required: 'Kindly enter the other_captain_options'
  },
  team1_news: {
    type: String,
    Required: 'Kindly enter the team1_news'
  },
  team2_news: {
    type: String,
    Required: 'Kindly enter the team2_news'
  },
  pitch_information: {
    type: String,
    Required: 'Kindly enter the pitch_information'
  },
  team1_players: {
    type: String,
    Required: 'Kindly enter the team1_players'
  },
  team2_players: {
    type: String,
    Required: 'Kindly enter the team2_players'
  },
  other_team2: {
    type: String,
    Required: 'Kindly enter the other_team2'
  },
  other_team3: {
    type: String,
    Required: 'Kindly enter the other_team3'
  },
  match_preview: {
    type: String,
    Required: 'Kindly enter the match_preview'
  },
  updated_information: {
    type: String,
    Required: 'Kindly enter the updated_information'
  },
  match_tips: {
    type: String,
    Required: 'Kindly enter the match_tips'
  },
  key_players: {
    type: String,
    Required: 'Kindly enter the key_players'
  },
  venue_report: {
    type: String,
    Required: 'Kindly enter the venue_report'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
