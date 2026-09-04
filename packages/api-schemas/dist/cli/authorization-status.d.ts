import { z } from "zod/v4";
/**
 * CLI authorization broker lifecycle state
 *
 * @openapiSchema CliAuthorizationStatus
 * @endpoint GET /v1/app/cli-authorizations
 * @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
 * @usedBySchema CliAuthorizationPollSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export declare const CliAuthorizationStatusSchema: z.ZodEnum<{
    CONSUMED: "CONSUMED";
    DENIED: "DENIED";
    EXPIRED: "EXPIRED";
    FAILED: "FAILED";
    ISSUING: "ISSUING";
    KEY_READY: "KEY_READY";
    PENDING: "PENDING";
    REVOKED: "REVOKED";
    REVOKING: "REVOKING";
}>;
export type CliAuthorizationStatus = z.infer<typeof CliAuthorizationStatusSchema>;
//# sourceMappingURL=authorization-status.d.ts.map