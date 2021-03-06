/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Provider
 */
export interface Provider {
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    pid?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    readonly uuid?: string;
}

export function ProviderFromJSON(json: any): Provider {
    return ProviderFromJSONTyped(json, false);
}

export function ProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Provider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pid': !exists(json, 'pid') ? undefined : json['pid'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function ProviderToJSON(value?: Provider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pid': value.pid,
    };
}


