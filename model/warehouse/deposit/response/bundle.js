import { Factory } from 'rosie';
import { Enum } from '../enum';

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

export const BundleErr = new Factory()
    .attr('errorCode', Enum.BadBundle.errorCode)
    .attr('errors', Enum.BadBundle.errors)
    .attr('status', Enum.BadBundle.status)
    .attr('title', Enum.BadBundle.title)
