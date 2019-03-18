import {ExcludePropertyFunction} from '../../types';

export const excludeProperty: ExcludePropertyFunction =
    (object, excludedProperty, options = {}) => {
        const {
            [excludedProperty]: property,
            ...rest
        } = object;
        const {immutable} = options;
        let result = object;

        if (immutable) {
            delete object[excludedProperty];
        } else {
            result = rest;
        }

        return result;
    };
