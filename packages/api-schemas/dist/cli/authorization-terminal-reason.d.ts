import { z } from "zod/v4";
/**
 * CLI authorization terminal explanation
 *
 * @openapiSchema CliAuthorizationTerminalReason
 * @endpoint GET /v1/app/cli-authorizations
 * @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
 * @usedBySchema CliAuthorizationPollSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-terminal-reason
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export declare const CliAuthorizationTerminalReasonSchema: z.ZodEnum<{
    "Authorization request expired": "Authorization request expired";
    "CLI authorization expired before acknowledgement": "CLI authorization expired before acknowledgement";
    "Clerk create response validation failed": "Clerk create response validation failed";
    "Credential delivery encryption failed": "Credential delivery encryption failed";
    "Credential issuance could not be recovered": "Credential issuance could not be recovered";
    "Credential issuance failed": "Credential issuance failed";
    "Credential issuance finalization was lost": "Credential issuance finalization was lost";
    "Credential issuance lost its database claim": "Credential issuance lost its database claim";
    "Credential issuance recovery revoked an unrecoverable key": "Credential issuance recovery revoked an unrecoverable key";
    "Denied by user": "Denied by user";
    "Personal API-key quota reached": "Personal API-key quota reached";
    "Revoked by user": "Revoked by user";
}>;
export type CliAuthorizationTerminalReason = z.infer<typeof CliAuthorizationTerminalReasonSchema>;
//# sourceMappingURL=authorization-terminal-reason.d.ts.map