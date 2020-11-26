import { Factory } from 'rosie';

export const Item = new Factory()
    .attr('bundleId', 360)
    .attr('quantity', 1)

export const Bundle = new Factory()
    .attr('employeeId', 11997)
    .attr('hubId', 1)
    .attr('items', null, () => {
        return [Item.build()];
    })
