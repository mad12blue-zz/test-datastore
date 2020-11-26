import { Factory } from 'rosie';

export const Code = new Factory()
    .attr('halle', () => faker.random.number({
                            'min': 1,
                            'max': 3
                        }))
    .attr('gang', () => faker.random.number({
                            'min': 10,
                            'max': 99
                        }))
    .attr('platz', () => faker.random.number({
                            'min': 100,
                            'max': 999
                        }))
    .attr('ebene', () => faker.random.number({
                            'min': 1,
                            'max': 99
                        }))
    .attr('fach', () => faker.random.number({
                            'min': 1,
                            'max': 99
                        }))


export const Label = new Factory()
    .attr('label', '99.99.99.99.99')

export const Trolley = new Factory()
    .attr('type', 6)
    .attr('storagePlaceGroupId', 0)
    .attr('isBlocked', false)
    .attr('labels', null, () => {

        return [Label.build().Label];
    })

export const DepositItem = new Factory()
    .attr('depositId', 111)
    .attr('quantity', 11)
   
export const DepositToTrolley = new Factory()
    .attr('vehicleId', 6)
    .attr('employeeId', 11997)
    .attr('tourKey', '111')
    .attr('items', null, () => {
        return [DepositItem.build()];
    })

export const CorrectionItem = new Factory()
    .attr('depositId', 222)
    .attr('quantity', 22)
   
export const CorrectionToTrolley = new Factory()
    .attr('employeeId', 11997)
    .attr('items', null, () => {
        return [CorrectionItem.build()];
    })