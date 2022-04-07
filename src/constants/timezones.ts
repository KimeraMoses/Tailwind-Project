import moment from "moment-timezone";
const rawList = [
  { id: "Pacific/Niue", name: "Niue Time" },
  { id: "Pacific/Pago_Pago", name: "Samoa Standard Time" },
  { id: "Pacific/Rarotonga", name: "Cook Islands Standard Time" },
  { id: "Pacific/Honolulu", name: "Hawaii-Aleutian Standard Time" },
  { id: "Pacific/Tahiti", name: "Tahiti Time" },
  { id: "Pacific/Marquesas", name: "Marquesas Time" },
  { id: "Pacific/Gambier", name: "Gambier Time" },
  { id: "America/Adak", name: "Hawaii-Aleutian Time (Adak)" },
  { id: "America/Anchorage", name: "Alaska Time - Anchorage" },
  { id: "America/Juneau", name: "Alaska Time - Juneau" },
  { id: "America/Metlakatla", name: "Alaska Time - Metlakatla" },
  { id: "America/Nome", name: "Alaska Time - Nome" },
  { id: "America/Sitka", name: "Alaska Time - Sitka" },
  { id: "America/Yakutat", name: "Alaska Time - Yakutat" },
  { id: "Pacific/Pitcairn", name: "Pitcairn Time" },
  { id: "America/Hermosillo", name: "Mexican Pacific Standard Time" },
  { id: "America/Creston", name: "Mountain Standard Time - Creston" },
  { id: "America/Dawson", name: "Mountain Standard Time - Dawson" },
  { id: "America/Dawson_Creek", name: "Mountain Standard Time - Dawson Creek" },
  { id: "America/Fort_Nelson", name: "Mountain Standard Time - Fort Nelson" },
  { id: "America/Phoenix", name: "Mountain Standard Time - Phoenix" },
  { id: "America/Whitehorse", name: "Mountain Standard Time - Whitehorse" },
  { id: "America/Los_Angeles", name: "Pacific Time - Los Angeles" },
  { id: "America/Tijuana", name: "Pacific Time - Tijuana" },
  { id: "America/Vancouver", name: "Pacific Time - Vancouver" },
  { id: "America/Belize", name: "Central Standard Time - Belize" },
  { id: "America/Costa_Rica", name: "Central Standard Time - Costa Rica" },
  { id: "America/El_Salvador", name: "Central Standard Time - El Salvador" },
  { id: "America/Guatemala", name: "Central Standard Time - Guatemala" },
  { id: "America/Managua", name: "Central Standard Time - Managua" },
  { id: "America/Regina", name: "Central Standard Time - Regina" },
  {
    id: "America/Swift_Current",
    name: "Central Standard Time - Swift Current",
  },
  { id: "America/Tegucigalpa", name: "Central Standard Time - Tegucigalpa" },
  { id: "Pacific/Easter", name: "Easter Island Time" },
  { id: "Pacific/Galapagos", name: "Galapagos Time" },
  { id: "America/Chihuahua", name: "Mexican Pacific Time - Chihuahua" },
  { id: "America/Mazatlan", name: "Mexican Pacific Time - Mazatlan" },
  { id: "America/Boise", name: "Mountain Time - Boise" },
  { id: "America/Cambridge_Bay", name: "Mountain Time - Cambridge Bay" },
  { id: "America/Denver", name: "Mountain Time - Denver" },
  { id: "America/Edmonton", name: "Mountain Time - Edmonton" },
  { id: "America/Inuvik", name: "Mountain Time - Inuvik" },
  { id: "America/Ojinaga", name: "Mountain Time - Ojinaga" },
  { id: "America/Yellowknife", name: "Mountain Time - Yellowknife" },
  { id: "America/Eirunepe", name: "Acre Standard Time - Eirunepe" },
  { id: "America/Rio_Branco", name: "Acre Standard Time - Rio Branco" },
  { id: "America/Bahia_Banderas", name: "Central Time - Bahia Banderas" },
  {
    id: "America/North_Dakota/Beulah",
    name: "Central Time - Beulah, North Dakota",
  },
  {
    id: "America/North_Dakota/Center",
    name: "Central Time - Center, North Dakota",
  },
  { id: "America/Chicago", name: "Central Time - Chicago" },
  { id: "America/Indiana/Knox", name: "Central Time - Knox, Indiana" },
  { id: "America/Matamoros", name: "Central Time - Matamoros" },
  { id: "America/Menominee", name: "Central Time - Menominee" },
  { id: "America/Merida", name: "Central Time - Merida" },
  { id: "America/Mexico_City", name: "Central Time - Mexico City" },
  { id: "America/Monterrey", name: "Central Time - Monterrey" },
  {
    id: "America/North_Dakota/New_Salem",
    name: "Central Time - New Salem, North Dakota",
  },
  { id: "America/Rainy_River", name: "Central Time - Rainy River" },
  { id: "America/Rankin_Inlet", name: "Central Time - Rankin Inlet" },
  { id: "America/Resolute", name: "Central Time - Resolute" },
  {
    id: "America/Indiana/Tell_City",
    name: "Central Time - Tell City, Indiana",
  },
  { id: "America/Winnipeg", name: "Central Time - Winnipeg" },
  { id: "America/Bogota", name: "Colombia Standard Time" },
  { id: "America/Atikokan", name: "Eastern Standard Time - Atikokan" },
  { id: "America/Cancun", name: "Eastern Standard Time - Cancun" },
  { id: "America/Jamaica", name: "Eastern Standard Time - Jamaica" },
  { id: "America/Panama", name: "Eastern Standard Time - Panama" },
  { id: "America/Guayaquil", name: "Ecuador Time" },
  { id: "America/Lima", name: "Peru Standard Time" },
  { id: "America/Boa_Vista", name: "Amazon Standard Time - Boa Vista" },
  { id: "America/Campo_Grande", name: "Amazon Standard Time - Campo Grande" },
  { id: "America/Cuiaba", name: "Amazon Standard Time - Cuiaba" },
  { id: "America/Manaus", name: "Amazon Standard Time - Manaus" },
  { id: "America/Porto_Velho", name: "Amazon Standard Time - Porto Velho" },
  { id: "America/Barbados", name: "Atlantic Standard Time - Barbados" },
  { id: "America/Blanc-Sablon", name: "Atlantic Standard Time - Blanc-Sablon" },
  { id: "America/Curacao", name: "Atlantic Standard Time - Curaçao" },
  { id: "America/Martinique", name: "Atlantic Standard Time - Martinique" },
  {
    id: "America/Port_of_Spain",
    name: "Atlantic Standard Time - Port of Spain",
  },
  { id: "America/Puerto_Rico", name: "Atlantic Standard Time - Puerto Rico" },
  {
    id: "America/Santo_Domingo",
    name: "Atlantic Standard Time - Santo Domingo",
  },
  { id: "America/La_Paz", name: "Bolivia Time" },
  { id: "America/Santiago", name: "Chile Time" },
  { id: "America/Havana", name: "Cuba Time" },
  { id: "America/Detroit", name: "Eastern Time - Detroit" },
  { id: "America/Grand_Turk", name: "Eastern Time - Grand Turk" },
  { id: "America/Indiana/Indianapolis", name: "Eastern Time - Indianapolis" },
  { id: "America/Iqaluit", name: "Eastern Time - Iqaluit" },
  { id: "America/Kentucky/Louisville", name: "Eastern Time - Louisville" },
  { id: "America/Indiana/Marengo", name: "Eastern Time - Marengo, Indiana" },
  {
    id: "America/Kentucky/Monticello",
    name: "Eastern Time - Monticello, Kentucky",
  },
  { id: "America/Nassau", name: "Eastern Time - Nassau" },
  { id: "America/New_York", name: "Eastern Time - New York" },
  { id: "America/Nipigon", name: "Eastern Time - Nipigon" },
  { id: "America/Pangnirtung", name: "Eastern Time - Pangnirtung" },
  {
    id: "America/Indiana/Petersburg",
    name: "Eastern Time - Petersburg, Indiana",
  },
  { id: "America/Port-au-Prince", name: "Eastern Time - Port-au-Prince" },
  { id: "America/Thunder_Bay", name: "Eastern Time - Thunder Bay" },
  { id: "America/Toronto", name: "Eastern Time - Toronto" },
  { id: "America/Indiana/Vevay", name: "Eastern Time - Vevay, Indiana" },
  {
    id: "America/Indiana/Vincennes",
    name: "Eastern Time - Vincennes, Indiana",
  },
  { id: "America/Indiana/Winamac", name: "Eastern Time - Winamac, Indiana" },
  { id: "America/Guyana", name: "Guyana Time" },
  { id: "America/Asuncion", name: "Paraguay Time" },
  { id: "America/Caracas", name: "Venezuela Time" },
  {
    id: "America/Argentina/Buenos_Aires",
    name: "Argentina Standard Time - Buenos Aires",
  },
  {
    id: "America/Argentina/Catamarca",
    name: "Argentina Standard Time - Catamarca",
  },
  {
    id: "America/Argentina/Cordoba",
    name: "Argentina Standard Time - Cordoba",
  },
  { id: "America/Argentina/Jujuy", name: "Argentina Standard Time - Jujuy" },
  {
    id: "America/Argentina/La_Rioja",
    name: "Argentina Standard Time - La Rioja",
  },
  {
    id: "America/Argentina/Mendoza",
    name: "Argentina Standard Time - Mendoza",
  },
  {
    id: "America/Argentina/Rio_Gallegos",
    name: "Argentina Standard Time - Rio Gallegos",
  },
  { id: "America/Argentina/Salta", name: "Argentina Standard Time - Salta" },
  {
    id: "America/Argentina/San_Juan",
    name: "Argentina Standard Time - San Juan",
  },
  {
    id: "America/Argentina/San_Luis",
    name: "Argentina Standard Time - San Luis",
  },
  {
    id: "America/Argentina/Tucuman",
    name: "Argentina Standard Time - Tucuman",
  },
  {
    id: "America/Argentina/Ushuaia",
    name: "Argentina Standard Time - Ushuaia",
  },
  { id: "Atlantic/Bermuda", name: "Atlantic Time - Bermuda" },
  { id: "America/Glace_Bay", name: "Atlantic Time - Glace Bay" },
  { id: "America/Goose_Bay", name: "Atlantic Time - Goose Bay" },
  { id: "America/Halifax", name: "Atlantic Time - Halifax" },
  { id: "America/Moncton", name: "Atlantic Time - Moncton" },
  { id: "America/Thule", name: "Atlantic Time - Thule" },
  { id: "America/Araguaina", name: "Brasilia Standard Time - Araguaina" },
  { id: "America/Bahia", name: "Brasilia Standard Time - Bahia" },
  { id: "America/Belem", name: "Brasilia Standard Time - Belem" },
  { id: "America/Fortaleza", name: "Brasilia Standard Time - Fortaleza" },
  { id: "America/Maceio", name: "Brasilia Standard Time - Maceio" },
  { id: "America/Recife", name: "Brasilia Standard Time - Recife" },
  { id: "America/Santarem", name: "Brasilia Standard Time - Santarem" },
  { id: "America/Sao_Paulo", name: "Brasilia Standard Time - Sao Paulo" },
  { id: "Atlantic/Stanley", name: "Falkland Islands Standard Time" },
  { id: "America/Cayenne", name: "French Guiana Time" },
  { id: "Antarctica/Palmer", name: "Palmer Time" },
  { id: "America/Punta_Arenas", name: "Punta Arenas Time" },
  { id: "Antarctica/Rothera", name: "Rothera Time" },
  { id: "America/Paramaribo", name: "Suriname Time" },
  { id: "America/Montevideo", name: "Uruguay Standard Time" },
  { id: "America/St_Johns", name: "Newfoundland Time" },
  { id: "America/Noronha", name: "Fernando de Noronha Standard Time" },
  { id: "Atlantic/South_Georgia", name: "South Georgia Time" },
  { id: "America/Miquelon", name: "St. Pierre & Miquelon Time" },
  { id: "America/Nuuk", name: "West Greenland Time" },
  { id: "Atlantic/Cape_Verde", name: "Cape Verde Standard Time" },
  { id: "Atlantic/Azores", name: "Azores Time" },
  { id: "UTC", name: "Coordinated Universal Time" },
  { id: "America/Scoresbysund", name: "East Greenland Time" },
  { id: "Etc/GMT", name: "Greenwich Mean Time" },
  { id: "Africa/Abidjan", name: "Greenwich Mean Time - Abidjan" },
  { id: "Africa/Accra", name: "Greenwich Mean Time - Accra" },
  { id: "Africa/Bissau", name: "Greenwich Mean Time - Bissau" },
  { id: "America/Danmarkshavn", name: "Greenwich Mean Time - Danmarkshavn" },
  { id: "Africa/Monrovia", name: "Greenwich Mean Time - Monrovia" },
  { id: "Atlantic/Reykjavik", name: "Greenwich Mean Time - Reykjavik" },
  { id: "Africa/Sao_Tome", name: "Greenwich Mean Time - São Tomé" },
  { id: "Africa/Casablanca", name: "Morocco Time" },
  { id: "Africa/El_Aaiun", name: "Western Sahara Time" },
  { id: "Africa/Algiers", name: "Central European Standard Time - Algiers" },
  { id: "Africa/Tunis", name: "Central European Standard Time - Tunis" },
  { id: "Europe/Dublin", name: "Ireland Time" },
  { id: "Europe/London", name: "United Kingdom Time" },
  { id: "Africa/Lagos", name: "West Africa Standard Time - Lagos" },
  { id: "Africa/Ndjamena", name: "West Africa Standard Time - Ndjamena" },
  { id: "Atlantic/Canary", name: "Western European Time - Canary" },
  { id: "Atlantic/Faroe", name: "Western European Time - Faroe" },
  { id: "Europe/Lisbon", name: "Western European Time - Lisbon" },
  { id: "Atlantic/Madeira", name: "Western European Time - Madeira" },
  { id: "Africa/Juba", name: "Central Africa Time - Juba" },
  { id: "Africa/Khartoum", name: "Central Africa Time - Khartoum" },
  { id: "Africa/Maputo", name: "Central Africa Time - Maputo" },
  { id: "Africa/Windhoek", name: "Central Africa Time - Windhoek" },
  { id: "Europe/Amsterdam", name: "Central European Time - Amsterdam" },
  { id: "Europe/Andorra", name: "Central European Time - Andorra" },
  { id: "Europe/Belgrade", name: "Central European Time - Belgrade" },
  { id: "Europe/Berlin", name: "Central European Time - Berlin" },
  { id: "Europe/Brussels", name: "Central European Time - Brussels" },
  { id: "Europe/Budapest", name: "Central European Time - Budapest" },
  { id: "Africa/Ceuta", name: "Central European Time - Ceuta" },
  { id: "Europe/Copenhagen", name: "Central European Time - Copenhagen" },
  { id: "Europe/Gibraltar", name: "Central European Time - Gibraltar" },
  { id: "Europe/Luxembourg", name: "Central European Time - Luxembourg" },
  { id: "Europe/Madrid", name: "Central European Time - Madrid" },
  { id: "Europe/Malta", name: "Central European Time - Malta" },
  { id: "Europe/Monaco", name: "Central European Time - Monaco" },
  { id: "Europe/Oslo", name: "Central European Time - Oslo" },
  { id: "Europe/Paris", name: "Central European Time - Paris" },
  { id: "Europe/Prague", name: "Central European Time - Prague" },
  { id: "Europe/Rome", name: "Central European Time - Rome" },
  { id: "Europe/Stockholm", name: "Central European Time - Stockholm" },
  { id: "Europe/Tirane", name: "Central European Time - Tirane" },
  { id: "Europe/Vienna", name: "Central European Time - Vienna" },
  { id: "Europe/Warsaw", name: "Central European Time - Warsaw" },
  { id: "Europe/Zurich", name: "Central European Time - Zurich" },
  { id: "Africa/Cairo", name: "Eastern European Standard Time - Cairo" },
  {
    id: "Europe/Kaliningrad",
    name: "Eastern European Standard Time - Kaliningrad",
  },
  { id: "Africa/Tripoli", name: "Eastern European Standard Time - Tripoli" },
  { id: "Africa/Johannesburg", name: "South Africa Standard Time" },
  { id: "Antarctica/Troll", name: "Troll Time" },
  { id: "Asia/Baghdad", name: "Arabian Standard Time - Baghdad" },
  { id: "Asia/Qatar", name: "Arabian Standard Time - Qatar" },
  { id: "Asia/Riyadh", name: "Arabian Standard Time - Riyadh" },
  { id: "Africa/Nairobi", name: "East Africa Time" },
  { id: "Asia/Amman", name: "Eastern European Time - Amman" },
  { id: "Europe/Athens", name: "Eastern European Time - Athens" },
  { id: "Asia/Beirut", name: "Eastern European Time - Beirut" },
  { id: "Europe/Bucharest", name: "Eastern European Time - Bucharest" },
  { id: "Europe/Chisinau", name: "Eastern European Time - Chisinau" },
  { id: "Asia/Damascus", name: "Eastern European Time - Damascus" },
  { id: "Asia/Gaza", name: "Eastern European Time - Gaza" },
  { id: "Asia/Hebron", name: "Eastern European Time - Hebron" },
  { id: "Europe/Helsinki", name: "Eastern European Time - Helsinki" },
  { id: "Europe/Kiev", name: "Eastern European Time - Kiev" },
  { id: "Asia/Nicosia", name: "Eastern European Time - Nicosia" },
  { id: "Europe/Riga", name: "Eastern European Time - Riga" },
  { id: "Europe/Sofia", name: "Eastern European Time - Sofia" },
  { id: "Europe/Tallinn", name: "Eastern European Time - Tallinn" },
  { id: "Europe/Uzhgorod", name: "Eastern European Time - Uzhhorod" },
  { id: "Europe/Vilnius", name: "Eastern European Time - Vilnius" },
  { id: "Europe/Zaporozhye", name: "Eastern European Time - Zaporozhye" },
  { id: "Asia/Famagusta", name: "Famagusta Time" },
  { id: "Asia/Jerusalem", name: "Israel Time" },
  { id: "Europe/Kirov", name: "Kirov Time" },
  { id: "Europe/Minsk", name: "Moscow Standard Time - Minsk" },
  { id: "Europe/Moscow", name: "Moscow Standard Time - Moscow" },
  { id: "Europe/Simferopol", name: "Moscow Standard Time - Simferopol" },
  { id: "Antarctica/Syowa", name: "Syowa Time" },
  { id: "Europe/Istanbul", name: "Turkey Time" },
  { id: "Europe/Volgograd", name: "Volgograd Standard Time" },
  { id: "Asia/Yerevan", name: "Armenia Standard Time" },
  { id: "Europe/Astrakhan", name: "Astrakhan Time" },
  { id: "Asia/Baku", name: "Azerbaijan Standard Time" },
  { id: "Asia/Tbilisi", name: "Georgia Standard Time" },
  { id: "Asia/Dubai", name: "Gulf Standard Time" },
  { id: "Indian/Mauritius", name: "Mauritius Standard Time" },
  { id: "Indian/Reunion", name: "Réunion Time" },
  { id: "Europe/Samara", name: "Samara Standard Time" },
  { id: "Europe/Saratov", name: "Saratov Time" },
  { id: "Indian/Mahe", name: "Seychelles Time" },
  { id: "Europe/Ulyanovsk", name: "Ulyanovsk Time" },
  { id: "Asia/Kabul", name: "Afghanistan Time" },
  { id: "Asia/Tehran", name: "Iran Time" },
  { id: "Indian/Kerguelen", name: "French Southern & Antarctic Time" },
  { id: "Indian/Maldives", name: "Maldives Time" },
  { id: "Antarctica/Mawson", name: "Mawson Time" },
  { id: "Asia/Karachi", name: "Pakistan Standard Time" },
  { id: "Asia/Dushanbe", name: "Tajikistan Time" },
  { id: "Asia/Ashgabat", name: "Turkmenistan Standard Time" },
  { id: "Asia/Samarkand", name: "Uzbekistan Standard Time - Samarkand" },
  { id: "Asia/Tashkent", name: "Uzbekistan Standard Time - Tashkent" },
  { id: "Asia/Aqtau", name: "West Kazakhstan Time - Aqtau" },
  { id: "Asia/Aqtobe", name: "West Kazakhstan Time - Aqtobe" },
  { id: "Asia/Atyrau", name: "West Kazakhstan Time - Atyrau" },
  { id: "Asia/Oral", name: "West Kazakhstan Time - Oral" },
  { id: "Asia/Qyzylorda", name: "West Kazakhstan Time - Qyzylorda" },
  { id: "Asia/Yekaterinburg", name: "Yekaterinburg Standard Time" },
  { id: "Asia/Colombo", name: "India Standard Time - Colombo" },
  { id: "Asia/Kolkata", name: "India Standard Time - Kolkata" },
  { id: "Asia/Kathmandu", name: "Nepal Time" },
  { id: "Asia/Dhaka", name: "Bangladesh Standard Time" },
  { id: "Asia/Thimphu", name: "Bhutan Time" },
  { id: "Asia/Almaty", name: "East Kazakhstan Time - Almaty" },
  { id: "Asia/Qostanay", name: "East Kazakhstan Time - Kostanay" },
  { id: "Indian/Chagos", name: "Indian Ocean Time" },
  { id: "Asia/Bishkek", name: "Kyrgyzstan Time" },
  { id: "Asia/Omsk", name: "Omsk Standard Time" },
  { id: "Asia/Urumqi", name: "Urumqi Time" },
  { id: "Antarctica/Vostok", name: "Vostok Time" },
  { id: "Indian/Cocos", name: "Cocos Islands Time" },
  { id: "Asia/Yangon", name: "Myanmar Time" },
  { id: "Asia/Barnaul", name: "Barnaul Time" },
  { id: "Indian/Christmas", name: "Christmas Island Time" },
  { id: "Antarctica/Davis", name: "Davis Time" },
  { id: "Asia/Hovd", name: "Hovd Standard Time" },
  { id: "Asia/Bangkok", name: "Indochina Time - Bangkok" },
  { id: "Asia/Ho_Chi_Minh", name: "Indochina Time - Ho Chi Minh City" },
  { id: "Asia/Krasnoyarsk", name: "Krasnoyarsk Standard Time - Krasnoyarsk" },
  { id: "Asia/Novokuznetsk", name: "Krasnoyarsk Standard Time - Novokuznetsk" },
  { id: "Asia/Novosibirsk", name: "Novosibirsk Standard Time" },
  { id: "Asia/Tomsk", name: "Tomsk Time" },
  { id: "Asia/Jakarta", name: "Western Indonesia Time - Jakarta" },
  { id: "Asia/Pontianak", name: "Western Indonesia Time - Pontianak" },
  { id: "Australia/Perth", name: "Australian Western Standard Time" },
  { id: "Asia/Brunei", name: "Brunei Darussalam Time" },
  { id: "Asia/Makassar", name: "Central Indonesia Time" },
  { id: "Asia/Macau", name: "China Standard Time - Macao" },
  { id: "Asia/Shanghai", name: "China Standard Time - Shanghai" },
  { id: "Asia/Hong_Kong", name: "Hong Kong Standard Time" },
  { id: "Asia/Irkutsk", name: "Irkutsk Standard Time" },
  { id: "Asia/Kuala_Lumpur", name: "Malaysia Time - Kuala Lumpur" },
  { id: "Asia/Kuching", name: "Malaysia Time - Kuching" },
  { id: "Asia/Manila", name: "Philippine Standard Time" },
  { id: "Asia/Singapore", name: "Singapore Standard Time" },
  { id: "Asia/Taipei", name: "Taipei Standard Time" },
  { id: "Asia/Choibalsan", name: "Ulaanbaatar Standard Time - Choibalsan" },
  { id: "Asia/Ulaanbaatar", name: "Ulaanbaatar Standard Time - Ulaanbaatar" },
  { id: "Australia/Eucla", name: "Australian Central Western Standard Time" },
  { id: "Asia/Dili", name: "East Timor Time" },
  { id: "Asia/Jayapura", name: "Eastern Indonesia Time" },
  { id: "Asia/Tokyo", name: "Japan Standard Time" },
  { id: "Asia/Pyongyang", name: "Korean Standard Time - Pyongyang" },
  { id: "Asia/Seoul", name: "Korean Standard Time - Seoul" },
  { id: "Pacific/Palau", name: "Palau Time" },
  { id: "Asia/Chita", name: "Yakutsk Standard Time - Chita" },
  { id: "Asia/Khandyga", name: "Yakutsk Standard Time - Khandyga" },
  { id: "Asia/Yakutsk", name: "Yakutsk Standard Time - Yakutsk" },
  { id: "Australia/Darwin", name: "Australian Central Standard Time" },
  { id: "Australia/Adelaide", name: "Central Australia Time - Adelaide" },
  { id: "Australia/Broken_Hill", name: "Central Australia Time - Broken Hill" },
  {
    id: "Australia/Brisbane",
    name: "Australian Eastern Standard Time - Brisbane",
  },
  {
    id: "Australia/Lindeman",
    name: "Australian Eastern Standard Time - Lindeman",
  },
  { id: "Pacific/Guam", name: "Chamorro Standard Time" },
  { id: "Pacific/Chuuk", name: "Chuuk Time" },
  { id: "Antarctica/DumontDUrville", name: "Dumont-d’Urville Time" },
  { id: "Australia/Hobart", name: "Eastern Australia Time - Hobart" },
  { id: "Antarctica/Macquarie", name: "Eastern Australia Time - Macquarie" },
  { id: "Australia/Melbourne", name: "Eastern Australia Time - Melbourne" },
  { id: "Australia/Sydney", name: "Eastern Australia Time - Sydney" },
  { id: "Pacific/Port_Moresby", name: "Papua New Guinea Time" },
  { id: "Asia/Ust-Nera", name: "Vladivostok Standard Time - Ust-Nera" },
  { id: "Asia/Vladivostok", name: "Vladivostok Standard Time - Vladivostok" },
  { id: "Australia/Lord_Howe", name: "Lord Howe Time" },
  { id: "Pacific/Bougainville", name: "Bougainville Time" },
  { id: "Antarctica/Casey", name: "Casey Time" },
  { id: "Pacific/Kosrae", name: "Kosrae Time" },
  { id: "Asia/Magadan", name: "Magadan Standard Time" },
  { id: "Pacific/Noumea", name: "New Caledonia Standard Time" },
  { id: "Pacific/Norfolk", name: "Norfolk Island Time" },
  { id: "Pacific/Pohnpei", name: "Ponape Time" },
  { id: "Asia/Sakhalin", name: "Sakhalin Standard Time" },
  { id: "Pacific/Guadalcanal", name: "Solomon Islands Time" },
  { id: "Asia/Srednekolymsk", name: "Srednekolymsk Time" },
  { id: "Pacific/Efate", name: "Vanuatu Standard Time" },
  { id: "Asia/Anadyr", name: "Anadyr Standard Time" },
  { id: "Pacific/Fiji", name: "Fiji Time" },
  { id: "Pacific/Tarawa", name: "Gilbert Islands Time" },
  { id: "Pacific/Kwajalein", name: "Marshall Islands Time - Kwajalein" },
  { id: "Pacific/Majuro", name: "Marshall Islands Time - Majuro" },
  { id: "Pacific/Nauru", name: "Nauru Time" },
  { id: "Pacific/Auckland", name: "New Zealand Time" },
  { id: "Asia/Kamchatka", name: "Petropavlovsk-Kamchatski Standard Time" },
  { id: "Pacific/Funafuti", name: "Tuvalu Time" },
  { id: "Pacific/Wake", name: "Wake Island Time" },
  { id: "Pacific/Wallis", name: "Wallis & Futuna Time" },
  { id: "Pacific/Chatham", name: "Chatham Time" },
  { id: "Pacific/Apia", name: "Apia Time" },
  { id: "Pacific/Enderbury", name: "Phoenix Islands Time" },
  { id: "Pacific/Fakaofo", name: "Tokelau Time" },
  { id: "Pacific/Tongatapu", name: "Tonga Standard Time" },
  { id: "Pacific/Kiritimati", name: "Line Islands Time" },
];

const now = moment();

export const TimeZoneList = rawList.map((info) => {
  return {
    ...info,
    name: `(GMT${moment.tz(now, info.id).format("Z")}) ${info.name}`,
  };
});
