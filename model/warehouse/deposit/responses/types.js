import { Factory } from 'rosie'

export const DepositTypes = new Factory()
    .attr('depositTypes', [
                            'Unknown', 
                            'Bottle', 
                            'Can', 
                            'Barrel', 
                            'Crate', 
                            'Dpg', 
                            'Pallet', 
                            'Bundle']);

export const MovementTypes = new Factory()
    .attr('movementTypes', [
                            'CarToTrolley',
                            'TrolleyToStock',
                            'OutboundBundle',
                            'DisassembleBundle',
                            'CreateBundle',
                            'CorrectionTrolleyToClarificationArea',
                            'CorrectionClarificationAreaToTrolley',
                            'SystemInventory'
                        ]);