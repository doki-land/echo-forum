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
import { CategoryCreate } from '../models';
// @ts-ignore
import { CategoryEdit } from '../models';
// @ts-ignore
import { CategoryInfo } from '../models';
// @ts-ignore
import { UserCreate } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary /category/create
         * @param {CategoryCreate} [categoryCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryCreatePost: async (categoryCreate?: CategoryCreate, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/create`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof categoryCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(categoryCreate !== undefined ? categoryCreate : {}) : (categoryCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/create
         * @param {CategoryCreate} [categoryCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryCreatePost_1: async (categoryCreate?: CategoryCreate, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/create`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof categoryCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(categoryCreate !== undefined ? categoryCreate : {}) : (categoryCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/delete
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryDeleteDelete: async (body?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/delete`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/delete
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryDeleteDelete_2: async (body?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/delete`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/edit
         * @param {CategoryEdit} [categoryEdit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryEditPatch: async (categoryEdit?: CategoryEdit, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/edit`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof categoryEdit !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(categoryEdit !== undefined ? categoryEdit : {}) : (categoryEdit || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/edit
         * @param {CategoryEdit} [categoryEdit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryEditPatch_3: async (categoryEdit?: CategoryEdit, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/edit`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof categoryEdit !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(categoryEdit !== undefined ? categoryEdit : {}) : (categoryEdit || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/query
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryQueryPost: async (body?: object, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/query`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /category/query
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryQueryPost_4: async (body?: object, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/category/query`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Register a new user
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
         * @summary Register a new user
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut_5: async (userCreate?: UserCreate, options: any = {}): Promise<RequestArgs> => {
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
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary /category/create
         * @param {CategoryCreate} [categoryCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryCreatePost(categoryCreate?: CategoryCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryCreatePost(categoryCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/create
         * @param {CategoryCreate} [categoryCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryCreatePost_1(categoryCreate?: CategoryCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryCreatePost_1(categoryCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/delete
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryDeleteDelete(body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryDeleteDelete(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/delete
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryDeleteDelete_2(body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryDeleteDelete_2(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/edit
         * @param {CategoryEdit} [categoryEdit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryEditPatch(categoryEdit?: CategoryEdit, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryEditPatch(categoryEdit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/edit
         * @param {CategoryEdit} [categoryEdit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryEditPatch_3(categoryEdit?: CategoryEdit, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryEditPatch_3(categoryEdit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/query
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryQueryPost(body?: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryInfo>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryQueryPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /category/query
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoryQueryPost_4(body?: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryInfo>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).categoryQueryPost_4(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Register a new user
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCreatePut(userCreate?: UserCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).userCreatePut(userCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Register a new user
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCreatePut_5(userCreate?: UserCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).userCreatePut_5(userCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary /category/create
         * @param {CategoryCreate} [categoryCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryCreatePost(categoryCreate?: CategoryCreate, options?: any): AxiosPromise<string> {
            return AuthApiFp(configuration).categoryCreatePost(categoryCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/create
         * @param {CategoryCreate} [categoryCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryCreatePost_1(categoryCreate?: CategoryCreate, options?: any): AxiosPromise<string> {
            return AuthApiFp(configuration).categoryCreatePost_1(categoryCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/delete
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryDeleteDelete(body?: string, options?: any): AxiosPromise<number> {
            return AuthApiFp(configuration).categoryDeleteDelete(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/delete
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryDeleteDelete_2(body?: string, options?: any): AxiosPromise<number> {
            return AuthApiFp(configuration).categoryDeleteDelete_2(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/edit
         * @param {CategoryEdit} [categoryEdit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryEditPatch(categoryEdit?: CategoryEdit, options?: any): AxiosPromise<number> {
            return AuthApiFp(configuration).categoryEditPatch(categoryEdit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/edit
         * @param {CategoryEdit} [categoryEdit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryEditPatch_3(categoryEdit?: CategoryEdit, options?: any): AxiosPromise<number> {
            return AuthApiFp(configuration).categoryEditPatch_3(categoryEdit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/query
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryQueryPost(body?: object, options?: any): AxiosPromise<Array<CategoryInfo>> {
            return AuthApiFp(configuration).categoryQueryPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /category/query
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoryQueryPost_4(body?: object, options?: any): AxiosPromise<Array<CategoryInfo>> {
            return AuthApiFp(configuration).categoryQueryPost_4(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register a new user
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut(userCreate?: UserCreate, options?: any): AxiosPromise<string> {
            return AuthApiFp(configuration).userCreatePut(userCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register a new user
         * @param {UserCreate} [userCreate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreatePut_5(userCreate?: UserCreate, options?: any): AxiosPromise<string> {
            return AuthApiFp(configuration).userCreatePut_5(userCreate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary /category/create
     * @param {CategoryCreate} [categoryCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryCreatePost(categoryCreate?: CategoryCreate, options?: any) {
        return AuthApiFp(this.configuration).categoryCreatePost(categoryCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/create
     * @param {CategoryCreate} [categoryCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryCreatePost_1(categoryCreate?: CategoryCreate, options?: any) {
        return AuthApiFp(this.configuration).categoryCreatePost_1(categoryCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/delete
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryDeleteDelete(body?: string, options?: any) {
        return AuthApiFp(this.configuration).categoryDeleteDelete(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/delete
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryDeleteDelete_2(body?: string, options?: any) {
        return AuthApiFp(this.configuration).categoryDeleteDelete_2(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/edit
     * @param {CategoryEdit} [categoryEdit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryEditPatch(categoryEdit?: CategoryEdit, options?: any) {
        return AuthApiFp(this.configuration).categoryEditPatch(categoryEdit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/edit
     * @param {CategoryEdit} [categoryEdit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryEditPatch_3(categoryEdit?: CategoryEdit, options?: any) {
        return AuthApiFp(this.configuration).categoryEditPatch_3(categoryEdit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/query
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryQueryPost(body?: object, options?: any) {
        return AuthApiFp(this.configuration).categoryQueryPost(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary /category/query
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public categoryQueryPost_4(body?: object, options?: any) {
        return AuthApiFp(this.configuration).categoryQueryPost_4(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Register a new user
     * @param {UserCreate} [userCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public userCreatePut(userCreate?: UserCreate, options?: any) {
        return AuthApiFp(this.configuration).userCreatePut(userCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Register a new user
     * @param {UserCreate} [userCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public userCreatePut_5(userCreate?: UserCreate, options?: any) {
        return AuthApiFp(this.configuration).userCreatePut_5(userCreate, options).then((request) => request(this.axios, this.basePath));
    }

}
