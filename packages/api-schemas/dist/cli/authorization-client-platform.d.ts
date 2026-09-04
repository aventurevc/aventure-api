import { z } from "zod/v4";
/**
 * Coarse operating-system family reported by the CLI
 *
 * @openapiSchema CliAuthorizationClientPlatform
 * @endpoint GET /v1/app/cli-authorizations
 * @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
 * @endpoint POST /v1/auth/cli-authorizations
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
 * @usedBySchema CliAuthorizationMutationSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-client-platform
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export declare const CliAuthorizationClientPlatformSchema: z.ZodEnum<{
    LINUX: "LINUX";
    MACOS: "MACOS";
    OTHER: "OTHER";
    WINDOWS: "WINDOWS";
}>;
export type CliAuthorizationClientPlatform = z.infer<typeof CliAuthorizationClientPlatformSchema>;
//# sourceMappingURL=authorization-client-platform.d.ts.map