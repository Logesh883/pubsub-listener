/**
 * Enum for auth type values
 */
export type AuthType = string;
export namespace AuthType {
    let USER_SUPPLIED: string;
    let USERNAME_PASSWORD: string;
    let OAUTH_CLIENT_CREDENTIALS: string;
    let OAUTH_JWT_BEARER: string;
}
export class AuthConfiguration {
    /**
     * @param {AuthConfiguration} config the client configuration
     * @returns {AuthConfiguration} the sanitized client configuration
     */
    static load(config: AuthConfiguration): AuthConfiguration;
    /**
     * @param {AuthConfiguration} config the client configuration
     * @returns {AuthConfiguration} sanitized configuration
     */
    static "__#2@#loadUserSuppliedAuth"(config: AuthConfiguration): AuthConfiguration;
    static "__#2@#checkMandatoryVariables"(config: any, varNames: any): void;
}
//# sourceMappingURL=configuration.d.ts.map