load("uuid.js");


var now = ISODate();

var nswSite = {
    "dateCreated" : now,
    "isSciStarter" : false,
    "lastUpdated" : now,
    "siteId" : UUID.generate(),
    "status" : "active",
    "externalId" : "",
    "poi" : [ ],
    "context" : "none",
    "description" : "",
    "extent" : {
        "geometry" : {
            "fid" : "cl22",
            "area" : 802948.463849786,
            "lga" : [
                "Corowa Shire (A)",
                "Ryde (C)",
                "Hay (A)",
                "Cooma-Monaro (A)",
                "Coonamble (A)",
                "Yass Valley (A)",
                "Murray (A)",
                "Young (A)",
                "Wingecarribee (A)",
                "Burwood (A)",
                "East Gippsland (S)",
                "Eurobodalla (A)",
                "Kogarah (C)",
                "Maitland (C)",
                "Manly (A)",
                "Goulburn Mulwaree (A)",
                "Cabonne (A)",
                "Wyong (A)",
                "Sydney (C)",
                "Cootamundra (A)",
                "Deniliquin (A)",
                "Indigo (S)",
                "Wentworth (A)",
                "Scenic Rim (R)",
                "Campaspe (S)",
                "Fairfield (C)",
                "Campbelltown (C) (ACT)",
                "Lithgow (C)",
                "Greater Taree (C)",
                "Gundagai (A)",
                "Gosford (C)",
                "Forbes (A)",
                "Wollondilly (A)",
                "Lake Macquarie (C)",
                "Leeton (A)",
                "Liverpool (C)",
                "Lane Cove (A)",
                "Dungog (A)",
                "Great Lakes (A)",
                "Guyra (A)",
                "Gunnedah (A)",
                "Strathfield (A)",
                "Narrandera (A)",
                "Lachlan (A)",
                "Wodonga (RC)",
                "Wollongong (C)",
                "Waverley (A)",
                "Weddin (A)",
                "Glen Innes Severn (A)",
                "Pittwater (A)",
                "Greater Hume Shire (A)",
                "Harden (A)",
                "Oberon (A)",
                "Woollahra (A)",
                "Richmond Valley (A)",
                "North Sydney (A)",
                "Wagga Wagga (C)",
                "Warren (A)",
                "Southern Downs (R)",
                "Tumut Shire (A)",
                "Marrickville (A)",
                "Lockhart (A)",
                "Hawkesbury (C)",
                "Orange (C)",
                "Palerang (A)",
                "Canterbury (C)",
                "Wellington (A)",
                "Willoughby (C)",
                "Central Darling (A)",
                "Cessnock (C)",
                "Clarence Valley (A)",
                "Coffs Harbour (C)",
                "Cobar (A)",
                "Armidale Dumaresq (A)",
                "Ashfield (A)",
                "Muswellbrook (A)",
                "Narrabri (A)",
                "Nambucca (A)",
                "Parkes (A)",
                "Parramatta (C)",
                "Penrith (C)",
                "Port Stephens (A)",
                "Port Macquarie-Hastings (A)",
                "Queanbeyan (C)",
                "Randwick (C)",
                "Gilgandra (A)",
                "Conargo (A)",
                "Auburn (C)",
                "Rockdale (C)",
                "Shoalhaven (C)",
                "Singleton (A)",
                "Snowy River (A)",
                "Sutherland Shire (A)",
                "Swan Hill (RC)",
                "Tamworth Regional (A)",
                "Tenterfield (A)",
                "Temora (A)",
                "Bathurst Regional (A)",
                "Berrigan (A)",
                "Albury (C)",
                "Byron (A)",
                "Ku-ring-gai (A)",
                "Lismore (C)",
                "Leichhardt (A)",
                "Blue Mountains (C)",
                "Blayney (A)",
                "Bogan (A)",
                "Boorowa (A)",
                "Bombala (A)",
                "Brewarrina (A)",
                "Bourke (A)",
                "Botany Bay (C)",
                "Camden (A)",
                "Cowra (A)",
                "Canada Bay (A)",
                "Goondiwindi (R)",
                "Gloucester (A)",
                "Gold Coast (C)",
                "Gwydir (A)",
                "Hornsby (A)",
                "Holroyd (C)",
                "Inverell (A)",
                "Jerilderie (A)",
                "Junee (A)",
                "Bellingen (A)",
                "Blacktown (C)",
                "Bega Valley (A)",
                "Newcastle (C)",
                "Kiama (A)",
                "Hurstville (C)",
                "Griffith (C)",
                "Carrathool (A)",
                "Bland (A)",
                "Kempsey (A)",
                "Shellharbour (C)",
                "Uralla (A)",
                "Liverpool Plains (A)",
                "Broken Hill (C)",
                "Dubbo (C)",
                "Narromine (A)",
                "Hunters Hill (A)",
                "Mid-Western Regional (A)",
                "Moira (S)",
                "Mildura (RC)",
                "Gannawarra (S)",
                "Moree Plains (A)",
                "Kyogle (A)",
                "The Hills Shire (A)",
                "Tumbarumba (A)",
                "Towong (S)",
                "Unincorp. Other Territories",
                "Tweed (A)",
                "Unincorporated SA",
                "Unincorporated NSW",
                "Upper Lachlan Shire (A)",
                "Upper Hunter Shire (A)",
                "Unincorporated ACT",
                "Coolamon (A)",
                "Wakool (A)",
                "Walgett (A)",
                "Walcha (A)",
                "Balranald (A)",
                "Ballina (A)",
                "Balonne (S)",
                "Bankstown (C)",
                "Murrumbidgee (A)",
                "Warringah (A)",
                "Warrumbungle Shire (A)",
                "Mosman (A)",
                "Urana (A)"
            ],
            "name" : "New South Wales",
            "nrm" : [
                "Marine NRM",
                "Western",
                "South East Queensland",
                "South East NSW",
                "North East",
                "North Coast - Lord Howe Island",
                "Northern Tablelands",
                "South Australian Murray Darling Basin",
                "South Australian Arid Lands",
                "Riverina",
                "North West NSW",
                "North Coast",
                "North Central",
                "Murray",
                "Mallee",
                "Hunter",
                "Greater Sydney",
                "Goulburn Broken",
                "East Gippsland",
                "Condamine",
                "Central West",
                "Central Tablelands",
                "Maranoa Balonne and Border Rivers",
                "ACT"
            ],
            "locality" : "",
            "centre" : [
                "147.00656430358598",
                "-32.1662650240896"
            ],
            "aream2" : 801831731283.5034,
            "pid" : "3742605",
            "layerName" : "Australian States and Territories",
            "state" : [
                "Australian Capital Territory",
                "Jervis Bay Territory",
                "New South Wales (including Coastal Waters)",
                "South Australia (including Coastal Waters)",
                "Victoria (including Coastal Waters)",
                "Queensland (including Coastal Waters)"
            ],
            "type" : "pid",
            "ibra" : [
                "Broken Hill Complex",
                "Mulga Lands",
                "Nandewar",
                "Riverina",
                "Australian Alps",
                "South Eastern Highlands",
                "South East Corner",
                "Murray Darling Depression",
                "Brigalow Belt South",
                "Simpson Strzelecki Dunefields",
                "Cobar Peneplain",
                "NSW South Western Slopes",
                "New England Tablelands",
                "Sydney Basin",
                "NSW North Coast",
                "Darling Riverine Plains",
                "Channel Country",
                "South Eastern Queensland"
            ],
            "imcra4_pb" : [
                "Central Eastern Shelf Province",
                "Southeast Shelf Transition",
                "Central Eastern Shelf Transition",
                "Lord Howe Province"
            ],
            "elect" : [
                "INDI",
                "NICHOLLS",
                "MALLEE",
                "MCPHERSON",
                "GREY",
                "MARANOA",
                "GILMORE",
                "WHITLAM",
                "HUME",
                "CUNNINGHAM",
                "HUGHES",
                "COOK",
                "MACARTHUR",
                "FARRER",
                "BARTON",
                "BANKS",
                "KINGSFORD SMITH",
                "NORTH SYDNEY",
                "WARRINGAH",
                "BENNELONG",
                "PARRAMATTA",
                "WERRIWA",
                "FOWLER",
                "MCMAHON",
                "BRADFIELD",
                "MACKELLAR",
                "BEROWRA",
                "GREENWAY",
                "CHIFLEY",
                "MITCHELL",
                "LINDSAY",
                "ROBERTSON",
                "MACQUARIE",
                "DOBELL",
                "WATSON",
                "BLAXLAND",
                "WENTWORTH",
                "SHORTLAND",
                "CALARE",
                "RIVERINA",
                "NEWCASTLE",
                "PATERSON",
                "HUNTER",
                "PARKES",
                "REID",
                "EDEN-MONARO",
                "LYNE",
                "NEW ENGLAND",
                "COWPER",
                "PAGE",
                "SYDNEY",
                "GRAYNDLER",
                "RICHMOND",
                "CANBERRA",
                "FENNER",
                "BEAN",
                "WRIGHT",
                "BARKER",
                "GIPPSLAND"
            ],
            "cmz" : [
                "Eastern Australia mulga shrublands",
                "Brigalow woodlands",
                "Eastern Australia tropical rainforests",
                "Eastern Australia woodlands",
                "Eastern Australia temperate and subtropical forests",
                "South Eastern Australia mallee woodlands",
                "South Eastern Australia mixed temperate forests woodlands and grasslands",
                "Arid shrublands and desert",
                "South Eastern Australia temperate woodlands",
                "Australian Alps montane grasslands and heathlands"
            ],
            "other" : [
                "Australian Coral Ecoregions",
                "RAMSAR wetland regions",
                "Directory of Important Wetlands",
                "ACT TAMS Reserves",
                "NSW Local Land Services Regions",
                "National Native Title Register (NNTR, Determinations of Native Title) - boundaries and core attributes",
                "Atlas of Life in the Coastal Wilderness",
                "Great Eastern Ranges Initiative",
                "Indigenous Protected Areas 2013",
                "Indigenous Land Use Agreements"
            ],
            "gerSubRegion" : [
                "GER Border Ranges",
                "GER Illawarra to Shoalhaven",
                "GER Southern Highlands",
                "GER Hunter Valley",
                "GER Jaliigirr",
                "GER Central Victorial Biolinks",
                "GER Kosciuszko to Coast",
                "GER Slopes To Summit",
                "GER Victorian BioLinks"
            ]
        },
        "source" : "pid"
    },
    "name" : "New South Wales",
    "notes" : "",
    "type" : "managementUnitArea",
    "visibility" : "private"
};

db.site.insert(nswSite);


var states = [{
    name:"New South Wales",
    acronym:"NSW",
    siteId: nswSite.siteId
}];
for (var i=0; i<states.length; i++) {
    var state = states[i];

    var mu = {
        name:state.name,
        acronym:state.acronym,
        managementUnitId:UUID.generate(),
        dateCreated:now,
        dateUpdated:now,
        config:{},
        status:'active',
        managementUnitSiteId: state.siteId
    };

    db.managementUnit.insert(mu);
    print(mu.name+" "+mu.managementUnitId);
}