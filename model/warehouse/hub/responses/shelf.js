import { Factory } from 'rosie'

export const ShelfTypes = new Factory()
  .attr('shelfTypes', [
    { id: 0, value: 'unbekannt', aisle: 1 },
    { id: 1, value: 'Pickplatz', aisle: 1 },
    { id: 12, value: 'Nachflussplatz', aisle: 1 },
    { id: 15, value: 'Jahresabschluss', aisle: 1 },
    { id: 3, value: 'Lieferwagen', aisle: 50 },
    { id: 5, value: 'Handwagen', aisle: 51 },
    { id: 6, value: 'LeergutRolli', aisle: 77 },
    { id: 14, value: 'LeergutSammelplatz', aisle: 90 },
    { id: 10, value: 'Wareneingang', aisle: 91 },
    { id: 4, value: 'Stornoplatz', aisle: 93 },
    { id: 8, value: 'KlärungVollgut', aisle: 94 },
    { id: 9, value: 'Abschreibung', aisle: 94 },
    { id: 11, value: 'Inventur', aisle: 95 },
    { id: 2, value: 'Warenausgang', aisle: 96 },
    { id: 7, value: 'KlärungLeergut', aisle: 97 },
    { id: 13, value: 'Übergabe', aisle: 99 }
  ]);

export const ShelfHandover = new Factory()
  .attr('shelfHandover', [{
    "groupId": 1,
    "hubId": 1,
    "labels": [
      {
        "id": 0,
        "hubId": 0,
        "hall": 1,
        "aisle": 12,
        "storagePlace": 4,
        "isBlocked": false,
        "type": 0,
        "isVirtual": true
      },
      {
        "id": 0,
        "hubId": 0,
        "hall": 1,
        "aisle": 12,
        "storagePlace": 5,
        "isBlocked": false,
        "type": 0,
        "isVirtual": true
      },
      {
        "id": 0,
        "hubId": 0,
        "hall": 1,
        "aisle": 12,
        "storagePlace": 6,
        "isBlocked": false,
        "type": 0,
        "isVirtual": true
      }
    ]
  }]);

  export const ShelfValErr = new Factory()
    .attr('hubId', 1)
    .attr('shelfValErr', ['hubId'], (hubId) => {
        return {
            'errors': `Hub with Id ${hubId} does not exist`,
            'errorMessage': `Hub with Id ${hubId} does not exist`,
            'status': 404,
            'title': 'NotFound',
            'errorCode': 'HUB_NOT_FOUND',
            'statusDog': 'https://httpstatusdogs.com/404'
          };
    })

 export const ShelfInvalErr = new Factory()
    .attr('hubId', 1)
    .attr('shelfInvalErr', ['hubId'], (hubId) => {
        return {
            'errors': { hubId: [ `The value '${hubId}' is not valid.` ] },
            'status': 400,
            'title': 'One or more validation errors occurred.'
          };
    })

  export const Shelves = new Factory()
    .attr('shelves', {
    "results": [
      {
        "id": 70700,
        "label": "3.88.291.61.5",
        "hubId": 1,
        "hall": 3,
        "aisle": 88,
        "storagePlace": 291,
        "level": 61,
        "shelf": 5,
        "checkDigit": 49,
        "ordinal": 0,
        "width": 90,
        "depth": 130,
        "height": 180,
        "measurementUnit": "cm  ",
        "volume": 210.6,
        "maxWeightCapacity": 1000,
        "description": "DepositTrolley",
        "isBlocked": false,
        "type": 6,
        "isVirtual": false
      }
    ]
  });

  export const Shelf70700 = new Factory()
    .attr('shelf70700', {
            id: 70700,
            label: '3.88.291.61.5',
            hubId: 1,
            hall: 3,
            aisle: 88,
            storagePlace: 291,
            level: 61,
            shelf: 5,
            checkDigit: 49,
            ordinal: 0,
            width: 90,
            depth: 130,
            height: 180,
            measurementUnit: 'cm  ',
            volume: 210.6,
            maxWeightCapacity: 1000,
            description: 'DepositTrolley',
            isBlocked: false,
            type: 6,
            isVirtual: false
          });

 export const ShelfIdInvalErr = new Factory()
    .attr('shelfId', 70700)
    .attr('shelfIdInvalErr', ['shelfId'], (shelfId) => {
        return {
            'errors': { shelfid: [ `The value '${shelfId}' is not valid.` ] },
            'status': 400,
            'title': 'One or more validation errors occurred.',
            'type': 'https://tools.ietf.org/html/rfc7231#section-6.5.1'
          };
    })
