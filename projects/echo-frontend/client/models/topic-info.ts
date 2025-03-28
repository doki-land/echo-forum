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



/**
 * TopicInfo
 * @export
 * @interface TopicInfo
 */
export interface TopicInfo {
    /**
     * Semantic64<\"topic\">，The 64-bit hexadecimal string identifier
     * @type {string}
     * @memberof TopicInfo
     */
    topic_id: string;
    /**
     * 
     * @type {string}
     * @memberof TopicInfo
     */
    link: string;
    /**
     * 
     * @type {string}
     * @memberof TopicInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TopicInfo
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof TopicInfo
     */
    create_time: string;
    /**
     * Semantic64<\"user\">，The 64-bit hexadecimal string identifier
     * @type {string}
     * @memberof TopicInfo
     */
    create_user: string;
    /**
     * 
     * @type {string}
     * @memberof TopicInfo
     */
    update_time: string;
    /**
     * Semantic64<\"user\">，The 64-bit hexadecimal string identifier
     * @type {string}
     * @memberof TopicInfo
     */
    update_user: string;
}


