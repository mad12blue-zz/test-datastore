import { Factory } from 'rosie'

export const TopBundles = new Factory()
    .attr('topBundles', [  
                            {
                                "type": "Bundle",
                                "bundleId": 312,
                                "totalPrice": 3.3,
                                "cratePrice": 1.5,
                                "bottlePrice": 0.15,
                                "crateCount": 1,
                                "bottleCount": 12,
                                "displayDescription": "1 x 1.50 € + 12 x 0.15 €"
                            },
                            {
                                "type": "Bundle",
                                "bundleId": 342,
                                "totalPrice": 2.4,
                                "cratePrice": 1.5,
                                "bottlePrice": 0.15,
                                "crateCount": 1,
                                "bottleCount": 6,
                                "displayDescription": "1 x 1.50 € + 6 x 0.15 €"
                            },
                            {
                                "type": "Pallet",
                                "bundleId": 81,
                                "totalPrice": 7.5,
                                "cratePrice": 0,
                                "bottlePrice": 0,
                                "crateCount": 0,
                                "bottleCount": 0,
                                "displayDescription": "Bierpalette"
                            },
                            {
                                "type": "Pallet",
                                "bundleId": 82,
                                "totalPrice": 7.5,
                                "cratePrice": 0,
                                "bottlePrice": 0,
                                "crateCount": 0,
                                "bottleCount": 0,
                                "displayDescription": "Europalette"                                
                            }
                        ]);

export const Bundle4005720001173 = new Factory()
    .attr('bundle4005720001173', [  
                                    {
                                        "articleEAN": "4005720001173",
                                        "articleDisplay": "Volvic Touch Kirsche",
                                        "type": "Crate",
                                        "bundleId": 315,
                                        "totalPrice": 3,
                                        "cratePrice": 1.5,
                                        "bottlePrice": 0.25,
                                        "crateCount": 1,
                                        "bottleCount": 6,
                                        "displayDescription": "1 x 1.50 € + 6 x 0.25 €"
                                    }
                                ]);

export const Bundle4002846034504 = new Factory()
    .attr('bundle4002846034504', [  
                                    {
                                        "articleEAN": "4002846034504",
                                        "articleDisplay": "Mio Mio Mate",
                                        "type": "Crate",
                                        "bundleId": 312,
                                        "totalPrice": 3.3,
                                        "cratePrice": 1.5,
                                        "bottlePrice": 0.15,
                                        "crateCount": 1,
                                        "bottleCount": 12,
                                        "displayDescription": "1 x 1.50 € + 12 x 0.15 €",
                                        "quantity": 0
                                    }
                                ]);

export const BundleEmpErr = new Factory()
    .attr('employeeId', 11997)
    .attr('hubId', 1)
    .attr('bundleEmpErr', ['employeeId', 'hubId'], (employeeId, hubId) => {
        return {
            'errorCode': 'NOT_FOUND_EMPLOYEE',
            'errors': `Employee with employeeId ${employeeId} does not exist in hub ${hubId}.`,
            'status': 404,
            'title': 'NotFound'
          };
    })

export const BundleErr = new Factory()
    .attr('errorCode', 'BAD_REQUEST_BUNDLE')
    .attr('errors', `Bundles from request are not found.`)
    .attr('status', 400)
    .attr('title', 'BadRequest')

export const BundleValErr = new Factory()
    .attr('hubId', 1)
    .attr('bundleValErr', ['hubId'], (hubId) => {
        return {
            'errors': { hubId: [ `The value '${hubId}' is not valid.` ] },
            'status': 400,
            'title': 'One or more validation errors occurred.'
          };
    })

export const BundleEanErr = new Factory()
    .attr('ean', 4005720001173)
    .attr('bundleEanErr', ['ean'], (ean) => {
        return {
            'errorCode': 'NOT_FOUND_ARTICLE',
            'errors': `Article with EAN ${ean} is not found.`,
            'status': 404,
            'title': 'NotFound'
          };
    })
