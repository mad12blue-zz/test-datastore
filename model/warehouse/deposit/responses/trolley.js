import { Factory } from 'rosie'

export const TrolleyBarCodeErr = new Factory()
    .attr('trolleyBarCode', '99.99.99.99.99')
    .attr('trolleyBarCodeErr', ['trolleyBarCode'], (trolleyBarCode) => {
        return {
            'errorCode': 'NOT_FOUND_TROLLEY',
            'errors': `No trolley found with label ${trolleyBarCode}.`,
            'status': 404,
            'title': 'NotFound'
          };
    })

export const TrolleyDepositErr = new Factory()
    .attr('depositId', 111)
    .attr('trolleyDepositErr', ['depositId'], (depositId) => {
        return {
            'errorCode': 'NOT_FOUND_DEPOSITS',
            'errors': `Items ${depositId} are not valid deposit items.`,
            'status': 404,
            'title': 'NotFound'
          };
    })
