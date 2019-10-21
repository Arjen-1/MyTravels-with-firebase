import { TravelData } from './travel-data.model';


export class TravelDataService{
    availableTravelData: TravelData[] = [{
        id:'thailandId',
        travelDestination:'Thailand',
        travelDepartureDay:new Date("November 7 , 2019 00:00:00"),
        
        placeToVisit:[{
            'place':{
                'name':'Chiang Mai',
                'activities':[
                    {'name':'Extreme Canoïng',
                    'url':"https://www.arjenholleman.nl"},
                    {'name':'Elephant Sanctuary',
                    'url':"https://www.arjenholleman.nl/elephant"}
                    ]
                }            
            },
            {
            'place':{
                'name':'Pai',
                'activities':[
                    {'name':'Normal Canoïng',
                    'url':"https://www.arjenholleman.nl"},
                    {'name':'Tiger Sanctuary',
                    'url':"https://www.arjenholleman.nl/elephant"}
                    ]
                }            
            }]
    }];
}