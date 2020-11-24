import { Factory } from 'rosie';
import faker from 'faker';

export const Customer = new Factory()
    .attr('email', () => faker.internet.email())
    .attr('password', () => faker.internet.password(10, false, undefined, 'A1'))
    .attr('first_name', () => faker.name.firstName())
    .attr('last_name', () => faker.name.lastName())
    .attr('salutation', () => random.element(['Herr', 'Frau']))
    .attr('birthday', () => faker.date.past(20, '2000-01-01').toISOString().slice(0, 10))

export const Item = new Factory()
    .attr('bundleId', 360)
    .attr('quantity', 1)

export const Bundle = new Factory()
    .attr('employeeId', 11997)
    .attr('hubId', 1)
    .attr('items', null, () => {
        return [Item.build()];
    })