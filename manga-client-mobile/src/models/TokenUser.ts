export interface TokenUser {
    sub: String,
    created: number,
    roles: string[],
    isSubscribed: boolean,
    subscriptionExpiresOn: number,
    exp: number
}