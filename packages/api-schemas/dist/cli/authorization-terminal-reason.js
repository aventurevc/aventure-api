// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const CliAuthorizationTerminalReasonSchema = z.enum([
    "Denied by user",
    "Authorization request expired",
    "CLI authorization expired before acknowledgement",
    "Credential issuance recovery revoked an unrecoverable key",
    "Revoked by user",
    "Clerk create response validation failed",
    "Credential issuance failed",
    "Credential issuance could not be recovered",
    "Personal API-key quota reached",
    "Credential issuance lost its database claim",
    "Credential delivery encryption failed",
    "Credential issuance finalization was lost",
]);
//# sourceMappingURL=authorization-terminal-reason.js.map