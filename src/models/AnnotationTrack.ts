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
import {
    AnnotationTrackAnnotations,
    AnnotationTrackAnnotationsFromJSON,
    AnnotationTrackAnnotationsFromJSONTyped,
    AnnotationTrackAnnotationsToJSON,
} from './';

/**
 * 
 * @export
 * @interface AnnotationTrack
 */
export interface AnnotationTrack {
    /**
     * 
     * @type {Array<AnnotationTrackAnnotations>}
     * @memberof AnnotationTrack
     */
    readonly annotations?: Array<AnnotationTrackAnnotations>;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTrack
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTrack
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationTrack
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTrack
     */
    item: string;
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationTrack
     */
    overlapping?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTrack
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTrack
     */
    readonly url?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTrack
     */
    readonly uuid?: string;
}

export function AnnotationTrackFromJSON(json: any): AnnotationTrack {
    return AnnotationTrackFromJSONTyped(json, false);
}

export function AnnotationTrackFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnotationTrack {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : ((json['annotations'] as Array<any>).map(AnnotationTrackAnnotationsFromJSON)),
        'author': !exists(json, 'author') ? undefined : json['author'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'isPublic': !exists(json, 'is_public') ? undefined : json['is_public'],
        'item': json['item'],
        'overlapping': !exists(json, 'overlapping') ? undefined : json['overlapping'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function AnnotationTrackToJSON(value?: AnnotationTrack | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': value.author,
        'description': value.description,
        'is_public': value.isPublic,
        'item': value.item,
        'overlapping': value.overlapping,
        'title': value.title,
    };
}

