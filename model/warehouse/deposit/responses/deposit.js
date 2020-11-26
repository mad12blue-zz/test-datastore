import { Factory } from 'rosie'

export const TopDeposits = new Factory()
    .attr('topDeposits', [{
                            "id": 299,
                            "displayDescription": "Leerka. 1,50 Euro",
                            "type": "Unknown",
                            "price": 1.5
                          },
                          {
                            "id": 296,
                            "displayDescription": "Flasche 0,15 Euro",
                            "type": "Unknown",
                            "price": 0.15
                          },
                          {
                            "id": 82,
                            "displayDescription": "Europalette",
                            "type": "Unknown",
                            "price": 7.5
                          },
                          {
                            "id": 81,
                            "displayDescription": "Bierpalette",
                            "type": "Unknown",
                            "price": 0
                          },
                          {
                            "id": 295,
                            "displayDescription": "Flasche 0,08 Euro",
                            "type": "Unknown",
                            "price": 0.08
                          }
                    ]);

export const ImpDeposits = new Factory()
    .attr('impDeposits', [
                            {
                                "ean":["2300000002591","4039216000012","8017870000018"],
                                "articleDisplay":"Plose Naturale",
                                "type":"Bottle",
                                "contentCount":1,
                                "contentId":296,
                                "contentPrice":0.15,
                                "crateCount":0,
                                "crateId":0,
                                "cratePrice":0,
                                "bundleId":296,
                                "displayDescription":"1 x 0.15 Euro"
                            },
                            {
                                "ean":["2300000002591","4039216000012","8017870000018"],
                                "articleDisplay":"Plose Naturale",
                                "type":"Crate",
                                "contentCount":6,
                                "contentId":296,
                                "contentPrice":0.15,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":342,
                                "displayDescription":"6 x 0.15 Euro + 1.50 Euro"
                            },
                            {
                                "ean":["8017870000018","4039216000012","2300000002591"],
                                "articleDisplay":"Plose Naturale",
                                "type":"Crate",
                                "contentCount":12,
                                "contentId":296,
                                "contentPrice":0.15,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":312,
                                "displayDescription":"12 x 0.15 Euro + 1.50 Euro"
                            },
                            {   
                                "ean":["705632200551","705632447901"],
                                "articleDisplay":"LIMAI 6er Pack",
                                "type":"Unknown",
                                "contentCount":6,
                                "contentId":295,
                                "contentPrice":0.08,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":402,
                                "displayDescription":"6 x 0.08 Euro + 1.50 Euro"
                            },
                            { 
                                "ean":["705632200551","705632447901"],
                                "articleDisplay":"LIMAI",
                                "type":"Crate",
                                "contentCount":24,
                                "contentId":295,
                                "contentPrice":0.08,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":309,
                                "displayDescription":"24 x 0.08 Euro + 1.50 Euro"
                            },
                            {
                                "ean":["705632200551","705632447901"],
                                "articleDisplay":"LIMAI",
                                "type":"Bottle",
                                "contentCount":1,
                                "contentId":295,
                                "contentPrice":0.08,
                                "crateCount":0,
                                "crateId":0,
                                "cratePrice":0,
                                "bundleId":295,
                                "displayDescription":"1 x 0.08 Euro"
                            },
                            {
                                "ean":["4014558184880","4014558214044","4014558384884"],
                                "articleDisplay":"Hasseröder Perfect Draft",
                                "type":"Crate",
                                "contentCount":1,
                                "contentId":373,
                                "contentPrice":5,
                                "crateCount":1,
                                "crateId":241,
                                "cratePrice":1.5,
                                "bundleId":240,
                                "displayDescription":"1 x 5.00 Euro + 1.50 Euro"
                            },
                            {   
                                "ean":["4100130084843","4100130614019","42111696"],
                                "articleDisplay":"Beck's Perfect Draft",
                                "type":"Crate",
                                "contentCount":1,
                                "contentId":373,
                                "contentPrice":5,
                                "crateCount":1,
                                "crateId":241,
                                "cratePrice":1.5,
                                "bundleId":240,
                                "displayDescription":"1 x 5.00 Euro + 1.50 Euro"
                            }
                ]);
export const ImpDepositsOldFormat = new Factory()
    .attr('impDepositsOldFormat', [
                            {
                                "articleEAN":"8017870000018",
                                "articleDisplay":"Plose Naturale",
                                "type":"Bottle",
                                "contentCount":1,
                                "contentId":296,
                                "contentPrice":0.15,
                                "crateCount":0,
                                "crateId":0,
                                "cratePrice":0,
                                "bundleId":296,
                                "displayDescription":"1 x 0.15 Euro"
                            },
                            {
                                "articleEAN":"4039216000012",
                                "articleDisplay":"Plose Naturale",
                                "type":"Crate",
                                "contentCount":6,
                                "contentId":296,
                                "contentPrice":0.15,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":342,
                                "displayDescription":"6 x 0.15 Euro + 1.50 Euro"
                            },
                            {   
                                "articleEAN":"705632200551",
                                "articleDisplay":"LIMAI 6er Pack",
                                "type":"Unknown",
                                "contentCount":6,
                                "contentId":295,
                                "contentPrice":0.08,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":402,
                                "displayDescription":"6 x 0.08 Euro + 1.50 Euro"
                            },
                            { 
                                "articleEAN":"705632447901",
                                "articleDisplay":"LIMAI",
                                "type":"Crate",
                                "contentCount":24,
                                "contentId":295,
                                "contentPrice":0.08,
                                "crateCount":1,
                                "crateId":299,
                                "cratePrice":1.5,
                                "bundleId":309,
                                "displayDescription":"24 x 0.08 Euro + 1.50 Euro"
                            },
                            {
                                "articleEAN":"4014558184880",
                                "articleDisplay":"Hasseröder Perfect Draft",
                                "type":"Crate",
                                "contentCount":1,
                                "contentId":373,
                                "contentPrice":5,
                                "crateCount":1,
                                "crateId":241,
                                "cratePrice":1.5,
                                "bundleId":240,
                                "displayDescription":"1 x 5.00 Euro + 1.50 Euro"
                            },
                            {   
                                "articleEAN":"42111696",
                                "articleDisplay":"Beck's Perfect Draft",
                                "type":"Crate",
                                "contentCount":1,
                                "contentId":373,
                                "contentPrice":5,
                                "crateCount":1,
                                "crateId":241,
                                "cratePrice":1.5,
                                "bundleId":240,
                                "displayDescription":"1 x 5.00 Euro + 1.50 Euro"
                            }                                
                ]);
