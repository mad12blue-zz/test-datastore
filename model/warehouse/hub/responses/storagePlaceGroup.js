import { Factory } from 'rosie'

export const StoragePlaceGroup = new Factory()
  .attr('storagePlaceGroup', [
          {
            "id": 1,
            "groupName": "PLZ Bereich 1",
            "hubId": 1,
            "postCodeReadings": []
          },
          {
            "id": 2,
            "groupName": "PLZ Bereich 2",
            "hubId": 1,
            "postCodeReadings": []
          },
          {
            "id": 3,
            "groupName": "PLZ Bereich 3",
            "hubId": 1,
            "postCodeReadings": []
          }]);

 export const SpgInvalErr = new Factory()
    .attr('hubId', 1)
    .attr('spgInvalErr', ['hubId'], (hubId) => {
        return {
            'errors': { hubId: [ `The value '${hubId}' is not valid.` ] },
            'status': 400,
            'title': 'One or more validation errors occurred.'
          };
    })
