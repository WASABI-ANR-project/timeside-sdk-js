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
 * @interface Processor
 */
export interface Processor {
    /**
     * 
     * @type {string}
     * @memberof Processor
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Processor
     */
    readonly parametersSchema?: string;
    /**
     * 
     * @type {string}
     * @memberof Processor
     */
    pid: ProcessorPidEnum;
    /**
     * 
     * @type {string}
     * @memberof Processor
     */
    readonly url?: string;
    /**
     * 
     * @type {string}
     * @memberof Processor
     */
    version?: string;
}

export function ProcessorFromJSON(json: any): Processor {
    return ProcessorFromJSONTyped(json, false);
}

export function ProcessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Processor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parametersSchema': !exists(json, 'parameters_schema') ? undefined : json['parameters_schema'],
        'pid': json['pid'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ProcessorToJSON(value?: Processor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'pid': value.pid,
        'version': value.version,
    };
}

/**
* @export
* @enum {string}
*/
export enum ProcessorPidEnum {
    VampSimpleHost = 'vamp_simple_host',
    AubioMelenergy = 'aubio_melenergy',
    AubioMfcc = 'aubio_mfcc',
    AubioPitch = 'aubio_pitch',
    AubioSilence = 'aubio_silence',
    AubioSpecdesc = 'aubio_specdesc',
    AubioTemporal = 'aubio_temporal',
    EssentiaDissonance = 'essentia_dissonance',
    VampConstantq = 'vamp_constantq',
    LoudnessItu = 'loudness_itu',
    SpectrogramAnalyzer = 'spectrogram_analyzer',
    OnsetDetectionFunction = 'onset_detection_function',
    SpectrogramAnalyzerBuffer = 'spectrogram_analyzer_buffer',
    WaveformAnalyzer = 'waveform_analyzer',
    MeanDcShift = 'mean_dc_shift',
    EssentiaDissonanceValue = 'essentia_dissonance_value',
    VampTempo = 'vamp_tempo',
    VampTuning = 'vamp_tuning',
    Level = 'level',
    LiveEncoder = 'live_encoder',
    FlacEncoder = 'flac_encoder',
    AacEncoder = 'aac_encoder',
    Mp3Encoder = 'mp3_encoder',
    VorbisEncoder = 'vorbis_encoder',
    OpusEncoder = 'opus_encoder',
    WavEncoder = 'wav_encoder',
    WebmEncoder = 'webm_encoder',
    GrapherAubioPitch = 'grapher_aubio_pitch',
    GrapherAubioSilence = 'grapher_aubio_silence',
    GrapherDissonance = 'grapher_dissonance',
    GrapherVampCqt = 'grapher_vamp_cqt',
    GrapherLoudnessItu = 'grapher_loudness_itu',
    Spectrogram = 'spectrogram',
    GrapherOnsetDetectionFunction = 'grapher_onset_detection_function',
    GrapherWaveform = 'grapher_waveform',
    SpectrogramLog = 'spectrogram_log',
    SpectrogramLin = 'spectrogram_lin',
    WaveformSimple = 'waveform_simple',
    WaveformCentroid = 'waveform_centroid',
    WaveformContourBlack = 'waveform_contour_black',
    WaveformContourWhite = 'waveform_contour_white',
    WaveformTransparent = 'waveform_transparent'
}

