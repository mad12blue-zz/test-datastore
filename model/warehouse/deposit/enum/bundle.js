export const BundleError = {
    NotFoundEmployee: {
        errorCode: 'NOT_FOUND_EMPLOYEE',
        errors: (employeeId, hubId) => `Employee with employeeId ${employeeId} does not exist in hub ${hubId}.`,
        title: 'NotFound',
        status: 404
    },
    BadBundle: {
        errorCode: 'BAD_REQUEST_BUNDLE',
        errors: 'Bundles from request are not found.',        
        title: 'BadRequest',
        status: 400
    },
    InvalidHubId: {
        errorCode: hubId => `{ hubId: [ The value '${hubId}' is not valid. ] }`,
        title: 'One or more validation errors occurred.',
        status: 400,
    },
};

export const ErrorCode = {
    NoMatch: 'AC001',
    Failed: 'AC003',
    Conflict: 'CR003',
    InvalidAddress: 'CUS003',
    NoEntity: 'GE404',
    Unauthorized: 'GE401',
    Validation: 'VAL001'
};
