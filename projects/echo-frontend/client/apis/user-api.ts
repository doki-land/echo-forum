// tslint:disable
/**
 * Echo Forum
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { UserCreate } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new user with password
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut: async (userCreate?: UserCreate, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/create`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof userCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(userCreate !== undefined ? userCreate : {}) : (userCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create new user with password
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut_1: async (userCreate?: UserCreate, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/create`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof userCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(userCreate !== undefined ? userCreate : {}) : (userCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new user with password
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCreatePut(userCreate?: UserCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userCreatePut(userCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create new user with password
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCreatePut_1(userCreate?: UserCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userCreatePut_1(userCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create new user with password
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut(userCreate?: UserCreate, options?: any): AxiosPromise<string> {
            return UserApiFp(configuration).userCreatePut(userCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create new user with password
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut_1(userCreate?: UserCreate, options?: any): AxiosPromise<string> {
            return UserApiFp(configuration).userCreatePut_1(userCreate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @summary Create new user with password
     * @param {UserCreate} [userCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userCreatePut(userCreate?: UserCreate, options?: any) {
        return UserApiFp(this.configuration).userCreatePut(userCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create new user with password
     * @param {UserCreate} [userCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userCreatePut_1(userCreate?: UserCreate, options?: any) {
        return UserApiFp(this.configuration).userCreatePut_1(userCreate, options).then((request) => request(this.axios, this.basePath));
    }

}
