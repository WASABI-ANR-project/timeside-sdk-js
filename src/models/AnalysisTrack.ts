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
 * @interface AnalysisTrack
 */
export interface AnalysisTrack {
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    analysis: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    item: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    readonly parametersDefault?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    readonly parametersSchema?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    readonly parametrizable?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    readonly resultUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    readonly url?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisTrack
     */
    readonly uuid?: string;
}

export function AnalysisTrackFromJSON(json: any): AnalysisTrack {
    return AnalysisTrackFromJSONTyped(json, false);
}

export function AnalysisTrackFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisTrack {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'analysis': json['analysis'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'item': json['item'],
        'parametersDefault': !exists(json, 'parameters_default') ? undefined : json['parameters_default'],
        'parametersSchema': !exists(json, 'parameters_schema') ? undefined : json['parameters_schema'],
        'parametrizable': !exists(json, 'parametrizable') ? undefined : json['parametrizable'],
        'resultUrl': !exists(json, 'result_url') ? undefined : json['result_url'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function AnalysisTrackToJSON(value?: AnalysisTrack | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'analysis': value.analysis,
        'description': value.description,
        'item': value.item,
        'title': value.title,
    };
}


